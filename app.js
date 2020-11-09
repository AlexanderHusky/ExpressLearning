const { json } = require('express');
var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// 1. 搭建app的CURD
// 2. 弄出各自请求体

// get
app.get('/list', (req,res)=> {
    // 获取请求参数
    var comment = req.query 

    res.send(comment);
});
// post
app.post('/list', (req,res) => {
    // 读文件
    fs.readFile('./list.json','utf8', (err, data) => {
        
        if(err){
            return res.status(500).send("Server error,请检查");
        }
        // 文件中都是字符串
        data = JSON.parse(data);
        console.log(typeof data);
    })
});

// put

app.put('/list', (req,res) => {
    
});

// delete
app.delete('/list', () => {

})

app.listen(3000, () => {
    console.log('App is running...')
})