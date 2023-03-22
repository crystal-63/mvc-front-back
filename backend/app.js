const express = require('express');
const { join } = require('path');
const router = require('./router');


const app = express();

app.use(router)
app.set('view engine', 'ejs');
app.use(express.static(join(__dirname, 'public')))

app.listen(8080, ()=>{
    console.log('ok');
})