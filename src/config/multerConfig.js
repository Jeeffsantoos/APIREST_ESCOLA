import multer from 'multer';
import { extname, resolve } from 'path';

// Configuração da lib que cuida do upload das fotos
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  // filtro de tipo de imagens
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG.'));
    }

    return cb(null, true);
  },
  // destino da imagem
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    // metodo que gera nome aleatorio para as fotos
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },

  }),
};
