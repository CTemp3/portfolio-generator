const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // upon error, reject the promise and print error using the promise .catch method
            if (err) {
                reject(err);
                // use return to exit the function and prevent it from looping
                return;
            }
            // if it runs well, resolve the promise
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = {
    writeFile
};