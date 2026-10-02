import cv2
import numpy as np

# Load a sample frame
cap = cv2.VideoCapture("public/character.mp4")
ret, frame = cap.read()
cap.release()

h, w, _ = frame.shape
print(f"Frame shape: {w}x{h}")

# Check color across the background:
print("Top-Left:", frame[10, 10].tolist())
print("Top-Right:", frame[10, w-10].tolist())
print("Mid-Left:", frame[h//2, 10].tolist())
print("Mid-Right:", frame[h//2, w-10].tolist())
print("Bottom-Left:", frame[h-10, 10].tolist())
print("Bottom-Right:", frame[h-10, w-10].tolist())
