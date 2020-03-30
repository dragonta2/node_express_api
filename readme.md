# Node.jsとExpressでWeb APIを作ってみよう

## Node.jsとExpressでWeb APIを作ってみよう サイトURL
[https://sbfl.net/blog/2018/08/25/nodejs-express-webapi/](https://sbfl.net/blog/2018/08/25/nodejs-express-webapi/)

#### 参考
[JavaScriptのFetch APIを利用してリクエストを送信する](https://sbfl.net/blog/2017/01/29/fetch-api/)

  
## リポジトリ
https://github.com/dragonta2/node_express_api.git

### リポジトリを作成
git remote add origin https://github.com/dragonta2/node_express_api.git


### URLメモ

##### JSONサーバー
http://localhost:3000/api/v1/list


#### コマンドメモ

npm init

npm install --save express


##### nodeサーバーを起動
node serve.js


##### multerとuuidをインストール
npm install --save multer uuid


##### アレンジ｜nodemonをインストール（ファイルを更新してもnodeサーバーを立ち上げ直す必要がない）
npm install nodemon

npx nodemon server.js


### ハマったことメモ
http://localhost:3000/ にアクセスしても /web/index.htmlを呼び出してくれない
- 解決法｜ /web/index.htmlがmywebapiディレクトリの外に作られていた・・・（凡ミス）｜30分くらいハマった・・・

nodeサーバーが複数立ち上がっていたりすると、エラーが起きるので、複数立ち上がっていないか確認すること。


#### gitコマンドメモ
git commit -m 'helloをlocalhost:3000で表示'

git commit -m 'readme.mdを追加'
