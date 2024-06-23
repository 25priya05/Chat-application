import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-screen h-screen p-4  flex gap-5 ">
            <Sidebar set={setOpen} open={open} />

            <Chat set={setOpen} open={open} />
        </div>
    );
};

export default Home;
