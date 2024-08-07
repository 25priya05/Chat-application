import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import Loading from "../components/Loading";

const socketContext = createContext();

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        setSocket(io("https://chat-backend-p89z.onrender.com/message"));
    }, []);

    return (
        <socketContext.Provider value={socket}>
            {socket && <>{children}</>}
            {!socket && <Loading />}
        </socketContext.Provider>
    );
};

export const useSocket = () => {
    return useContext(socketContext);
};
