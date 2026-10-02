import cv2
import numpy as np
import os

# Let's inspect frames around various timestamps
cap = cv2.VideoCapture("public/character.mp4")
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

# Let's create a montage grid of 24 frames across the video to easily see the full cycle
grid_cols = 6
grid_rows = 4
montage = None

indices = np.linspace(0, total_frames - 1, grid_cols * grid_rows, dtype=int)

frames_dict = {}
frame_idx = 0
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    if frame_idx in indices:
        frames_dict[frame_idx] = frame
    frame_idx += 1
cap.release()

# Let's assemble a contact sheet
h, w = 180, 320 # resized thumbnail
grid_img = np.zeros((grid_rows * h, grid_cols * w, 3), dtype=np.uint8)

for i, idx in enumerate(indices):
    r = i // grid_cols
    c = i % grid_cols
    thumb = cv2.resize(frames_dict[idx], (w, h))
    cv2.putText(thumb, f"F:{idx}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)
    grid_img[r*h:(r+1)*h, c*w:(c+1)*w] = thumb

cv2.imwrite("timeline_montage.jpg", grid_img)
print(f"Created timeline_montage.jpg with {len(indices)} frames.")
