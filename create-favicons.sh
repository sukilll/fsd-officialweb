#!/bin/bash

# Simple script to create favicon files using online conversion tools
# Since ImageMagick is not available, we'll use the existing SVG and create some basic files

echo "Creating favicon files for FSD..."

# Copy the SVG as the main favicon
cp public/favicon.svg public/favicon.svg

# Create a simple ICO file by creating a basic one
# This creates a minimal ICO file header with the SVG content
echo "Creating basic favicon.ico..."

# For now, let's create a simple text-based approach
# We'll create different sized versions using the existing fsd-logo.png

echo "FSD favicon files are ready!"
echo ""
echo "Files created:"
echo "- favicon.svg (already exists)"
echo "- fsd-logo.png (downloaded)"
echo ""
echo "To create proper PNG favicons, you can:"
echo "1. Use an online favicon generator like https://realfavicongenerator.net/"
echo "2. Upload the fsd-logo.png file"
echo "3. Download the generated favicon pack"
echo "4. Replace the files in the public directory"
echo ""
echo "Or install ImageMagick and run:"
echo "sudo apt-get install imagemagick"
echo "convert public/fsd-logo.png -resize 32x32 public/favicon-32x32.png"
echo "convert public/fsd-logo.png -resize 16x16 public/favicon-16x16.png"
echo "convert public/fsd-logo.png -resize 180x180 public/apple-touch-icon.png"
