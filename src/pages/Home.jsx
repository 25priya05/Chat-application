import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { getMessages } from "../Request/Message";
import { useAuth } from "../Store/Auth";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../Store/Socket";
import { getContacts } from "../Request/Contact";

const Home = () => {
    const [contacts, setContacts] = useState([]);
    const [open, setOpen] = useState(false);
    const [contact, SetContact] = useState("");
    const [messages, setMessages] = useState([]);
    const [info, setInfo] = useState({});
    const { user } = useAuth();
    const redirect = useNavigate();
    const [trigger, setTrigger] = useState(false);
    const socket = useSocket();

    useEffect(() => {
        if (!user) {
            redirect("/login");
        }
    }, [user, redirect]);
    useEffect(() => {
        if (contact !== "") getMessages(contact, setMessages, setInfo);
        else {
            setInfo({});
        }
    }, [contact]);

    useEffect(() => {
        if (user) {
            getContacts(setContacts, socket, user.id);
        }
    }, [trigger, user, socket]);

    useEffect(() => {
        if (socket) {
            socket.on("getUsers", (users) => {
                setContacts((t) =>
                    t.map((item) => {
                        if (!item.group) {
                            return {
                                ...item,
                                online: users.includes(item.userId),
                            };
                        } else {
                            return item;
                        }
                    })
                );
            });
        }
    }, [socket, contacts]);
    return (
        <div className="w-screen h-screen p-4  flex gap-5 ">
            <Sidebar
                set={setOpen}
                open={open}
                changeContact={SetContact}
                reload={() => setTrigger((t) => !t)}
                contacts={contacts}
            />

            {info.name && (
                <Chat
                    set={setOpen}
                    open={open}
                    contact={contact}
                    changeContact={SetContact}
                    messages={messages}
                    setMessages={setMessages}
                    info={info}
                    changeMessages={(message, id) =>
                        setContacts((t) =>
                            t.map((item) => {
                                if (item.id === id) {
                                    return { ...item, message };
                                } else {
                                    return item;
                                }
                            })
                        )
                    }
                />
            )}
        </div>
    );
};

export default Home;
