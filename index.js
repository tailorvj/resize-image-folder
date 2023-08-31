const resizeImages = require('./imageResizer');

// Get command line arguments
const [inputFolder, outputFolder, newWidth] = process.argv.slice(2);

// Set default values if not provided
const finalInputFolder = inputFolder || 'input';
const finalOutputFolder = outputFolder || 'output';
const finalNewWidth = parseInt(newWidth, 10) || 540;

// Check if newWidth is a valid number
if (isNaN(finalNewWidth)) {
  console.error('Invalid width specified. Please provide a positive integer for the new width.');
  process.exit(1);
}

console.log(`index: ${finalInputFolder}, ${finalOutputFolder}, ${finalNewWidth}`);

// Call your resizeImages function
resizeImages(finalInputFolder, finalOutputFolder, finalNewWidth);
