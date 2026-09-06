import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Copy the generated hero, about, and showreel images
const brainDir = 'C:\\Users\\JAMSHEER\\.gemini\\antigravity-ide\\brain\\dd8b6a44-d94c-4f50-9275-887dcdf4fdcd';

const copyIfExists = (srcNamePattern, destName) => {
  const files = fs.readdirSync(brainDir);
  const match = files.find(f => f.startsWith(srcNamePattern));
  if (match) {
    fs.copyFileSync(path.join(brainDir, match), path.join(imagesDir, destName));
    console.log(`Copied ${match} to ${destName}`);
  } else {
    console.log(`File matching ${srcNamePattern} not found`);
  }
};

copyIfExists('hero_cinematographer', 'hero-bw.jpg');
copyIfExists('about_portrait', 'about.jpg');
copyIfExists('showreel_thumbnail', 'showreel-thumb.jpg');

// Curated high quality cinematic project stills
const projectImages = [
  { file: 'work-01.jpg', url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1920&q=80' }, // Chevron Corporate Documentary
  { file: 'work-02.jpg', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80' }, // BMW Explanatory Video
  { file: 'work-03.jpg', url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=80' }, // Bentley Promotional Video
  { file: 'work-04.jpg', url: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1920&q=80' }, // Jetour Commercial
  { file: 'work-05.jpg', url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1920&q=80' }, // Audi Brand Film
  { file: 'work-06.jpg', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1920&q=80' }, // Toyota Commercial
  { file: 'work-07.jpg', url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=80' }, // Bahrain Duty Free Case Study
  { file: 'work-08.jpg', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80' }  // Havelock Corporate Documentary
];

// Curated 12 BTS photos: lighting rigs, cinema cameras, director monitor, dolly track, film sets
const btsImages = [
  { file: 'bts-01.jpg', url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80' }, // Movie set camera
  { file: 'bts-02.jpg', url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80' }, // Camera rig
  { file: 'bts-03.jpg', url: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80' }, // Lighting setup
  { file: 'bts-04.jpg', url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80' }, // Cinematographer with camera
  { file: 'bts-05.jpg', url: 'https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?auto=format&fit=crop&w=800&q=80' }, // Studio lighting
  { file: 'bts-06.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80' }, // Monitor / editing
  { file: 'bts-07.jpg', url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80' }, // Filming stage
  { file: 'bts-08.jpg', url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80' }, // Cinema theater / grading
  { file: 'bts-09.jpg', url: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?auto=format&fit=crop&w=800&q=80' }, // Production setup
  { file: 'bts-10.jpg', url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80' }, // Cinema reel / lens
  { file: 'bts-11.jpg', url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80' }, // Camera operator
  { file: 'bts-12.jpg', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80' }  // Industrial film set
];

async function download(item) {
  const dest = path.join(imagesDir, item.file);
  try {
    const res = await fetch(item.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(arrayBuffer));
    console.log(`Downloaded ${item.file}`);
  } catch (err) {
    console.error(`Failed to download ${item.file}:`, err.message);
  }
}

async function run() {
  for (const item of [...projectImages, ...btsImages]) {
    await download(item);
  }
  console.log('All images downloaded successfully.');
}

run();
