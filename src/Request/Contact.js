import fetch from "../components/fetch";
import { toast } from "react-toastify";

export const getContacts = async (set, socket, id) => {
    const res = await fetch("user/getContacts");
    if (res.status === 200) {
        socket.emit("addUser", id);
        set(await res.json());
    }
};

export const createChat = async (input, set, reload) => {
    try {
        const res = await fetch("chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: input }),
        });

        if (res.status === 200) {
            set("contacts");
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
};
export const createGroup = async (input, set, reload) => {
    if (input.name === "") {
        toast.error("Group name is required");
        return;
    }
    if (input.emails.length === 0) {
        toast.error("Emails  cannot be empty");
        return;
    }

    try {
        const res = await fetch("chat/group", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
        });

        if (res.status === 200) {
            set("contacts");
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
};
