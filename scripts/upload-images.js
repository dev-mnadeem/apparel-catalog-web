const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to upload a single image
async function uploadImage(filePath, folder = 'trendy-folds') {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folder,
      resource_type: 'auto',
      quality: 'auto',
      fetch_format: 'auto',
      use_filename: true,
      unique_filename: false
    });
    
    console.log(`✅ Uploaded: ${path.basename(filePath)} -> ${result.public_id}`);
    return {
      filename: path.basename(filePath),
      public_id: result.public_id,
      url: result.secure_url
    };
  } catch (error) {
    console.error(`❌ Error uploading ${filePath}:`, error.message);
    return null;
  }
}

// Function to upload all images in a directory
async function uploadAllImages() {
  const imagesDir = path.join(__dirname, '../public/images/products-compressed');
  const files = fs.readdirSync(imagesDir);
  
  console.log(`📁 Found ${files.length} files in ${imagesDir}`);
  
  const results = [];
  
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile() && /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      const result = await uploadImage(filePath);
      if (result) {
        results.push(result);
      }
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  // Save results to a JSON file
  const outputPath = path.join(__dirname, '../cloudinary-images.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  
  console.log(`\n🎉 Upload complete! ${results.length} images uploaded.`);
  console.log(`📄 Results saved to: ${outputPath}`);
  
  return results;
}

// Run the upload
if (require.main === module) {
  uploadAllImages().catch(console.error);
}

module.exports = { uploadImage, uploadAllImages };
