import React from "react";
const contacts = [
    {
        id: "1",
        name: "John Doe",
        message: "Hello, how are you?",
        photo: "https://i.pinimg.com/736x/2f/cc/4d/2fcc4da297068da39d5b4e158d0e7e70.jpg",
        seen: true,
    },
    {
        id: "2",
        name: "Jane Smith",
        message: "Are we still on for the meeting?",
        photo: "https://quotestime.in/wp-content/uploads/2023/05/nature-dp-for-whatsapp-profile.jpg",
        seen: false,
    },
    {
        id: "3",
        name: "Alice Johnson",
        message: "Happy Birthday!",
        photo: "",
        seen: true,
    },
    {
        id: "4",
        name: "Bob Brown",
        message: "Can you send me the report?",
        photo: "",
        seen: false,
    },
    {
        id: "5",
        name: "Charlie Black",
        message: "Let's catch up sometime.",
        photo: "",
        seen: true,
    },
    {
        id: "6",
        name: "Diana White",
        message: "Meeting is postponed.",
        photo: "",
        seen: false,
    },
    {
        id: "7",
        name: "Evan Green",
        message: "Great job on the project!",
        photo: "",
        seen: true,
    },
    {
        id: "8",
        name: "Fiona Blue",
        message: "Could you review this document?",
        photo: "",

        seen: false,
    },
    {
        id: "9",
        name: "George Red",
        message: "Thanks for your help.",
        photo: "",
        seen: true,
    },
    {
        id: "10",
        name: "Hannah Grey",
        message: "Don't forget our appointment.",
        photo: "",
        seen: false,
    },
];
const getInitials = (name) => {
    // const names = name.trim().split(" ");
    const initials = `${name[0]?.toUpperCase() ?? ""}`;
    return initials;
};
const Sidebar = ({ set, open }) => {
    return (
        <div
            className={`w-full md:w-96  bg-red-500 ${
                open === true && "hidden"
            } md:block  overflow-x-hidden overflow-y-scroll no-scrollbar`}
        >
            <div className="p-4 border-b border-gray-700">
                <h1 className="text-xl text-white font-bold">Chats</h1>
            </div>
            <div className="p-4 ">
                <div className="h-8 w-60 rounded-lg mr-2 bg-gray-300 p-1">
                    Search
                </div>
                <div className="flex flex-row gap-3 text-gray-500 ">
                    <div className="hover:bg-lime-700  rounded-md space-x-4 p-2">
                        All
                    </div>
                    <div className="hover:bg-lime-700  rounded-md space-x-4 p-2">
                        {" "}
                        unread
                    </div>
                    <div className="hover:bg-lime-700  rounded-md space-x-4 p-2">
                        groups
                    </div>
                </div>
            </div>
            <div className="flex-1 ">
                <ul className="p-4 space-y-4 ">
                    {contacts.map((contact) => (
                        <li
                            key={contact.id}
                            className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-700"
                        >
                            {contact.photo ? (
                                <img
                                    className="w-14 h-14 rounded-full mr-4"
                                    src={contact.photo}
                                    alt={`${contact.name}'s profile`}
                                />
                            ) : (
                                <div className="w-12 h-12 rounded-full mr-4 bg-gray-500 flex items-center justify-center text-white font-bold text-lg">
                                    {getInitials(contact.name)}
                                </div>
                            )}

                            <div className="flex-1 min-w-0">
                                <div className="text-lg font-medium ">
                                    {contact.name}
                                </div>

                                <div className="text-sm text-gray-400">
                                    {contact.message}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
