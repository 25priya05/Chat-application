import React from "react";

const Chat = ({set,open}) => {
    return (
        <div className={`w-full bg-black ${!open  && "hidden"} md:block `}></div>
    );
};

export default Chat;
