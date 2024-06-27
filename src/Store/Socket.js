import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const socketContext = createContext();

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        setSocket(io("https://chat-backend-p89z.onrender.com/message"));
    }, []);

    return (
        <socketContext.Provider value={socket}>
            {children}
        </socketContext.Provider>
    );
};

export const useSocket = () => {
    return useContext(socketContext);
};
