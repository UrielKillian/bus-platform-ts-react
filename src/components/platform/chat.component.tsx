import React, { useState, useEffect } from "react";
import io, { Socket } from "socket.io-client";
import { ChatInfoI } from "../../interfaces/models/chat-info.interface";
import usersService from "../../services/users.service";
import MessageInput from "./chat/input-message.component";
import MessagesComponent from "./chat/messages.component";
export interface ChatComponentProps {
    id: string;
}

export default function ChatComponent({ id }: ChatComponentProps) {
    const [socket, setSocket] = useState<Socket>()
    const [messages, setMessages] = useState<ChatInfoI[]>([]);
    const send = (value: string, email: string) => {
        socket?.emit("message", {
            value,
            email
        })
    }

    useEffect(() => {
        const newSocket = io("http://localhost:8081")
        setSocket(newSocket)
    }, [setSocket])

    const messageListener = (message: any) => {
        console.log(message)
        setMessages([...messages, {
            message: message.value,
            email: message.email

        }])
    }
    useEffect(() => {
        socket?.on("message", messageListener)
        return () => {
            socket?.off("message", messageListener)
        }
    }, [messageListener])
    return (
        <>
            <MessagesComponent messages={messages} />
            <MessageInput send={send} />

        </>
    );
}

/* <body>
  <div>
    <ul id="messages"></ul>
  </div>

  <div>
    <input id="message" type="text" />
    <button onclick="handleSubmitNewMessage()">Submit</button>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>
  <script src="./chat-socket.js"></script>
</body>; */
