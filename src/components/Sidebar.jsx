import React, { useEffect, useState } from "react";
import Contacts from "./Contacts";
import ChatHeader from "./ChatHeader";
import NewChat from "./NewChat";
import NewGroup from "./NewGroup";

const Sidebar = ({ set, open, changeContact, contacts, reload }) => {
    const [search, setSearch] = useState("");
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [panel, setPanel] = useState("contacts");

    useEffect(() => {
        if (search !== "") {
            setFilteredContacts(
                contacts.filter((item) => item.name.includes(search))
            );
        } else {
            setFilteredContacts(contacts);
        }
    }, [search, contacts]);
    return (
        <div
            className={`w-full md:w-96 bg-slate-100 ${
                open === true && "hidden"
            } md:block  overflow-x-hidden overflow-y-scroll no-scrollbar`}
        >
            <div>
                <ChatHeader set={setPanel} />

                {panel === "contacts" && (
                    <>
                        <div className="p-4 ">
                            <input
                                type="text"
                                placeholder="Seach.."
                                className="h-8 w-full rounded-lg mr-2 bg-gray-300 p-1 flex justify-between"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        {contacts.length === 0 && (
                            <div className="text-gray-700  w-full text-center italic ">
                                No Contacts Yet...
                            </div>
                        )}
                        {contacts.length !== 0 && (
                            <Contacts
                                contacts={filteredContacts}
                                set={set}
                                changeContact={changeContact}
                            />
                        )}
                    </>
                )}
                {panel === "chat" && <NewChat set={setPanel} reload={reload} />}
                {panel === "group" && (
                    <NewGroup set={setPanel} reload={reload} />
                )}
            </div>
        </div>
    );
};

export default Sidebar;
