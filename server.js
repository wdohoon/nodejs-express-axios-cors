// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let data = { message: '여러분 화이팅!' };

// GET 요청 처리
app.get('/', (req, res) => {
  res.json(data);
});

// POST 요청 처리
app.post('/', (req, res) => {
  data.message = req.body.message;
  res.send(`받은 POST 데이터: ${req.body.message}`);
});

// PUT 요청 처리
app.put('/', (req, res) => {
  data.message = req.body.message;
  res.send(`업데이트된 데이터: ${req.body.message}`);
});

// DELETE 요청 처리
app.delete('/', (req, res) => {
  data = {};
  res.send('데이터가 삭제되었습니다.');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
