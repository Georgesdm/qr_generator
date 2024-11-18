const QRCode = require("qrcode");
const link = "https://www.georges.works"; // your link
const width = 2048; // variable for the width in px

const generateQRCode = async (url, width) => {
  try {
    await QRCode.toFile("qrcode.png", url, { width });
    console.log(`QR code généré avec succès (${width}x${width})`);
  } catch (err) {
    console.error("Erreur lors de la génération du QR code:", err);
  }
};

generateQRCode(link, width);
