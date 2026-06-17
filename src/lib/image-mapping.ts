import { getCloudinaryImageUrl } from './cloudinary'

// Mapping from old image paths to Cloudinary public IDs
const imageMapping: Record<string, string> = {
  // Silk Scarves
  '/images/products/IMG_0439.png': 'trendy-folds/IMG_0439',
  '/images/products/IMG_0380.png': 'trendy-folds/IMG_0380',
  '/images/products/IMG_0341.png': 'trendy-folds/IMG_0341',
  '/images/products/6a95ed61-0077-4003-8bbf-36eab791fe86.png': 'trendy-folds/6a95ed61-0077-4003-8bbf-36eab791fe86',
  '/images/products/IMG_0170.png': 'trendy-folds/IMG_0170',
  '/images/products/8b56937b-3d2b-4f97-a61b-aa555f574aff.png': 'trendy-folds/8b56937b-3d2b-4f97-a61b-aa555f574aff',
  '/images/products/IMG_4317.png': 'trendy-folds/IMG_4317',
  '/images/products/d5c0078a-ad18-4da7-8de5-5e8fa07892f1.png': 'trendy-folds/d5c0078a-ad18-4da7-8de5-5e8fa07892f1',
  
  // Additional product images
  '/images/products/IMG_0020.png': 'trendy-folds/IMG_0020',
  '/images/products/IMG_0025.png': 'trendy-folds/IMG_0025',
  '/images/products/IMG_0027.png': 'trendy-folds/IMG_0027',
  '/images/products/IMG_0029.png': 'trendy-folds/IMG_0029',
  '/images/products/IMG_0031.png': 'trendy-folds/IMG_0031',
  '/images/products/IMG_0033.png': 'trendy-folds/IMG_0033',
  '/images/products/IMG_0034.png': 'trendy-folds/IMG_0034',
  '/images/products/IMG_0037.png': 'trendy-folds/IMG_0037',
  '/images/products/IMG_0040.png': 'trendy-folds/IMG_0040',
  '/images/products/IMG_0041.png': 'trendy-folds/IMG_0041',
  '/images/products/IMG_0045.png': 'trendy-folds/IMG_0045',
  '/images/products/IMG_0050.png': 'trendy-folds/IMG_0050',
  '/images/products/IMG_0054.png': 'trendy-folds/IMG_0054',
  '/images/products/IMG_0056.png': 'trendy-folds/IMG_0056',
  '/images/products/IMG_0057.png': 'trendy-folds/IMG_0057',
  '/images/products/IMG_0062.png': 'trendy-folds/IMG_0062',
  '/images/products/IMG_0063.png': 'trendy-folds/IMG_0063',
  '/images/products/IMG_0064.png': 'trendy-folds/IMG_0064',
  '/images/products/IMG_0065.png': 'trendy-folds/IMG_0065',
  '/images/products/IMG_0067.png': 'trendy-folds/IMG_0067',
  '/images/products/IMG_0068.png': 'trendy-folds/IMG_0068',
  '/images/products/IMG_0071.png': 'trendy-folds/IMG_0071',
  '/images/products/IMG_0072.png': 'trendy-folds/IMG_0072',
  '/images/products/IMG_0074.png': 'trendy-folds/IMG_0074',
  '/images/products/IMG_0075.png': 'trendy-folds/IMG_0075',
  '/images/products/IMG_0081.png': 'trendy-folds/IMG_0081',
  '/images/products/IMG_0084.png': 'trendy-folds/IMG_0084',
  '/images/products/IMG_0088.png': 'trendy-folds/IMG_0088',
  '/images/products/IMG_0089.png': 'trendy-folds/IMG_0089',
  '/images/products/IMG_0091.png': 'trendy-folds/IMG_0091',
  '/images/products/IMG_0092.png': 'trendy-folds/IMG_0092',
  
  // Additional images used in components
  '/images/products/18215009-b781-47d5-87fe-b22bdf39d1bf.png': 'trendy-folds/18215009-b781-47d5-87fe-b22bdf39d1bf',
  '/images/products/IMG_4332.png': 'trendy-folds/IMG_4332',
  '/images/products/WhatsApp Image 2025-08-01 at 1.04.04 AM.png': 'trendy-folds/WhatsApp_Image_2025-08-01_at_1.04.04_AM',
  '/images/products/Untitled design (2).png': 'trendy-folds/Untitled_design_2',
  '/images/products/Summer ENd (3).png': 'trendy-folds/Summer_ENd_3',
  '/images/products/c.png': 'trendy-folds/c',
  '/images/products/Summer ENd (4).png': 'trendy-folds/Summer_ENd_4',
  '/images/products/0f5ae0af-d3f9-40b6-b51c-f5b0e1c338e3 2.png': 'trendy-folds/0f5ae0af-d3f9-40b6-b51c-f5b0e1c338e3_2',
  '/images/products/WhatsApp Image 2025-06-03 at 6.27.46 PM (1).png': 'trendy-folds/WhatsApp_Image_2025-06-03_at_6.27.46_PM_1',
  '/images/products/6f8a7fa7-5640-4d9e-98ca-b6fff2bbf32d.png': 'trendy-folds/6f8a7fa7-5640-4d9e-98ca-b6fff2bbf32d',
  '/images/products/1c836977-a43b-4368-b801-b9cdc7b4c2d1.png': 'trendy-folds/1c836977-a43b-4368-b801-b9cdc7b4c2d1',
  '/images/products/2e549476-4ea2-4556-b22c-5a6db764e717.png': 'trendy-folds/2e549476-4ea2-4556-b22c-5a6db764e717',
  '/images/products/3f6ffaa3-d2a7-4efc-aa57-738cd1b18008.png': 'trendy-folds/3f6ffaa3-d2a7-4efc-aa57-738cd1b18008',
  '/images/products/WhatsApp Image 2025-08-23 at 7.45.57 PM.png': 'trendy-folds/WhatsApp_Image_2025-08-23_at_7.45.57_PM',
  '/images/products/WhatsApp Image 2025-08-23 at 6.46.27 PM.png': 'trendy-folds/WhatsApp_Image_2025-08-23_at_6.46.27_PM',
  '/images/products/WhatsApp Image 2025-08-23 at 7.40.36 PM.png': 'trendy-folds/WhatsApp_Image_2025-08-23_at_7.40.36_PM',
  
  // Additional images from trending, sale, and other pages
  '/images/products/cf6e2957-eb9c-48dd-80b9-9e4218e21012.png': 'trendy-folds/cf6e2957-eb9c-48dd-80b9-9e4218e21012',
  '/images/products/IMG_0171.png': 'trendy-folds/IMG_0171',
  '/images/products/9dc9df6d-201f-452d-8036-3b0bc149f800.png': 'trendy-folds/9dc9df6d-201f-452d-8036-3b0bc149f800',
  '/images/products/d930c310-b250-458f-acab-1ea1fd304c4f.png': 'trendy-folds/d930c310-b250-458f-acab-1ea1fd304c4f',
  '/images/products/WhatsApp Image 2024-09-10 at 11.41.04 AM.png': 'trendy-folds/WhatsApp_Image_2024-09-10_at_11.41.04_AM',
  '/images/products/6b8867a9-d34e-4246-a710-b7ecb37167c9.png': 'trendy-folds/6b8867a9-d34e-4246-a710-b7ecb37167c9',
  '/images/products/IMG_7723.png': 'trendy-folds/IMG_7723',
  '/images/products/56bac310-5829-4b2c-8d7b-db59268728aa.png': 'trendy-folds/56bac310-5829-4b2c-8d7b-db59268728aa',
  '/images/products/IMG_7698.png': 'trendy-folds/IMG_7698',
  '/images/products/IMG_7711.jpg': 'trendy-folds/IMG_7711',
  '/images/products/IMG_0348.png': 'trendy-folds/IMG_0348',
  '/images/products/IMG_0517.png': 'trendy-folds/IMG_0517',
  '/images/products/Untitled (1080 x 1350 px) (3).png': 'trendy-folds/Untitled_1080_x_1350_px_3',
  
  // Fallback for any unmapped images
  '/images/products/placeholder.png': 'trendy-folds/IMG_0439',
}

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
export function getProductImageUrl(imagePath: string, width: number = 400, height?: number): string {
  // For product images, use width only to maintain aspect ratio
  return getImageUrl(imagePath, width, height)
}

// Helper function specifically for hero images with higher quality
export function getHeroImageUrl(imagePath: string, width: number = 800, height?: number): string {
  // For hero images, use higher resolution and quality
  const publicId = imageMapping[imagePath]
  if (publicId) {
    return getCloudinaryImageUrl(publicId, width, height, '80', 'auto')
  }
  
  // Fallback to original path if not found in mapping
  return imagePath
}
