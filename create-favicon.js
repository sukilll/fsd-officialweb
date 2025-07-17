const https = require('https');
const fs = require('fs');
const path = require('path');

// The logo URL from your Navigation component
const logoUrl = 'https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/sign/web/Silver%20Logo%20on%20Black%20Gradient.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMGE0YTk1My0wMmMxLTRmYTMtOGM2OS1lNmNlMzQwZDA1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvU2lsdmVyIExvZ28gb24gQmxhY2sgR3JhZGllbnQucG5nIiwiaWF0IjoxNzUxMzQ1NjQ0LCJleHAiOjE3ODI4ODE2NDR9.y26V7gNJ72EJUxNPXjfVlK-geTpsvMNngmw2SpTp-fU';

const publicDir = path.join(__dirname, 'public');

// Download the image
console.log('Downloading logo from:', logoUrl);

https.get(logoUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error('Failed to download image:', response.statusCode);
    return;
  }

  const filePath = path.join(publicDir, 'fsd-logo.png');
  const fileStream = fs.createWriteStream(filePath);
  
  response.pipe(fileStream);
  
  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Logo downloaded successfully to:', filePath);
    console.log('');
    console.log('Next steps:');
    console.log('1. Use an online favicon generator like https://realfavicongenerator.net/');
    console.log('2. Upload the downloaded fsd-logo.png file');
    console.log('3. Download the generated favicon files');
    console.log('4. Replace the files in the public directory');
    console.log('');
    console.log('Or use ImageMagick to convert manually:');
    console.log('convert fsd-logo.png -resize 32x32 favicon-32x32.png');
    console.log('convert fsd-logo.png -resize 16x16 favicon-16x16.png');
    console.log('convert fsd-logo.png -resize 180x180 apple-touch-icon.png');
  });

  fileStream.on('error', (err) => {
    console.error('Error writing file:', err);
  });

}).on('error', (err) => {
  console.error('Error downloading image:', err);
});
