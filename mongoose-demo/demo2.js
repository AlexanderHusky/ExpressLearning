const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });





var Schema = mongoose.Schema;

// 链接数据库


// 设计集合结构（表结构）
// 字段名称就是表结构中的属性名称

var userSchema = new Schema({
    username : {
        type:String,
        require:true
    },
    password :{
        type: String,
        require: true
    },
    email:String
});

// 将文档结构发布为模型
// 第一个参数，传入一个大写名词单数字符串用来表示你的数据库名称
// mongoose会自动将大写名词的字符串生成小写负数的集合名称
// 第二个参数：架构Schema
// 返回值模型构造函数
// 返回值：当我们有了模型构造函数后，就可以使用这个构造函数对User为所欲为了
var User = mongoose.model("User", userSchema)

// 新增数据
var admin = new User({
    username:'yunpeng',
    password:'1111',
    email:'yunpeng@qq.com'
})

admin.save(function(err, ret){
    if(err) {
        console.log('保存失败')
    }else {
        console.log('保存成功')
        console.log(ret)
    }
})

// 查询数据  按条件查询的话，就在回调函数前加上条件 {username:'zs} 这里find也有findOne
User.find({username:'yunpeng'},(err,ret) => {
    if(err){
        console.log('查询失败')
    }else{
        console.log(ret)
    }
})
// 删除数据
User.remove({username:'admin'},(err,ret) => {
    if(err) {
        console.log('删除失败');
    }else {
        console.log(ret);
    }
})
// 查询数据
User.find( (err, ret) => {
    if (err) {
        console.log('查询失败')
    } else {
        console.log(ret)
    }
})

// 更新数据
User.findByIdAndUpdate('5fa8ed594b814fbc347dd842',{password:'250250250'},(err,ret) => {
    if(err) {
        console.log('更新失败')
    }else {
        console.log(ret)
    }
})