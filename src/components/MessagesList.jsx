import React from "react";

const MessagesList = ({ messages }) => {
    return (
        <div className="flex flex-col w-full ">
            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={`mb-2 w-fit max-w-full  break-words p-3 rounded-md ${
                        msg.isSender
                            ? "bg-blue-500 text-white self-end"
                            : "bg-gray-500 text-white self-start"
                    }`}
                >
                    {msg.text}
                </div>
            ))}
        </div>
    );
};

export default MessagesList;
