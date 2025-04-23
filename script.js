document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('url-input');
    const generateBtn = document.getElementById('generate-btn');
    const qrcodeDiv = document.getElementById('qrcode');

    generateBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();
        
        if (!url) {
            alert('Please enter a URL');
            return;
        }

        // Clear previous QR code
        qrcodeDiv.innerHTML = '';

        // Generate new QR code
        QRCode.toCanvas(qrcodeDiv, url, {
            width: 200,
            margin: 1,
            color: {
                dark: '#000000',
                light: '#ffffff'
            }
        }, (error) => {
            if (error) {
                console.error(error);
                alert('Error generating QR code');
            }
        });
    });
}); 