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

# Accurate sampling to avoid blinks (e.g., frames 35-36 and 225-227)
def get_clean_frame_idx(angle_deg):
    angle_deg = angle_deg % 360
    if 0 <= angle_deg <= 45: # Right -> Down-Right
        t = angle_deg / 45.0
        return int(round(100 + t * (128 - 100)))
    elif 45 < angle_deg <= 90: # Down-Right -> Down
        t = (angle_deg - 45) / 45.0
        return int(round(128 + t * (156 - 128)))
    elif 90 < angle_deg <= 135: # Down -> Down-Left
        t = (angle_deg - 90) / 45.0
        return int(round(156 + t * (192 - 156)))
    elif 135 < angle_deg <= 180: # Down-Left -> Left
        t = (angle_deg - 135) / 45.0
        return int(round(192 + t * (220 - 192)))
    elif 180 < angle_deg <= 225: # Left -> Up-Left
        t = (angle_deg - 180) / 45.0
        if t <= 0.5:
            return int(round(220 + (t / 0.5) * (224 - 220)))
        else:
            return int(round(12 + ((t - 0.5) / 0.5) * (20 - 12)))
    elif 225 < angle_deg <= 270: # Up-Left -> Up
        t = (angle_deg - 225) / 45.0
        return int(round(20 + t * (28 - 20)))
    elif 270 < angle_deg <= 315: # Up -> Up-Right (skip 35-37 blink)
        t = (angle_deg - 270) / 45.0
        # Smoothly go from 28 to 60 skipping 34..37
        if t <= 0.2:
            return int(round(28 + (t / 0.2) * (33 - 28)))
        else:
            return int(round(39 + ((t - 0.2) / 0.8) * (60 - 39)))
    else: # 315 < angle_deg <= 360 # Up-Right -> Right
        t = (angle_deg - 315) / 45.0
        return int(round(60 + t * (100 - 60)))

os.makedirs("public/frames", exist_ok=True)

extracted_64 = []
for i in range(64):
    deg = (i / 64.0) * 360.0
    vf_idx = get_clean_frame_idx(deg)
    frame = raw_frames[vf_idx]
    
    out_path = f"public/frames/{i}.webp"
    cv2.imwrite(out_path, frame, [cv2.IMWRITE_WEBP_QUALITY, 92])
    extracted_64.append(frame)

# Center frame
center_frame = raw_frames[238]
cv2.imwrite("public/frames/center.webp", center_frame, [cv2.IMWRITE_WEBP_QUALITY, 92])

# Background color detection (average of 4 corners across all extracted frames)
corner_pixels = []
for f in extracted_64:
    h, w, _ = f.shape
    corner_pixels.append(f[0:15, 0:15])
    corner_pixels.append(f[0:15, w-15:w])
    corner_pixels.append(f[h-15:h, 0:15])
    corner_pixels.append(f[h-15:h, w-15:w])

corner_pixels = np.concatenate(corner_pixels, axis=0)
avg_bgr = np.mean(corner_pixels, axis=(0, 1))
avg_rgb = [int(round(avg_bgr[2])), int(round(avg_bgr[1])), int(round(avg_bgr[0]))]
hex_color = f"#{avg_rgb[0]:02x}{avg_rgb[1]:02x}{avg_rgb[2]:02x}"

print(f"Optimal Red Background Color: RGB {avg_rgb} -> {hex_color}")
