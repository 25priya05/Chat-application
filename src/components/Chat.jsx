import React, { useEffect, useRef } from "react";
import ChatInput from "./ChatInput";
import MessagesList from "./MessagesList";

import { useSocket } from "../Store/Socket";
import { useAuth } from "../Store/Auth";
import { IoMdArrowRoundBack } from "react-icons/io";

const Chat = ({
    open,
    set,
    contact,
    changeContact,
    info,
    messages,
    setMessages,
}) => {
    const socket = useSocket();
    const { user } = useAuth();

    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [messages]);

    const addMessage = async (message) => {
        socket.emit("sendMessage", {
            chatId: contact,
            userId: user.id,
            message,
        });
        setMessages((t) => [{ text: message, isSender: true }, ...t]);
    };

    useEffect(() => {
        if (socket) {
            socket.on("getMessage", (data) => {
                console.log("running");
                if (data.chatId === contact) {
                    setMessages((t) => [
                        {
                            text: data.message,
                            isSender: data.userId === user.id,
                        },
                        ...t,
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
                <IoMdArrowRoundBack
                    className="text-4xl cursor-pointer"
                    onClick={() => {
                        changeContact("");
                        set(false);
                    }}
                />
                <div className="w-12 h-12 rounded-full mr-4 bg-gray-500 flex items-center justify-center text-white font-bold text-lg">
                    {info?.name[0].toUpperCase()}
                </div>
                <div className="flex flex-col">{info.name}</div>
            </div>
            <div className="flex-1 overflow-y-scroll p-4" ref={ref}>
                <MessagesList messages={messages} />
            </div>
            <ChatInput addMessage={addMessage} />
        </div>
    );
};

export default Chat;

//git checkout -b branch_name
