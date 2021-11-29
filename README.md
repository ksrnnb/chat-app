# chat-app-proto

## 構成

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
  => go run main.go
```
