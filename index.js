const express = require('express'); //익스프레스 모듈 가져오기
const app = express() //express 함수를 이용해서 express app 만들기
const port = 5000
const { user, User } = require('./models/User');
const bodyParser = require('body-parser');

//application/x-www-form-urlencoded로 된 데이터를 분석해서 가져올 수 있게 해줌
app.use(bodyParser.urlencoded({extended:true}));
//application/json 타입으로 된 데이터를 분석해서 가져올 수 있게 해줌.
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mymongo', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));



app.get('/', (req, res) => {
  res.send('Hello World! 안녕 세상!')
})  //root directory에서 Hello World! 출력

app.post('/register', (req, res) => {
    //회원 가입 할 때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body);
    user.save((err, doc) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({ 
            success: true
        })
    })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
