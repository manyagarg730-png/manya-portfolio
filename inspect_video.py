import cv2
import os
import numpy as np
from PIL import Image

video_path = "public/character.mp4"
cap = cv2.VideoCapture(video_path)

if not cap.isOpened():
    print("Error opening video")
    exit(1)

fps = cap.get(cv2.CAP_PROP_FPS)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
duration = total_frames / fps if fps > 0 else 0

print(f"Video specs: {width}x{height}, FPS: {fps}, Total Frames: {total_frames}, Duration: {duration:.2f}s")

# Check background color on frame 0 at top-left corner
ret, frame = cap.read()
if ret:
    # Corner sample (top 20x20 pixels)
    top_left = frame[0:20, 0:20]
    # BGR to RGB
    avg_bgr = np.mean(top_left, axis=(0, 1))
    avg_rgb = [int(avg_bgr[2]), int(avg_bgr[1]), int(avg_bgr[0])]
    hex_color = f"#{avg_rgb[0]:02x}{avg_rgb[1]:02x}{avg_rgb[2]:02x}"
    print(f"Sampled Background Color (RGB): {avg_rgb} -> HEX: {hex_color}")

cap.release()
