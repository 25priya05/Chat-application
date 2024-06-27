import { toast } from "react-toastify"
import Cookie from 'js-cookie';
export const login = async (e, input, redirect) => {
    e.preventDefault();

    if (input.email === '') {
        toast.error("Email is required");
        return
    }
    if (input.password === '') {
        toast.error("Password is required");
        return
    }
    try {

        const res = await fetch("https://chat-backend-p89z.onrender.com/user/login", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input)
        });
        if (res.status === 200) {
            const data = await res.json();
            // console.log(data.token);
            Cookie.set("token", data.token);
            toast.success("Your are logged in successfully");
            redirect("/")
        }
    }
    catch (error) {
        console.log(error);
        toast.error(error.message);

    }
}