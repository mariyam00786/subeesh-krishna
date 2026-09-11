import os
from PIL import Image, ImageEnhance, ImageFilter
import numpy as np

def generate_perfect_hero():
    src_path = 'public/images/about.jpg'
    img = Image.open(src_path).convert('RGB')
    
    # 1. Crop: start at y=1050 to give nice headroom
    cropped = img.crop((0, 1050, 2773, 4160))
    orig_crop_w, orig_crop_h = cropped.size
    
    # Target 16:9 canvas: 2560 x 1440
    canvas_w, canvas_h = 2560, 1440
    scale = canvas_h / float(orig_crop_h)
    new_w = int(orig_crop_w * scale)
    new_h = canvas_h
    
    resized = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
    arr = np.array(resized, dtype=np.float32)
    
    Y, X = np.mgrid[0:new_h, 0:new_w]
    
    # 2. Targeted Shirt Darkening:
    # Turns off-white shirt into authentic dark black crewneck
    dist_below_collar = np.clip((Y - 760) / 100.0, 0, 1)
    body_x_mask = np.clip((940 - X) / 90.0, 0, 1)
    shirt_mask = dist_below_collar * body_x_mask
    
    # Darken shirt to deep black (92%)
    arr_shirt_darkened = arr * (1.0 - 0.92 * shirt_mask[:, :, None])
    
    # 3. Chiaroscuro Lighting Curve:
    r = arr_shirt_darkened[:, :, 0]
    g = arr_shirt_darkened[:, :, 1]
    b = arr_shirt_darkened[:, :, 2]
    gray = 0.28 * r + 0.60 * g + 0.12 * b
    
    norm = gray / 255.0
    # Clean black backdrop
    norm = np.maximum(0, (norm - 0.035) / 0.965)
    
    # Lift face and camera midtones
    face_dist = np.sqrt(((X - 680) / 380.0)**2 + ((Y - 480) / 320.0)**2)
    face_boost = np.clip(1.0 - face_dist, 0, 1)
    gamma = 0.83 - 0.08 * face_boost
    norm_boosted = np.power(norm, gamma)
    
    # Contrast curve
    contrast = 1.25
    bw_graded = np.clip((norm_boosted - 0.40) * contrast + 0.40, 0, 1)
    bw_uint8 = (bw_graded * 255.0).astype(np.uint8)
    bw_rgb = np.stack([bw_uint8, bw_uint8, bw_uint8], axis=-1)
    
    # 4. Seamless Organic Mask:
    # Smooth left fade (starts at X=240 to 620)
    fade_x = np.clip((X - 240) / 380.0, 0, 1)
    smooth_x = (1.0 - np.cos(fade_x * np.pi)) / 2.0
    
    # Bottom fade
    fade_y_bot = np.clip((new_h - Y) / 220.0, 0, 1)
    smooth_y_bot = (1.0 - np.cos(fade_y_bot * np.pi)) / 2.0
    
    # Top fade
    fade_y_top = np.clip(Y / 130.0, 0, 1)
    smooth_y_top = (1.0 - np.cos(fade_y_top * np.pi)) / 2.0
    
    # Far right fade
    fade_x_right = np.clip((new_w - X) / 80.0, 0, 1)
    smooth_x_right = (1.0 - np.cos(fade_x_right * np.pi)) / 2.0
    
    mask = smooth_x * smooth_y_bot * smooth_y_top * smooth_x_right
    alpha_img = Image.fromarray((mask * 255).astype(np.uint8), mode='L')
    
    # Exact calibration: face center at x = 0.73 of 2560 canvas (1870px)
    # Face center in resized image is 680px.
    # paste_x = 1870 - 680 = 1190
    paste_x = 1190
    paste_y = 0
    
    canvas_bw = Image.new('RGB', (canvas_w, canvas_h), (0, 0, 0))
    canvas_bw.paste(Image.fromarray(bw_rgb), (paste_x, paste_y), alpha_img)
    canvas_bw.save('public/images/hero-bw.jpg', quality=96)
    print("Updated public/images/hero-bw.jpg with exact 73% face center calibration!")

if __name__ == '__main__':
    generate_perfect_hero()
