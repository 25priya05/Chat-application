import React, { useState } from "react";
import { useAuth } from "../Store/Auth";
import { useNavigate } from "react-router-dom";

const ChatHeader = ({ set }) => {
    const [menuOpen, setmenuOpen] = useState(false);
    const toggleMenu = () => {
        setmenuOpen(!menuOpen);
    };
    const { signout } = useAuth();
    const redirect = useNavigate();
    return (
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h1 className="text-xl text-black font-bold">Chats</h1>

            <button
                className=" left-64  text-xl focus:outline-none"
                onClick={toggleMenu}
            >
                &#x22EE; {/* Unicode for three vertical dots */}
            </button>
            {menuOpen && (
                <div className="absolute left-44 mt-1 w-36 top-16 bg-white text-black rounded-lg shadow-lg">
                    <div
                        onClick={() => {
                            set("chat");
                            toggleMenu();
                        }}
                        className="block px-4 py-2 hover:bg-gray-200"
                    >
                        New Chat
                    </div>
                    <div
                        onClick={() => {
                            set("group");
                            toggleMenu();
                        }}
                        className="block px-4 py-2 hover:bg-gray-200"
                    >
                        New Group
                    </div>

                    <div
                        onClick={() => {
                            signout();
                            redirect("/login");
                        }}
                        className="block px-4 py-2 hover:bg-gray-200"
                    >
                        Logout
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatHeader;
