// Client-side only Cloudinary configuration
// We don't need the full cloudinary SDK for client-side image URLs

// Helper function to get optimized image URL
export function getCloudinaryImageUrl(
  publicId: string,
  width?: number,
  height?: number,
  quality: string = 'auto',
  format: string = 'auto'
): string {
  const baseUrl = `https://res.cloudinary.com/dgn4nknky/image/upload`
  
  const transformations = []
  
  // Use fit: 'inside' to maintain aspect ratio and prevent stretching
  if (width && height) {
    transformations.push(`w_${width},h_${height},c_fit`)
  } else if (width) {
    transformations.push(`w_${width},c_scale`)
  } else if (height) {
    transformations.push(`h_${height},c_scale`)
  }
  
  // Use higher quality for better image clarity
  if (quality) transformations.push(`q_${quality}`)
  if (format) transformations.push(`f_${format}`)
  
  // Add DPR (Device Pixel Ratio) support for high-DPI displays
  transformations.push(`dpr_auto`)
  
  const transformString = transformations.length > 0 ? `/${transformations.join(',')}` : ''
  
  return `${baseUrl}${transformString}/${publicId}`
}

// Upload functions are handled server-side only
