// 导包
const { json } = require('express');
var express = require('express');
var fs = require('fs');
var router = require('./views/router');
var optionModel = require('./options');


// 配置
var app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(router);




app.listen(3000, () => {
    console.log('App is running...')
})