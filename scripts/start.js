const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// dist 폴더 내의 파일을 정적 파일로 제공 (경로를 수정)
app.use(express.static(path.join(__dirname, '..', 'dist')));

// 모든 요청에 대해 index.html을 반환하도록 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

