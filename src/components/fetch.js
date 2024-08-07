import { toast } from "react-toastify";

async function Fetch(url, options = {}) {
    try {
        const option = { method: "GET", ...options, credentials: "include" };
        const res = await fetch(
            `https://chat-backend-p89z.onrender.com/${url}`,
            option
        );
        if (res.status !== 200) {
            throw res;
        }
        return res;
    } catch (err) {
        if (err instanceof Error) {
            console.log(err);
        } else {
            const error = await err.json();
            if (url !== "user") {
                toast.error(error.message);
            }
            return error;
        }
    }
}

export default Fetch;

// https://chat-backend-p89z.onrender.com/
