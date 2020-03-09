import uploads from '../services/uploads.service';
import UtilsController from '../utils/utilsController';
import * as HttpStatus from 'http-status';

class UploadsController {
    receiveFile(req, res) {
        try {
            uploads(req, res, function (err) {
                UtilsController.sendResponse(res, HttpStatus.OK, "Arquivo salvo com sucesso")
            });
        } catch (error) {
            error => console.error.bind(console, `Error ${error}`);
        }
    };
}

export default new UploadsController();