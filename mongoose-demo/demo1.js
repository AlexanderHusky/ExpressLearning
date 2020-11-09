

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });



// 在代码中设计数据库，这行代码的作用。mongoose这个包就可以让你的设计编写过程变得非常灵活
const Cat = mongoose.model('Cat', { name: String });

// 实例化一个Cat

for(let i = 0; i <1; i++){
    const kitty = new Cat({ name: 'Zildjian' + i });
    kitty.save().then(() => console.log('meow'));
}



// 持久化保存kitty实例
