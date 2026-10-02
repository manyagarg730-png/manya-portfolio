import cv2
import numpy as np

cap = cv2.VideoCapture("public/character.mp4")
frames = {}
idx = 0
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    if idx >= 210:
        frames[idx] = frame
    idx += 1
cap.release()

h, w = 180, 320
cols = 6
rows = 5
grid = np.zeros((rows * h, cols * w, 3), dtype=np.uint8)

for i, f_num in enumerate(sorted(frames.keys())):
    if i >= rows * cols:
        break
    r = i // cols
    c = i % cols
    thumb = cv2.resize(frames[f_num], (w, h))
    cv2.putText(thumb, f"F:{f_num}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
    grid[r*h:(r+1)*h, c*w:(c+1)*w] = thumb

cv2.imwrite("end_frames_montage.jpg", grid)
print("Saved end_frames_montage.jpg")
