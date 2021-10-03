#!/bin/bash

protoc --go_out=./server --go_opt=paths=source_relative \
    --go-grpc_out=./server --go-grpc_opt=paths=source_relative \
    chat-app.proto

protoc -I=. ./chat-app.proto \
    --js_out=import_style=commonjs:./client \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:./client