import React, { useState } from "react";

const ChatInput = ({ addMessage }) => {
    const [input, setInput] = useState("");

    const handleSendMessage = () => {
        if (input.trim()) {
            addMessage(input);
            setInput("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (!e.shiftKey) handleSendMessage();
            else setInput((t) => t + "\n");
        }
    };

    return (
        <div className="flex items-center border-t border-gray-300 p-2">
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 scrollbar-hide"
                placeholder="Type a message..."
                rows="1"
            />
            <button
                onClick={handleSendMessage}
                className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Send
            </button>
        </div>
    );
};

export default ChatInput;
