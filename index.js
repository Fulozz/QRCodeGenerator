import inquirer from 'inquirer';
import qrImage from 'qr-image';
import fs from 'fs';


inquirer.createPromptModule()([
    {
        type: 'input',
        name: 'data',
        message: 'Enter data to encode as QR code:',
    },
    {
        type: 'input',
        name: 'filename',
        message: 'Enter filename for QR code image:',
    },
    ]).then((answers) => {
        const qrCode = qrImage.image(answers.data, { type: 'png' });
        qrCode.pipe(fs.createWriteStream(`QrCode/${answers.filename}.png`));
        console.log('QR code generated successfully!');
    });
   