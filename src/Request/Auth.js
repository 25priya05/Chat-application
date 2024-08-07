import { toast } from "react-toastify";
import fetch from "../components/fetch";

export const login = async (e, input, redirect, reload) => {
    e.preventDefault();

    if (input.email === "") {
        toast.error("Email is required");
        return;
    }
    if (input.password === "") {
        toast.error("Password is required");
        return;
    }
    try {
        const res = await fetch("user/login", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
        });
        if (res.status === 200) {
            toast.success("Your are logged in successfully");
            reload();
            redirect("/");
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
};
export const register = async (e, input, redirect, reload) => {
    e.preventDefault();

    if (input.name === "") {
        toast.error("Name is required");
        return;
    }
    if (input.email === "") {
        toast.error("Email is required");
        return;
    }
    if (input.password === "") {
        toast.error("Password is required");
        return;
    }
    try {
        const res = await fetch("user/register", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
        });
        if (res.status === 200) {
            toast.success("Your are logged in successfully");
            reload();
            redirect("/");
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
};
