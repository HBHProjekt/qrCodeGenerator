document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('url-input');
    const generateBtn = document.getElementById('generate-btn');
    const qrcodeCanvas = document.getElementById('qrcode');
    
    // Settings elements
    const sizeInput = document.getElementById('size');
    const sizeValue = document.getElementById('size-value');
    const errorLevelSelect = document.getElementById('error-level');
    const darkColorInput = document.getElementById('dark-color');
    const lightColorInput = document.getElementById('light-color');
    const marginInput = document.getElementById('margin');
    const marginValue = document.getElementById('margin-value');

    // Update size value display
    sizeInput.addEventListener('input', () => {
        sizeValue.textContent = sizeInput.value;
    });

    // Update margin value display
    marginInput.addEventListener('input', () => {
        marginValue.textContent = marginInput.value;
    });

    // Generate QR code with current settings
    const generateQRCode = () => {
        const url = urlInput.value.trim();
        
        if (!url) {
            alert('Please enter a URL');
            return;
        }

        const options = {
            width: parseInt(sizeInput.value),
            margin: parseInt(marginInput.value),
            color: {
                dark: darkColorInput.value,
                light: lightColorInput.value
            },
            errorCorrectionLevel: errorLevelSelect.value
        };

        QRCode.toCanvas(qrcodeCanvas, url, options, (error) => {
            if (error) {
                console.error(error);
                alert('Error generating QR code');
            }
        });
    };

    // Generate QR code on button click
    generateBtn.addEventListener('click', generateQRCode);

    // Generate QR code when any setting changes
    sizeInput.addEventListener('change', generateQRCode);
    errorLevelSelect.addEventListener('change', generateQRCode);
    darkColorInput.addEventListener('change', generateQRCode);
    lightColorInput.addEventListener('change', generateQRCode);
    marginInput.addEventListener('change', generateQRCode);
}); 