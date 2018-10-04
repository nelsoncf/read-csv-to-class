const fs = require('fs')
const csv = require('fast-csv')

module.exports = function (arquivo, callback) {

    let files = [];

    fs.createReadStream(arquivo)
        .pipe(csv())
        .on('data', function (data) {
            files.push(data[0])
        })
        .on('end', function (data) {
            callback(files)
        });
}