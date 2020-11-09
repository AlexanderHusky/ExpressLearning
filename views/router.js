var fs = require('fs');

var express = require('express');

var router = express.Router();

var optionModel = require('../options')

// get
router.get('/list', (req, res) => {
    // 获取请求参数
    optionModel.find((err,ret) => {
        if(err) {
            res.send('查询失败')
        }else {
            res.send(ret);
        }
    })
});

// post 新增一条数据
router.post('/list', (req, res) => {
    // 新增一个数据
    let newoption = new optionModel(req.body)
    // 然后保存
    newoption.save((err,ret) => {
        if(err) {
            res.send("保存失败，请检查");
        }else{
            res.send(ret)
;        }
    })
});

// put
router.put('/list', (req, res) => {
    optionModel.update({title:req.body.title},(err, ret) => {
        if(err) {
            res.send("更新错误");
        }else {
            res.send(ret);
        }
    })
});

// delete
router.delete('/list', (req,res) => {
    optionModel.remove({ title: req.body.title }, (err, ret) => {
        if (err) {
            res.send("删除错误");
        } else {
            res.send(ret);
        }
    })
})
// deleteAll
router.delete('/list/all', (req,res) => {
    optionModel.remove((err,ret) => {
        if(err){
            res.send('全部删除出现错误');
        }else{
            res.send(ret);
        }
    })
})

module.exports = router;
