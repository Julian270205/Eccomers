const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = process.env.UPLOAD_PATH || './public/images/products';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif|webp/;
  const ok = allowed.test(path.extname(file.originalname).toLowerCase()) && allowed.test(file.mimetype);
  if (ok) cb(null, true);
  else cb(new Error('Solo se permiten imágenes (jpeg, jpg, png, gif, webp)'));
};

const upload = multer({ storage, fileFilter, limits: { fileSize: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024 } });

module.exports = { upload };
