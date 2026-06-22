const fs = require('fs');
const path = require('path');

// Read the cloudinary images JSON
const cloudinaryImages = JSON.parse(fs.readFileSync('cloudinary-images.json', 'utf8'));

// Generate the mapping object
const imageMapping = {};

cloudinaryImages.forEach(image => {
  const originalPath = `/images/products/${image.filename}`;
  imageMapping[originalPath] = image.public_id;
});

// Generate the TypeScript file content
const tsContent = `import { getCloudinaryImageUrl } from './cloudinary'

// Mapping from old image paths to Cloudinary public IDs
const imageMapping: Record<string, string> = ${JSON.stringify(imageMapping, null, 2)}

// Helper function to get Cloudinary URL from old image path
export function getImageUrl(oldPath: string, width?: number, height?: number): string {
  const publicId = imageMapping[oldPath]
  if (publicId) {
    return getCloudinaryImageUrl(publicId, width, height)
  }
  
  // Fallback to original path if not found in mapping
  return oldPath
}

// Helper function to get optimized product image URL
export function getProductImageUrl(imagePath: string, width: number = 400, height: number = 400): string {
  return getImageUrl(imagePath, width, height)
}
`;

// Write the updated file
fs.writeFileSync('src/lib/image-mapping.ts', tsContent);

console.log(`✅ Generated image mapping with ${Object.keys(imageMapping).length} images`);
console.log('📁 Updated src/lib/image-mapping.ts');
