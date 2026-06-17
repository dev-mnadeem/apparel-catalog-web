// Builds a delivery URL; no SDK or credentials are needed to read public images.
export function getCloudinaryImageUrl(
  cloudName: string,
  publicId: string,
  width?: number,
  height?: number,
  quality: string = 'auto',
  format: string = 'auto'
): string {
  const transformations: string[] = []

  // c_fit keeps the aspect ratio so tall scarf photos are not stretched.
  if (width && height) {
    transformations.push(`w_${width},h_${height},c_fit`)
  } else if (width) {
    transformations.push(`w_${width},c_scale`)
  } else if (height) {
    transformations.push(`h_${height},c_scale`)
  }
  if (quality) transformations.push(`q_${quality}`)
  if (format) transformations.push(`f_${format}`)
  transformations.push('dpr_auto')

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations.join(',')}/${publicId}`
}
