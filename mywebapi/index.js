/*---------------------------------------------------------
  nodeサーバー側（API側）の処理を書いたJS
-----------------------------------------------------------*/

const express = require('express'); // expressモジュールを呼び出す
const multer = require('multer'); // multerを呼び出す（ブラウザから送信されたデータを解釈できるようにする）
const uuidv4 = require('uuid/v4'); // uuidを呼び出す（ユニークなID値を自動生成する）


// expressアプリを生成
const app = express();

app.use(multer().none()); // multerでブラウザから送信されたデータを解釈できるようにする。multer().none()は、ファイルのアップロードなしでテキストデータのみの解釈をする。
app.use(express.static('web')); // webフォルダの中身を公開する

// リスト配列はグローバルな位置に置く
const todoList = [];

// http://localhost:3000/api/vi/list にアクセスしてきたときにToDoリストを返す
// ここの第一引数でアクセスさせたい自分の好きなURLを設定できる
app.get('/api/v1/list', (req, res) => {

  // jsonを送信する
  res.json(todoList);
});

// http://localhost:3000/api/vi/add にデータ送信をしてきたときにToDoリストに項目を追加する
app.post('/api/v1/add', (req, res) => {

  // クライアントからの送信データを取得する
  const todoData = req.body; // リクエストデータの中のbody部分を格納
  const todoTitle = todoData.title;

  // ユニークIDを生成（モジュールuuid/v4を使用）
  const id = uuidv4();

  // todoItem項目を作る
  const todoItem = {
    id,
    title: todoTitle,
    done: false
  };

  // TODOリストにtodoItem項目を一つ追加する
  todoList.push(todoItem);

  // コンソールに出力する
  console.log('Add: ' + JSON.stringify(todoItem));

  // 項目追加をしたリストをjsonとしてクライアントに返す
  res.json(todoItem);
});


// 削除用メソッド
// http://localhost:3000/api/v1/item/:id にDELETEで送信してきたときに
// 項目を削除する。:idの部分にはIDが入る。 ExpressではURLに「:xxx」と入れることで、URLの一部をxxxという名前のパラメータとして扱うことができます。今回は末尾に「:id」を入れ、項目のIDを受け取るようにしています。このIDはAddボタン追加時に作ったユニークIDです。
// 例えば
// http://localhost:3000/api/v1/item/cc7cf63c-ccaf-4401-a611-f19daec0f74e
// にDELETEメソッドでアクセスすると、idがcc7cf63c-ccaf-4401-a611-f19daec0f74eのものが削除される
app.delete('/api/v1/item/:id', (req, res) => {

  // URLの:idと同じIDを持つ項目を検索
  const index = todoList.findIndex((item) => item.id === req.params.id);

  // 項目が見つかった場合
  if (index >= 0) {
    const deleted = todoList.splice(index, 1); // indexの位置にある項目を削除
    console.log('Delete: ' + JSON.stringify(deleted[0]));
  }

  // ステータスコード200:OKを送信
  res.sendStatus(200);
});


// 更新用メソッド｜チェックボックスの状態を反映させる DELETEとほぼ同じ
app.put('/api/v1/item/:id', (req, res) => {

  // URLの:idと同じIDを持つ項目を検索
  const index = todoList.findIndex((item) => item.id === req.params.id);

  // 項目が見つかった場合
  if (index >= 0) {
    const item = todoList[index];
    if (req.body.done) {
      item.done = req.body.done === 'true';
    }
    console.log('Edit: ' + JSON.stringify(item));
  }

  // ステータスコード200:OKを送信
  res.sendStatus(200);
});


// ポート番号3000番にサーバーを立てる
app.listen(3000, () => console.log('Listening on port 3000'));
