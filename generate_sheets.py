import cv2
import numpy as np

cap = cv2.VideoCapture("public/character.mp4")
frames = []
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    frames.append(frame)
cap.release()

print(f"Total frames loaded: {len(frames)}")

# Create sheets of 48 frames each (5 sheets = 240 frames)
for sheet in range(5):
    h, w = 120, 213
    cols = 8
    rows = 6
    grid = np.zeros((rows * h, cols * w, 3), dtype=np.uint8)
    for r in range(rows):
        for c in range(cols):
            idx = sheet * 48 + r * cols + c
            if idx < len(frames):
                thumb = cv2.resize(frames[idx], (w, h))
                cv2.putText(thumb, f"{idx}", (5, 20), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 255), 2)
                grid[r*h:(r+1)*h, c*w:(c+1)*w] = thumb
    cv2.imwrite(f"sheet_{sheet}.jpg", grid)
print("Saved 5 detailed sheets.")
