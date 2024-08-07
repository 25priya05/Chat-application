import { toast } from "react-toastify";
import fetch from "../components/fetch";

export const getMessages = async (id, set, info) => {
    try {
        const res = await fetch("chat/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });

        if (res.status === 200) {
            const data = await res.json();
            set(data.messages);
            info(data.info);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
};
