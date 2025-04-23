# QR Code Generator

A simple, yet powerful web-based QR code generator with customization options. This tool allows you to create QR codes for any URL with various customization options. 


## Features

- **URL to QR Code Conversion**: Convert any URL into a QR code
- **Customization Options**:
  - Adjustable size (100px to 400px)
  - Error correction levels (Low, Medium, Quartile, High)
  - Custom colors for both dark and light elements
  - Adjustable margin size
- **Real-time Updates**: QR code updates automatically when settings change
- **Responsive Design**: Works well on both desktop and mobile devices
- **Modern UI**: Clean and user-friendly interface

## Usage

1. Open `index.html` in your web browser
2. Enter the URL you want to convert into a QR code
3. Customize the QR code using the available options:
   - Adjust the size using the slider
   - Select the error correction level from the dropdown
   - Choose custom colors using the color pickers
   - Adjust the margin size using the slider
4. Click "Generate QR Code" or wait for automatic updates
5. The QR code will appear below the settings
6. Right-click on the QR code to save it as an image

## Error Correction Levels

- **Low (7%)**: Suitable for simple QR codes with good scanning conditions
- **Medium (15%)**: Default setting, good balance between size and reliability
- **Quartile (25%)**: Better for complex QR codes or moderate scanning conditions
- **High (30%)**: Best for damaged QR codes or difficult scanning conditions

## Technical Details

- Built with vanilla JavaScript
- Uses [QRCode.js](https://github.com/davidshimjs/qrcodejs) library
- No server-side processing required
- Works completely in the browser

## Browser Compatibility

The QR Code Generator works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## License

This project is open source and available under the MIT License.

## Credits

- QR Code generation powered by [QRCode.js](https://github.com/davidshimjs/qrcodejs)
