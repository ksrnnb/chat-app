/**
 * @fileoverview gRPC-Web generated client stub for chatpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as chat$app_pb from './chat-app_pb';


export class ChatAppServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateMessage = new grpcWeb.AbstractClientBase.MethodInfo(
    chat$app_pb.CreateMessageResponse,
    (request: chat$app_pb.CreateMessageRequest) => {
      return request.serializeBinary();
    },
    chat$app_pb.CreateMessageResponse.deserializeBinary
  );

  createMessage(
    request: chat$app_pb.CreateMessageRequest,
    metadata: grpcWeb.Metadata | null): Promise<chat$app_pb.CreateMessageResponse>;

  createMessage(
    request: chat$app_pb.CreateMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: chat$app_pb.CreateMessageResponse) => void): grpcWeb.ClientReadableStream<chat$app_pb.CreateMessageResponse>;

  createMessage(
    request: chat$app_pb.CreateMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: chat$app_pb.CreateMessageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatpb.ChatAppService/CreateMessage',
        request,
        metadata || {},
        this.methodInfoCreateMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatpb.ChatAppService/CreateMessage',
    request,
    metadata || {},
    this.methodInfoCreateMessage);
  }

}

