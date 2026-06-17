const fs = require('fs');
const path = require('path');

// Create placeholder SVG images for products and categories
const createPlaceholderSVG = (width, height, text, bgColor = '#f3f4f6', textColor = '#6b7280') => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
  </svg>`;
};

// Product images
const productImages = [
  { name: 'dress-1.jpg', text: 'Summer Dress', width: 400, height: 400 },
  { name: 'dress-1-2.jpg', text: 'Summer Dress 2', width: 400, height: 400 },
  { name: 'shirt-1.jpg', text: 'White Shirt', width: 400, height: 400 },
  { name: 'shirt-1-2.jpg', text: 'White Shirt 2', width: 400, height: 400 },
  { name: 'bag-1.jpg', text: 'Leather Bag', width: 400, height: 400 },
  { name: 'bag-1-2.jpg', text: 'Leather Bag 2', width: 400, height: 400 },
];

// Category images
const categoryImages = [
  { name: 'women.jpg', text: 'Women\'s Fashion', width: 400, height: 500 },
  { name: 'men.jpg', text: 'Men\'s Fashion', width: 400, height: 500 },
  { name: 'accessories.jpg', text: 'Accessories', width: 400, height: 500 },
];

// Banner images
const bannerImages = [
  { name: 'hero-banner.jpg', text: 'Hero Banner', width: 1200, height: 600 },
  { name: 'sale-banner.jpg', text: 'Sale Banner', width: 1200, height: 400 },
];

// Generate product images
productImages.forEach(img => {
  const svg = createPlaceholderSVG(img.width, img.height, img.text, '#e5e7eb', '#374151');
  fs.writeFileSync(path.join(__dirname, '../public/images/products', img.name.replace('.jpg', '.svg')), svg);
});

// Generate category images
categoryImages.forEach(img => {
  const svg = createPlaceholderSVG(img.width, img.height, img.text, '#dbeafe', '#1e40af');
  fs.writeFileSync(path.join(__dirname, '../public/images/categories', img.name.replace('.jpg', '.svg')), svg);
});

// Generate banner images
bannerImages.forEach(img => {
  const svg = createPlaceholderSVG(img.width, img.height, img.text, '#818cf8', '#ffffff');
  fs.writeFileSync(path.join(__dirname, '../public/images/banners', img.name.replace('.jpg', '.svg')), svg);
});

console.log('Placeholder images generated successfully!');
console.log('Products:', productImages.length);
console.log('Categories:', categoryImages.length);
console.log('Banners:', bannerImages.length);
