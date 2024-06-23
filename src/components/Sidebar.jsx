import React from "react";

const Sidebar = ({ set, open }) => {
    return (
        <div
            className={`w-full md:w-96  bg-red-500 ${
                open === true && "hidden"
            } md:block `}
        ></div>
    );
};

export default Sidebar;
