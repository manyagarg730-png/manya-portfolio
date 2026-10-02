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

# Find the exact background color from raw video corners
corners = []
for f in raw_frames:
    h, w, _ = f.shape
    corners.append(f[0:10, 0:10])
    corners.append(f[0:10, w-10:w])
corners = np.concatenate(corners, axis=0)
bg_bgr = np.mean(corners, axis=(0, 1)).astype(np.uint8)
bg_rgb = [int(bg_bgr[2]), int(bg_bgr[1]), int(bg_bgr[0])]
bg_hex = f"#{bg_rgb[0]:02x}{bg_rgb[1]:02x}{bg_rgb[2]:02x}"
print(f"Exact Background Color (BGR): {bg_bgr} -> (RGB): {bg_rgb} -> HEX: {bg_hex}")

# Accurate mapping for 360 degree rotation
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

# Process frames with ultra-high WebP quality (98) and feathering outer edges
for i in range(64):
    deg = (i / 64.0) * 360.0
    vf_idx = get_clean_frame_idx(deg)
    frame = raw_frames[vf_idx].copy()
    
    # Clean up outer 3-pixel borders to match background perfectly to remove any codec boundary line
    frame[0:4, :] = bg_bgr
    frame[:, 0:4] = bg_bgr
    frame[:, -4:] = bg_bgr
    
    out_path = f"public/frames/{i}.webp"
    cv2.imwrite(out_path, frame, [cv2.IMWRITE_WEBP_QUALITY, 98])

# Center frame
center_frame = raw_frames[238].copy()
center_frame[0:4, :] = bg_bgr
center_frame[:, 0:4] = bg_bgr
center_frame[:, -4:] = bg_bgr
cv2.imwrite("public/frames/center.webp", center_frame, [cv2.IMWRITE_WEBP_QUALITY, 98])

print("Finished extracting 64 ultra-sharp WebP frames + center.webp at Q98")
