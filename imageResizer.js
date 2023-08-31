const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Resizes a single image file.
 *
 * @param {string} file - The name of the image file to resize.
 * @param {string} inputFolder - The folder containing the image to resize.
 * @param {string} outputFolder - The folder to save the resized image.
 * @param {number} newWidth - The new width for the image.
 * @returns {Promise<string>} A promise that resolves with a message indicating the resize status.
 */
async function resizeImage(file, inputFolder, outputFolder, newWidth) {
  const inputPath = path.join(inputFolder, file);
  const outputPath = path.join(outputFolder, file);

  try {
    await sharp(inputPath)
      .resize({ width: newWidth, fit: 'inside' })
      .toFile(outputPath);
    return `Resized ${file} to ${newWidth} x ${newWidth}`;
  } catch (err) {
    return `Error resizing image ${file}: ${err}`;
  }
}

/**
 * Resizes all image files in a given folder.
 *
 * @param {string} inputFolder - The folder containing the images to resize.
 * @param {string} outputFolder - The folder to save the resized images.
 * @param {number} newWidth - The new width for the images.
 * @returns {Promise<void>} A promise that resolves when all images have been resized.
 */
async function resizeImages(inputFolder, outputFolder, newWidth) {
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  const files = fs.readdirSync(inputFolder);

  const imageFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });

  const resizePromises = imageFiles.map((file) => {
    return resizeImage(file, inputFolder, outputFolder, newWidth)
  });

  try {
    const results = await Promise.all(resizePromises);
    results.forEach((result) => {
      // Replace this with a logger in production
      console.log(result);
    });
  } catch (error) {
    // Replace this with a logger in production
    console.error('An error occurred:', error);
  }
}

module.exports = resizeImages;
