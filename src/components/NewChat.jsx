import React, { useState } from "react";
import { createChat } from "../Request/Contact";

const NewChat = ({ set, reload }) => {
    const [chat, setChat] = useState("");

    return (
        <div className="  p-2 w-full  flex flex-col gap-3 items-center justify-center">
            <input
                type="email"
                value={chat}
                onChange={(e) => setChat(e.target.value)}
                placeholder="Type email to add"
                className=" w-full m-auto  p-2 rounded-md bg-gray-300  "
            />
            <button
                className="bg-blue-300 p-3 self-end rounded-md
            "
                onClick={() => createChat(chat, set, reload)}
            >
                Add Contact
            </button>
        </div>
    );
};

export default NewChat;
