import cv2
import numpy as np

# Load video
cap = cv2.VideoCapture("public/character.mp4")
raw_frames = []
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    raw_frames.append(frame)
cap.release()

# Let's test scale = 0.96 with vertical gradient canvas:
scale = 0.96
new_w = int(1280 * scale) # 1228
new_h = int(720 * scale)  # 691
pos_x = (1920 - new_w) // 2
pos_y = 1080 - new_h

# Video background color gradient (vertical & horizontal model):
# Top: [25, 20, 204], Bottom: [20, 16, 192]
bg_canvas = np.zeros((1080, 1920, 3), dtype=np.uint8)
for y in range(1080):
    t_y = y / 1080.0
    for x in range(1920):
        t_x = x / 1920.0
        b = int((25 - t_y * 5) + (t_x * 4))
        g = int((20 - t_y * 4) + (t_x * 4))
        r = int((204 - t_y * 12) + (t_x * 8))
        bg_canvas[y, x] = [b, g, r]

def render_frame_seamless(frame):
    canvas = bg_canvas.copy()
    scaled = cv2.resize(frame, (new_w, new_h), interpolation=cv2.INTER_LANCZOS4)
    gaussian = cv2.GaussianBlur(scaled, (0, 0), 1.2)
    sharpened = cv2.addWeighted(scaled, 1.25, gaussian, -0.25, 0)
    
    # Smooth feather mask
    mask = np.ones((new_h, new_w), dtype=np.float32)
    feather = 80
    for y in range(feather):
        mask[y, :] *= (y / float(feather))
    for x in range(feather):
        mask[:, x] *= (x / float(feather))
        mask[:, -(x+1)] *= (x / float(feather))
        
    mask = np.expand_dims(mask, axis=2)
    roi = canvas[pos_y:pos_y+new_h, pos_x:pos_x+new_w].astype(np.float32)
    blended = (sharpened.astype(np.float32) * mask + roi * (1.0 - mask)).astype(np.uint8)
    canvas[pos_y:pos_y+new_h, pos_x:pos_x+new_w] = blended
    return canvas

test_out = render_frame_seamless(raw_frames[238])
cv2.imwrite("test_seamless_v2.jpg", test_out)
print("Saved test_seamless_v2.jpg")
