const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create compressed images directory
const compressedDir = path.join(__dirname, '../public/images/products-compressed');
if (!fs.existsSync(compressedDir)) {
  fs.mkdirSync(compressedDir, { recursive: true });
}

// Function to compress a single image
async function compressImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    await sharp(inputPath)
      .resize(800, 800, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .jpeg({ 
        quality: 80,
        progressive: true 
      })
      .png({ 
        quality: 80,
        compressionLevel: 9 
      })
      .webp({ 
        quality: 80 
      })
      .toFile(outputPath);
    
    const compressedStats = fs.statSync(outputPath);
    const compressedSize = compressedStats.size;
    const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(originalSize/1024/1024).toFixed(2)}MB → ${(compressedSize/1024/1024).toFixed(2)}MB (${compressionRatio}% reduction)`);
    
    return {
      original: originalSize,
      compressed: compressedSize,
      ratio: compressionRatio
    };
  } catch (error) {
    console.error(`❌ Error compressing ${inputPath}:`, error.message);
    return null;
  }
}

// Function to compress all images
async function compressAllImages() {
  const imagesDir = path.join(__dirname, '../public/images/products');
  const files = fs.readdirSync(imagesDir);
  
  console.log(`📁 Found ${files.length} files in ${imagesDir}`);
  console.log(`📁 Compressing to ${compressedDir}`);
  
  const results = [];
  let totalOriginalSize = 0;
  let totalCompressedSize = 0;
  
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const stat = fs.statSync(inputPath);
    
    if (stat.isFile() && /\.(jpg|jpeg|png|gif|webp|JPG|JPEG|PNG|GIF|WEBP)$/i.test(file)) {
      const outputPath = path.join(compressedDir, file);
      const result = await compressImage(inputPath, outputPath);
      
      if (result) {
        results.push(result);
        totalOriginalSize += result.original;
        totalCompressedSize += result.compressed;
      }
    }
  }
  
  const totalCompressionRatio = ((totalOriginalSize - totalCompressedSize) / totalOriginalSize * 100).toFixed(1);
  
  console.log(`\n🎉 Compression complete!`);
  console.log(`📊 Total size: ${(totalOriginalSize/1024/1024).toFixed(2)}MB → ${(totalCompressedSize/1024/1024).toFixed(2)}MB`);
  console.log(`📊 Overall compression: ${totalCompressionRatio}%`);
  console.log(`📊 Images processed: ${results.length}`);
  
  return results;
}

// Run the compression
if (require.main === module) {
  compressAllImages().catch(console.error);
}

module.exports = { compressImage, compressAllImages };
