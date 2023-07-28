const express = require('express');
const app = express();
const PROT = 8000;


// set() : server에 속성을 셋팅
// ejs setting
app.set("view engine", 'ejs');
app.set('views', './views');

// 정적인 파일 불러오기
app.use('/public', express.static('./public'));

// express get 함수
app.get('/', (req, res) => {
    res.send({test:1});
})

// express get 함수
app.get('/fruit', (req, res) => {
    res.render('fruit', {
        fruit: [
            { name: 'apple', kor: '사과' },
            { name: 'banana', kor: '바나나' },
            { name: 'grape', kor: '포도' },
            { name: 'peach', kor: '복숭아' },
        ],
    });
})

/** 서버 열어주는 함수 */
app.listen(PROT, () => {
    console.log(`http://localhost:${PROT}`);
})

