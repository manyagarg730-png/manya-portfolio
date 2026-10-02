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

# Generate pure un-shrunken 1080p frames at Quality 100 with Lanczos4 upscaling
for i in range(64):
    deg = (i / 64.0) * 360.0
    vf_idx = get_clean_frame_idx(deg)
    frame = raw_frames[vf_idx]
    
    # Resize raw 1280x720 directly to 1920x1080 with Lanczos4 and subtle sharpening
    hd = cv2.resize(frame, (1920, 1080), interpolation=cv2.INTER_LANCZOS4)
    gaussian = cv2.GaussianBlur(hd, (0, 0), 1.2)
    sharpened = cv2.addWeighted(hd, 1.25, gaussian, -0.25, 0)
    
    cv2.imwrite(f"public/frames/{i}.webp", sharpened, [cv2.IMWRITE_WEBP_QUALITY, 100])

# Center frame
center_hd = cv2.resize(raw_frames[238], (1920, 1080), interpolation=cv2.INTER_LANCZOS4)
gaussian = cv2.GaussianBlur(center_hd, (0, 0), 1.2)
center_sharp = cv2.addWeighted(center_hd, 1.25, gaussian, -0.25, 0)
cv2.imwrite("public/frames/center.webp", center_sharp, [cv2.IMWRITE_WEBP_QUALITY, 100])

print("Finished generating pure full-size 1080p WebP frames at Quality 100!")
