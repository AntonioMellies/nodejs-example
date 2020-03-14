import * as json2csv from 'json2csv';
import * as uuid from 'uuid';
import * as fs from 'fs';

import * as EnvConfig from '../config/envConfig';

class CsvService {
    toCSV = function (objects, options) {
        try {
            const csv = json2csv.parse(objects, options);
            const filename = uuid.v4() + ".csv";
            fs.writeFile('/' + EnvConfig.EXPORTS_FOLDER_PATH + filename, csv, function (err) {
                if (err) throw err;
                console.log('Arquivo salvo!');
            })
            return filename;

        } catch (error) {
            console.error(error);
        }
    }

}

export default new CsvService();