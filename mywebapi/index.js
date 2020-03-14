// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成
const app = express();

// ルート(http://localhost:3000/api/vi/list）にアクセスしてきたときにHelloを返す
app.get('/api/v1/list', (req, res) => {

  const todoList = [
    { title: 'Javascriptを勉強する', done: true },
    { title: 'Node.jsを勉強する', done: false },
    { title: 'Web APIを作る', done: false }
  ];

  // jsonを送信する
  res.json(todoList);
});

// ポート3000でサーバーを立てる
app.listen(3000, () => console.log('Listening on port 3000'));
