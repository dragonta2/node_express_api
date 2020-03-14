// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成
const app = express();

// ルート(http://localhost/）にアクセスしてきたときにHelloを返す
app.get('/', (req, res) => res.send('Hello'));

// ポート3000でサーバーを立てる
app.listen(3000, () => console.log('Listening on port 3000'));
