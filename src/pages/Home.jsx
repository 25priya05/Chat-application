import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { getMessages } from "../Request/Message";

const Home = () => {
    const [open, setOpen] = useState(false);
    const [contact, SetContact] = useState("");
    const [messages, setMessages] = useState([]);
    const [info, setInfo] = useState({});
    useEffect(() => {
        if (contact !== "") getMessages(contact, setMessages, setInfo);
    }, [contact]);
    return (
        <div className="w-screen h-screen p-4  flex gap-5 ">
            <Sidebar set={setOpen} open={open} changeContact={SetContact} />

            {info.name && (
                <Chat
                    set={setOpen}
                    open={open}
                    contact={contact}
                    changeContact={SetContact}
                    messages={messages}
                    setMessages={setMessages}
                    info={info}
                />
            )}
        </div>
    );
};

export default Home;
