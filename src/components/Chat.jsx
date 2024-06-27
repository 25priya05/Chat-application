import React, { useEffect, useState } from "react";
import ChatInput from "./ChatInput";
import MessagesList from "./MessagesList";

import { useSocket } from "../Store/Socket";
import { useAuth } from "../Store/Auth";
import { IoMdArrowRoundBack } from "react-icons/io";

const Chat = ({
    open,
    contact,
    changeContact,
    info,
    messages,
    setMessages,
}) => {
    const socket = useSocket();
    const { user } = useAuth();

    const addMessage = async (message) => {
        socket.emit("sendMessage", {
            chatId: contact,
            userId: user.id,
            message,
        });
        setMessages([...messages, { text: message, isSender: true }]);
    };

    useEffect(() => {
        if (socket) {
            socket.on("getMessage", (data) => {
                if (data.chatId === contact) {
                    setMessages([
                        ...messages,
                        {
                            text: data.message,
                            isSender: data.userId === user.id,
                        },
                    ]);
                }
            });
        }
    }, [socket]);
    console.log(info);
    return (
        <div className={`w-full flex flex-col ${!open && "hidden"} md:flex `}>
            {" "}
            <div className="w-full h-20 flex items-center">
                <IoMdArrowRoundBack className="text-4xl" />
                <div className="w-12 h-12 rounded-full mr-4 bg-gray-500 flex items-center justify-center text-white font-bold text-lg">
                    {info?.name[0].toUpperCase()}
                </div>
                <div className="flex flex-col">{info.name}</div>
            </div>
            <div className="flex-1 overflow-y-scroll p-4">
                <MessagesList messages={messages} />
            </div>
            <ChatInput addMessage={addMessage} />
        </div>
    );
};

export default Chat;

//git checkout -b branch_name
