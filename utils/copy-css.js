const fs = require('fs');

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync('./dist/assets')) {
            fs.mkdirSync('./dist/assets');
            if (!fs.existsSync('./dist/assets/css')) {
                fs.mkdirSync('./dist/assets/css');
            };
        }
        fs.copyFile('./src/style.css', './dist/assets/css/style.css', err => {
            if(err) {
                reject (err);
                return;
            }
            resolve ('Stylesheet copied successfully!');
        });
    });
};

module.exports = {
    copyFile
};