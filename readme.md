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

##### nodeサーバーを起動
node index.js



### ハマったことメモ

http://localhost:3000/ にアクセスしても /web/index.htmlを呼び出してくれない
- 解決法｜ /web/index.htmlがmywebapiディレクトリの外に作られていた・・・（凡ミス）｜30分くらいハマった・・・



#### gitコマンドメモ
git commit -m 'helloをlocalhost:3000で表示'

git commit -m 'readme.mdを追加'
