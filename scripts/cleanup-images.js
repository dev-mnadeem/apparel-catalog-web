const fs = require('fs');
const path = require('path');

// Images that are directly used in the codebase (not through Cloudinary)
const usedImages = [
  // Banner images
  'Untitled design (2).png',
  'Summer ENd (3).png',
  'c.png',
  'Summer ENd (4).png',
  
  // Direct product images used in pistachu page
  'IMG_4277.png',
  '18215009-b781-47d5-87fe-b22bdf39d1bf.png'
];

const productsDir = path.join(__dirname, '../public/images/products');

console.log('Cleaning up unused product images...');

// Get all files in the products directory
const files = fs.readdirSync(productsDir);

let removedCount = 0;
let keptCount = 0;

files.forEach(file => {
  const filePath = path.join(productsDir, file);
  const stat = fs.statSync(filePath);
  
  if (stat.isFile()) {
    if (usedImages.includes(file)) {
      console.log(`✓ Keeping: ${file}`);
      keptCount++;
    } else {
      console.log(`✗ Removing: ${file}`);
      fs.unlinkSync(filePath);
      removedCount++;
    }
  }
});

console.log(`\nCleanup complete!`);
console.log(`- Kept: ${keptCount} files`);
console.log(`- Removed: ${removedCount} files`);
console.log(`\nOnly essential images remain in the products folder.`);
