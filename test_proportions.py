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

print(f"Loaded {len(raw_frames)} frames")

# Sample background color accurately from the top corners of the video
sample_frame = raw_frames[0]
bg_color = np.median(sample_frame[0:20, 0:40], axis=(0, 1)).astype(np.uint8)
print(f"Background color BGR: {bg_color.tolist()} -> RGB: {[int(bg_color[2]), int(bg_color[1]), int(bg_color[0])]}")

# Target frame size: 1920x1080
# In 1920x1080, let's scale the 1280x720 character so she matches Screenshot 2 perfectly:
# Scale: 0.72 (so she is smaller, perfectly proportioned, showing full upper torso and shoulders)
scale = 0.72
new_w = int(1280 * scale) # 921
new_h = int(720 * scale)  # 518

# Positioning in 1920x1080 canvas:
# Centered horizontally, bottom-anchored
pos_x = (1920 - new_w) // 2 # 499
pos_y = 1080 - new_h        # 562

def process_perfect_frame(frame):
    # Create solid red background canvas
    canvas = np.full((1080, 1920, 3), bg_color, dtype=np.uint8)
    
    # Scale frame with high-quality Lanczos4
    scaled = cv2.resize(frame, (new_w, new_h), interpolation=cv2.INTER_LANCZOS4)
    
    # Subtle unsharp mask for razor-sharp hair & eyes
    gaussian = cv2.GaussianBlur(scaled, (0, 0), 1.2)
    sharpened = cv2.addWeighted(scaled, 1.25, gaussian, -0.25, 0)
    
    # Create smooth feathering on top, left, right edges so the video background melts into canvas with 0 seams
    mask = np.ones((new_h, new_w), dtype=np.float32)
    
    # Smooth feather top (50 px)
    for y in range(50):
        mask[y, :] *= (y / 50.0)
    # Smooth feather left & right (60 px)
    for x in range(60):
        mask[:, x] *= (x / 60.0)
        mask[:, -(x+1)] *= (x / 60.0)
        
    mask = np.expand_dims(mask, axis=2)
    
    # Blend into canvas
    roi = canvas[pos_y:pos_y+new_h, pos_x:pos_x+new_w].astype(np.float32)
    blended = (sharpened.astype(np.float32) * mask + roi * (1.0 - mask)).astype(np.uint8)
    canvas[pos_y:pos_y+new_h, pos_x:pos_x+new_w] = blended
    
    return canvas

# Test on frame 238
test_out = process_perfect_frame(raw_frames[238])
cv2.imwrite("test_perfect_proportions.jpg", test_out)
print("Saved test_perfect_proportions.jpg")
