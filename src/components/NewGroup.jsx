import React, { useState } from "react";
import { createGroup } from "../Request/Contact";

const NewGroup = ({ set, reload }) => {
    const [group, setGroup] = useState([]);
    const [chat, setChat] = useState("");
    const [groupname, setGroupName] = useState("");

    return (
        <div className="  p-2 w-full  flex flex-col gap-3 items-center justify-center">
            <input
                type="email"
                value={groupname}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Enter Group name"
                className=" w-full m-auto  p-2 rounded-md bg-gray-300  "
            />
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
                onClick={() => {
                    if (chat !== "") {
                        setGroup((t) => [...t, chat]);
                        setChat("");
                    }
                }}
            >
                Add Email
            </button>
            <div>{group.length === 0 && <div>No Email Added</div>}</div>
            <div className="w-full">
                {group.length !== 0 && (
                    <div className="flex flex-col gap-2">
                        {group.map((item, index) => (
                            <div
                                key={index}
                                className="w-full bg-blue-300 bg-opacity-35  p-2 flex justify-between rounded-lg items-center"
                            >
                                <div> {item} </div>
                                <div
                                    className="text-red-500 p-1 cursor-pointer "
                                    onClick={() =>
                                        setGroup((t) => {
                                            const g = t.filter(
                                                (item, i) => i !== index
                                            );

                                            return g;
                                        })
                                    }
                                >
                                    x
                                </div>
                            </div>
                        ))}
                        <button
                            className="bg-blue-300 p-3 self-end rounded-md"
                            onClick={() =>
                                createGroup(
                                    { name: groupname, emails: group },
                                    set,
                                    reload
                                )
                            }
                        >
                            Submit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewGroup;
