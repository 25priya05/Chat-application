import React, { useEffect, useState } from "react";
import { getContacts } from "../Request/Contact";
import Contacts from "./Contacts";
import ChatHeader from "./ChatHeader";
import NewChat from "./NewChat";
import NewGroup from "./NewGroup";

const Sidebar = ({ set, open ,changeContact}) => {
    const [contacts, SetContact] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [panel, setPanel] = useState("contacts");
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        getContacts(SetContact);
    }, [trigger]);

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
                        <Contacts contacts={filteredContacts} set = {set} changeContact ={changeContact} />
                    </>
                )}
                {panel === "chat" && (
                    <NewChat
                        set={setPanel}
                        reload={() => setTrigger((t) => !t)}
                    />
                )}
                {panel === "group" && (
                    <NewGroup
                        set={setPanel}
                        reload={() => setTrigger((t) => !t)}
                    />
                )}
            </div>
        </div>
    );
};

export default Sidebar;
