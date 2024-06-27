import { toast } from "react-toastify";
import Cookie from "js-cookie";
export const getMessages = async (id, set, info) => {
    try {
        const token = Cookie.get("token");
        if (token) {
            const res = await fetch(
                "https://chat-backend-p89z.onrender.com/chat/message",
                {  
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type" : "application/json",
                    },
                  body: JSON.stringify({id})
                }
            );

            if (res.status === 200) {
                const data = await res.json();
                set(data.messages);
                info(data.info);
            }
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
};


