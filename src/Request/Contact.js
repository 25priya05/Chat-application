import Cookie from "js-cookie";
import { toast } from "react-toastify";
export const getContacts = async (set, socket, id) => {
    const token = Cookie.get("token");
    if (token) {
        const res = await fetch(
            "https://chat-backend-p89z.onrender.com/user/getContacts",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        if (res.status === 200) {
            socket.emit("addUser", id);

            set(await res.json());
        }
    }
};
export const createChat = async (input, set, reload) => {
    const token = Cookie.get("token");
    if (token) {
        try {
            const res = await fetch(
                "https://chat-backend-p89z.onrender.com/chat",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: input }),
                }
            );

            if (res.status === 200) {
                set("Contacts");
                reload();
                toast.success((await res.json()).message);
            } else {
                toast.error((await res.json()).message);
                throw new Error((await res.json()).message);
            }
        } catch (error) {
            console.log("error", error);
            toast.error(error);
        }
    }
};
export const createGroup = async (input, set, reload) => {
    const token = Cookie.get("token");
    if (input.name === "") {
        toast.error("Group name is required");
        return;
    }
    if (input.emails.length === 0) {
        toast.error("Emails  cannot be empty");
        return;
    }
    if (token) {
        try {
            const res = await fetch(
                "https://chat-backend-p89z.onrender.com/chat/group",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(input),
                }
            );

            if (res.status === 200) {
                set("Contacts");
                reload();
                toast.success((await res.json()).message);
            } else {
                toast.error((await res.json()).message);
                throw new Error((await res.json()).message);
            }
        } catch (error) {
            console.log("error", error);
            toast.error(error);
        }
    }
};
