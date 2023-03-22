const {
    readFileSync,
    writeFileSync
} = require('fs');

const {
    resolve
} = require('path');

function getMobileDetail (id){
    const mobileData = JSON.parse(readFileSync(resolve(
        __dirname,
        '../data/mobile.json'
    ), 'utf8'));

    return mobileData.find(item => item.id == id);
}

module.exports = {
    getMobileDetail
}