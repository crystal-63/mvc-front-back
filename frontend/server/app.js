const express = require('express');
const bodyParser = require('body-parser');
const {
    readFileSync,
    writeFileSync
} = require('fs');
const {
    resolve
} = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//跨域处理
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Mehtods','GET,POST');
    next(); //执行下一个中间介
});

app.get('/get_mobile_list', (req, res) => {
    const mobileData = JSON.parse(readFileSync(resolve(
        __dirname,
        'data/mobile.json'
    ), 'utf8'));
    res.send(mobileData);
});

app.post('/get_mobile_detail', (req, res) => {
    const id = req.body.id;
    console.log("id",id)
    const mobileData = JSON.parse(readFileSync(resolve(
        __dirname,
        'data/mobile.json'
    ), 'utf8'));
    
    const mobileDtail = mobileData.find(item => item.id == id)
    res.send(mobileDtail);
});

app.post('/remove_mobile', (req, res) =>{
    const id = req.body.id;

    let mobileData = JSON.parse(readFileSync(resolve(
        __dirname,
        'data/mobile.json'
    ), 'utf8'));

    mobileData = mobileData.filter(item => item.id != id);

    writeFileSync(resolve(
        __dirname,
        'data/mobile.json',
    ), JSON.stringify(mobileData));

    res.send(id);
})

app.post('/add_mobile', (req, res) =>{
    let mobileData = JSON.parse(readFileSync(resolve(
        __dirname,
        'data/mobile.json'
    ), 'utf8'));

    const id = mobileData[mobileData.length - 1].id + 1;

    mobileData.push({
        ...req.body,
        id
    });

    writeFileSync(resolve(
        __dirname,
        'data/mobile.json',
    ), JSON.stringify(mobileData));

    const mobileInfo = mobileData[mobileData.length + 1];

    res.send(mobileInfo);
})

app.listen(8080, ()=>{
    console.log("ok");
})

