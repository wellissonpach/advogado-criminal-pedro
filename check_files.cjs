const fs = require('fs');
const path = require('path');

function checkFile(filePath) {
  try {
    const buf = fs.readFileSync(filePath);
    const hex = buf.slice(0, 16).toString('hex');
    const size = buf.length;
    
    let format = 'UNKNOWN';
    if (hex.startsWith('89504e47')) format = 'PNG';
    else if (hex.startsWith('ffd8ff')) format = 'JPEG';
    else if (hex.startsWith('47494638')) format = 'GIF';
    else if (hex.startsWith('52494646')) format = 'WEBP/RIFF';
    else if (hex.startsWith('00000018') || hex.startsWith('0000001c') || hex.startsWith('00000020')) format = 'MP4';
    
    // Check for UTF-8 BOM or corruption
    const hasEFBFBD = buf.slice(0, 100).toString('hex').includes('efbfbd');
    
    console.log(`${filePath}`);
    console.log(`  Size: ${size} bytes`);
    console.log(`  Header hex: ${hex}`);
    console.log(`  Detected: ${format}`);
    console.log(`  Extension: ${path.extname(filePath)}`);
    console.log(`  Corrupted (has EFBFBD): ${hasEFBFBD}`);
    if (format === 'JPEG' && path.extname(filePath) === '.png') {
      console.log(`  *** MISMATCH: JPEG data in .png file! ***`);
    }
    console.log('');
  } catch(e) {
    console.log(`${filePath}: ERROR - ${e.message}\n`);
  }
}

// Check all relevant files
console.log('=== PUBLIC LOGO FILES ===');
checkFile('public/logo/Improving_logo_resolution_2K_202608062337.png');
checkFile('public/logo/Improving_logo_resolution_2K_202608062337.jpeg');
checkFile('public/logo/logo.png');
checkFile('public/logo/logo_transparent.png');
checkFile('public/logo.png');
checkFile('public/logo.jpeg');

console.log('=== PUBLIC IMAGES ===');
checkFile('public/images/dr-pedro.png');

console.log('=== PUBLIC VIDEOS ===');
checkFile('public/videos/Man_adjusting_suit_1080p_202608062135.mp4');
checkFile('public/videos/hero-background.mp4');
checkFile('public/videos/man_adjusting_suit.mp4');

console.log('=== ORIGINAL SOURCE FILES ===');
checkFile('logo/Improving_logo_resolution_2K_202608062337.jpeg');
checkFile('pedro.ribeiro/Dr.Pedro.png');
