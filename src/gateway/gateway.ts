import { OnModuleInit } from "@nestjs/common";
import { WebSocketGateway } from "@nestjs/websockets";
import { MessageBody, SubscribeMessage, WebSocketServer } from "@nestjs/websockets/decorators";
import { Server } from 'socket.io'

@WebSocketGateway()
export class MyGateway implements OnModuleInit{
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() body: any){
        console.log("body:", body)
        this.server.emit('onMessage', { msg: 'Hello from server', content: body})
    }

    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log("New Connection ", socket.id )
        })
        this.server.on('message', (socket) => {
            console.log("MESSAGE socket.id: ", socket.id )
        })

    }
}