
// 1. 使用mongoose连接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolistdb', { useNewUrlParser: true, useUnifiedTopology: true });

// 2. 创建结构
var Schema = mongoose.Schema;

var optionSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    state: {
        type: Boolean,
        require: true,
        default: true
    }
});




// 3. 生成模型并导出
module.exports = mongoose.model("Option", optionSchema);



