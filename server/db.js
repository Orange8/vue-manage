// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/27017', {
    useMongoClient: true
});

/************** 定义模型Model **************/
const Models = mongoose.model('Login', {
    account: String,
    password: String
});

module.exports = Models;