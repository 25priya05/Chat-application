import React, { useState } from "react";

const ChatInput = ({ addMessage }) => {
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() !== "") {
            addMessage(input);
            setInput("");
        }
    };

    return (
        <div className="flex p-4 border-t border-gray-300 bg-gray-100">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-l-md"
                placeholder="Type a message..."
            />
            <button
                onClick={sendMessage}
                className="p-2 bg-blue-500 text-white rounded-r-md"
            >
                Send
            </button>
        </div>
    );
};

export default ChatInput;
