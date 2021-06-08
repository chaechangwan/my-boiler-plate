const express = require('express'); //익스프레스 모듈 가져오기
const app = express() //express 함수를 이용해서 express app 만들기
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mymongo', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));



app.get('/', (req, res) => {
  res.send('Hello World!')
})  //root directory에서 Hello World! 출력

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
