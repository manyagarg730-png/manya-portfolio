import cv2
import numpy as np
import os

cap = cv2.VideoCapture("public/character.mp4")
raw_frames = []
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    raw_frames.append(frame)
cap.release()

print(f"Loaded {len(raw_frames)} video frames")

scale = 0.96
new_w = int(1280 * scale)
new_h = int(720 * scale)
pos_x = (1920 - new_w) // 2
pos_y = 1080 - new_h

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

def get_clean_frame_idx(angle_deg):
    angle_deg = angle_deg % 360
    if 0 <= angle_deg <= 45:
        t = angle_deg / 45.0
        return int(round(100 + t * (128 - 100)))
    elif 45 < angle_deg <= 90:
        t = (angle_deg - 45) / 45.0
        return int(round(128 + t * (156 - 128)))
    elif 90 < angle_deg <= 135:
        t = (angle_deg - 90) / 45.0
        return int(round(156 + t * (192 - 156)))
    elif 135 < angle_deg <= 180:
        t = (angle_deg - 135) / 45.0
        return int(round(192 + t * (220 - 192)))
    elif 180 < angle_deg <= 225:
        t = (angle_deg - 180) / 45.0
        if t <= 0.5:
            return int(round(220 + (t / 0.5) * (224 - 220)))
        else:
            return int(round(12 + ((t - 0.5) / 0.5) * (20 - 12)))
    elif 225 < angle_deg <= 270:
        t = (angle_deg - 225) / 45.0
        return int(round(20 + t * (28 - 20)))
    elif 270 < angle_deg <= 315:
        t = (angle_deg - 270) / 45.0
        if t <= 0.2:
            return int(round(28 + (t / 0.2) * (33 - 28)))
        else:
            return int(round(39 + ((t - 0.2) / 0.8) * (60 - 39)))
    else:
        t = (angle_deg - 315) / 45.0
        return int(round(60 + t * (100 - 60)))

os.makedirs("public/frames", exist_ok=True)

for i in range(64):
    deg = (i / 64.0) * 360.0
    vf_idx = get_clean_frame_idx(deg)
    enhanced = render_frame_seamless(raw_frames[vf_idx])
    cv2.imwrite(f"public/frames/{i}.webp", enhanced, [cv2.IMWRITE_WEBP_QUALITY, 98])

center_enhanced = render_frame_seamless(raw_frames[238])
cv2.imwrite("public/frames/center.webp", center_enhanced, [cv2.IMWRITE_WEBP_QUALITY, 98])

print("Finished generating 64 perfectly-proportioned seamless WebP frames + center.webp")
