import cv2
import numpy as np

# Load raw video
cap = cv2.VideoCapture("public/character.mp4")
raw_frames = []
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    raw_frames.append(frame)
cap.release()

# Let's inspect frame 238 (neutral center)
raw_center = raw_frames[238]
# Resize raw 1280x720 to 1920x1080 full HD with Lanczos
hd_center = cv2.resize(raw_center, (1920, 1080), interpolation=cv2.INTER_LANCZOS4)
gaussian = cv2.GaussianBlur(hd_center, (0, 0), 1.2)
hd_center_sharp = cv2.addWeighted(hd_center, 1.2, gaussian, -0.2, 0)

# Simulate a 1440x900 / 1920x1080 viewport
# Bottom-aligned:
# drawW = h * (1920 / 1080)
# drawH = h
# drawX = (w - drawW) * 0.5 (or shifted right)
# drawY = 0

# Let's render a simulation of a 1440x900 viewport:
vw, vh = 1440, 900
aspect = 1920 / 1080 # 1.7777
v_aspect = vw / vh # 1.6

# In 1440x900:
# If cover bottom-aligned:
draw_h = vh # 900
draw_w = int(draw_h * aspect) # 1600
draw_x = int((vw - draw_w) * 0.5) # -80
draw_y = 0

sim = cv2.resize(hd_center_sharp, (draw_w, draw_h))
viewport_crop = sim[0:vh, -draw_x:-draw_x+vw]

# Add text mock and navbar mock to see how it looks
cv2.putText(viewport_crop, "ABOUT   SERVICES   CONTACT", (vw//2 - 150, 40), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
cv2.putText(viewport_crop, "Hi, I'm", (80, vh - 220), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)
cv2.putText(viewport_crop, "Manya Garg", (80, vh - 150), cv2.FONT_HERSHEY_SIMPLEX, 1.8, (255, 255, 255), 3)

cv2.imwrite("sim_viewport.jpg", viewport_crop)
print("Saved sim_viewport.jpg")
