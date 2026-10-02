import cv2
import os

cap = cv2.VideoCapture("public/character.mp4")
os.makedirs("debug_frames", exist_ok=True)

total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
print(f"Total frames: {total_frames}")

# Save every 5th frame for quick analysis
frame_idx = 0
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    if frame_idx % 5 == 0 or frame_idx >= total_frames - 20:
        cv2.imwrite(f"debug_frames/frame_{frame_idx:03d}.jpg", frame, [cv2.IMWRITE_JPEG_QUALITY, 60])
    frame_idx += 1

cap.release()
print("Saved sampled debug frames.")
