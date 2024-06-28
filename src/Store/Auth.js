import { createContext, useContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import Loading from "../components/Loading";
const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    const [trigger, setTrigger] = useState(false);
    const signout = () => {
        setUser(null);
        Cookie.remove("token");
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const token = Cookie.get("token");

            if (token) {
                try {
                    const response = await fetch(
                        "https://chat-backend-p89z.onrender.com/user",
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );

                    if (response.status === 200) {
                        const userData = await response.json();
                        setUser(userData);
                    }
                } catch (error) {
                    console.error("Failed to fetch user data:", error);
                }
            }
            setloading(false);
        };

        fetchUserData();
    }, [trigger]);
    const reload = () => setTrigger((t) => !t);

    return (
        <authContext.Provider value={{ user, signout, reload }}>
            {!loading && <>{children}</>}
            {loading && <Loading/>}
        </authContext.Provider>
    );
};
export const useAuth = () => {
    return useContext(authContext);
};
