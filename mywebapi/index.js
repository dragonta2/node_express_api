// expressモジュールを読み込む
const express = require('express');
const multer = require('multer');
const uuidv4 = require('uuid/v4');


// expressアプリを生成
const app = express();

app.use(multer().none()); // multerでブラウザから送信されたデータを解釈する multer().none()は、ファイルのアップロードなしでテキストデータのみの解釈をする。
app.use(express.static('web')); // webフォルダの中身を公開する

// リスト配列はグローバルな位置に置く
const todoList = [];

// http://localhost:3000/api/vi/list にアクセスしてきたときにToDoリストを返す
app.get('/api/v1/list', (req, res) => {

  // const todoList = [
  //   { title: 'Javascriptを勉強する', done: true },
  //   { title: 'Node.jsを勉強する', done: false },
  //   { title: 'Web APIを作る', done: false }
  // ];

  // jsonを送信する
  res.json(todoList);
});

// http://localhost:3000/api/vi/add にデータ送信をしてきたときにToDoリストに項目を追加する
app.post('/api/v1/add', (req, res) => {

  // クライアントからの送信データを取得する
  const todoData = req.body;
  const todoTitle = todoData.title;

  // ユニークIDを生成
  const id = uuidv4();

  // TODO項目を作る
  const todoItem = {
    id,
    title: todoTitle,
    done: false
  };

  // TODOリストに項目を追加する
  todoList.push(todoItem);

  // コンソールに出力する
  console.log('Add: ' + JSON.stringify(todoItem));

  // 追加した項目をクライアントに返す
  res.json(todoItem);
});


// ポート3000でサーバーを立てる
app.listen(3000, () => console.log('Listening on port 3000'));
