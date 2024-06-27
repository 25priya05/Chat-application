import React from "react";

const Contacts = ({ contacts ,set, changeContact }) => {
    return (
        <div className="flex-1 ">
            <ul className="p-4 space-y-4 ">
                {contacts.map((contact) => (
                    <li
                        onClick={()=>{
                           
                            changeContact(contact.id);
                            set(true);
                        }}
                        key={contact.id}
                        className="flex items-center space-x-4 p-2 rounded-lg hover:bg-slate-200"
                    >
                        {contact.photo ? (
                            <img
                                className="w-14 h-14 rounded-full mr-4"
                                src={contact.photo}
                                alt={`${contact.name}'s profile`}
                            />
                        ) : (
                            <div className="w-12 h-12 rounded-full mr-4 bg-gray-500 flex items-center justify-center text-white font-bold text-lg">
                                {contact.name[0].toUpperCase()}
                            </div>
                        )}

                        <div className="flex-1 min-w-0">
                            <div className="text-lg  font-bold ">
                                {contact.name}
                            </div>

                            <div className="text-sm text-gray-700">
                                {contact.message}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contacts;
