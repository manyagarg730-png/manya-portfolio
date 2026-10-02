import cv2
import numpy as np
import os

# Load raw video
cap = cv2.VideoCapture("public/character.mp4")
raw_frames = []
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    raw_frames.append(frame)
cap.release()

print(f"Loaded {len(raw_frames)} frames")

# Let's inspect a frame: 1280x720
sample = raw_frames[0]
sh, sw, _ = sample.shape

# Target full HD frame: 1920x1080
# In 1920x1080, if we place the character scaled nicely:
# Scale factor: 0.85
scale = 0.82
new_w = int(sw * scale) # ~1050
new_h = int(sh * scale) # ~590

# Let's create a smooth background for 1920x1080 that matches the video lighting:
# In the video, color is roughly BGR [24, 20, 204] on left, [28, 24, 214] on right
bg_1080 = np.zeros((1080, 1920, 3), dtype=np.uint8)
for x in range(1920):
    t = x / 1920.0
    b = int(22 + t * (28 - 22))
    g = int(18 + t * (24 - 18))
    r = int(198 + t * (214 - 198))
    bg_1080[:, x] = [b, g, r]

# Let's write a function to composite a frame into the 1920x1080 canvas with soft feathered alpha blending on edges
def create_seamless_proportioned_frame(frame):
    # Resize frame
    scaled_f = cv2.resize(frame, (new_w, new_h), interpolation=cv2.INTER_LANCZOS4)
    
    # Sharpen character
    gaussian = cv2.GaussianBlur(scaled_f, (0, 0), 1.2)
    sharpened = cv2.addWeighted(scaled_f, 1.2, gaussian, -0.2, 0)
    
    # Position: Bottom-anchored so her shoulders rest naturally at the bottom, centered horizontally
    pos_x = (1920 - new_w) // 2 + 50 # slightly to the right of center for text clearance
    pos_y = 1080 - new_h # bottom aligned
    
    # Create canvas
    canvas = bg_1080.copy()
    
    # Create a soft alpha mask for the scaled frame so its top and left/right borders fade smoothly into canvas
    mask = np.ones((new_h, new_w), dtype=np.float32)
    
    # Feather top border (40 pixels)
    feather_top = 40
    for y in range(feather_top):
        mask[y, :] *= (y / feather_top)
        
    # Feather left border (60 pixels)
    feather_side = 60
    for x in range(feather_side):
        mask[:, x] *= (x / feather_side)
        
    # Feather right border (60 pixels)
    for x in range(feather_side):
        mask[:, -(x+1)] *= (x / feather_side)
        
    mask = np.expand_dims(mask, axis=2)
    
    # Blend into canvas
    roi = canvas[pos_y:pos_y+new_h, pos_x:pos_x+new_w].astype(np.float32)
    blended = (sharpened.astype(np.float32) * mask + roi * (1.0 - mask)).astype(np.uint8)
    canvas[pos_y:pos_y+new_h, pos_x:pos_x+new_w] = blended
    
    return canvas

# Test on frame 0 and frame 238
test_0 = create_seamless_proportioned_frame(raw_frames[0])
test_center = create_seamless_proportioned_frame(raw_frames[238])

cv2.imwrite("test_seamless_0.jpg", test_0)
cv2.imwrite("test_seamless_center.jpg", test_center)
print("Saved test_seamless_0.jpg and test_seamless_center.jpg")
