# chat-app-proto

## 構成
![composition](https://user-images.githubusercontent.com/48155865/137566084-057111d7-04b9-4613-b6ce-2c948d4c94d0.png)


### フロントエンド

- React
- TypeScript

    https://github.com/ksrnnb/chat-app-client

### バックエンド

- Golang

    https://github.com/ksrnnb/chat-app-server

## 立ち上げ

### ディレクトリ構成

```
chat/
  ├ chat-app/        このリポジトリ
  ├ chat-app-client/ フロントエンド
  └ chat-app-server/ バックエンド
```

### アプリの起動

```bash
$ cd chat-app
$ docker-compose up -d
$ docker-compose exec client ash
  => npm run start

$ docker-compose exec app ash
  => go run server.go
```

### Protocol Buffers
シェルスクリプトを実行すると、コード生成される。

```bash
. generate.sh
```

ただし、以下のインストールが必要となるので注意。

- protoc https://grpc.io/docs/protoc-installation/
- protoc-gen-go https://grpc.io/docs/languages/go/quickstart/
- protoc-gen-grpc-web https://grpc.io/docs/platforms/web/basics/
