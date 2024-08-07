import { createContext, useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import fetch from "../components/fetch";
const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    const [trigger, setTrigger] = useState(false);
    const signout = async () => {
        setUser(null);
        await fetch("user/logout");
    };

    useEffect(() => {
        (async () => {
            setloading(true);
            const response = await fetch("user");

            if (response.status === 200) {
                const userData = await response.json();
                setUser(userData);
            } else {
                setUser(null);
            }
            setloading(false);
        })();
    }, [trigger]);
    const reload = () => setTrigger((t) => !t);

    return (
        <authContext.Provider value={{ user, signout, reload }}>
            {!loading && <>{children}</>}
            {loading && <Loading />}
        </authContext.Provider>
    );
};
export const useAuth = () => {
    return useContext(authContext);
};
