import * as multer from 'multer';

import * as EnvConfig from '../config/envConfig';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, EnvConfig.UPLOADS_FOLDER_PATH);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploads = multer({ storage: storage }).single('file');

export default uploads;