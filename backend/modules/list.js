const {
    readFileSync,
    writeFileSync
} = require('fs');

const {
    resolve
} = require('path')

function getMobileList () {
    const mobileData = JSON.parse(readFileSync(resolve(
        __dirname,
        '../data/mobile.json'
    ), 'utf8'));

    return mobileData;
}

function removeMobile (id) {
    let mobileData = JSON.parse(readFileSync(resolve(
        __dirname,
        '../data/mobile.json'
    ), 'utf8'));

    mobileData = mobileData.filter(item => item.id != id);

    writeFileSync(resolve(
        __dirname,
        '../data/mobile.json',
    ), JSON.stringify(mobileData));

    return id;
}

function addMobile(mobileInfo){
    let mobileData = JSON.parse(readFileSync(resolve(
        __dirname,
        '../data/mobile.json'
    ), 'utf8'));

    const id = mobileData[mobileData.length - 1].id + 1;

    mobileData.push({
        ...mobileInfo,
        id
    })

    writeFileSync(resolve(
        __dirname,
        '../data/mobile.json',
    ), JSON.stringify(mobileData));

    return mobileData[mobileData.length + 1];
}

module.exports = {
    getMobileList,
    removeMobile,
    addMobile
}