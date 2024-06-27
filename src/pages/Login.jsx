import React, { useState } from "react";
import { login } from "../Request/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const [open, setOpen] = useState(false);
    const redirect = useNavigate();
    return (
        <form onSubmit={(e) => login(e, input, redirect)}>
            <div>
                <label> Email</label>
                <input
                    type="email"
                    value={input.email}
                    onChange={(e) =>
                        setInput((t) => ({ ...t, email: e.target.value }))
                    }
                />
            </div>
            <div>
                <label> Password</label>
                <input
                    type={open ? "text" : "password"}
                    value={input.password}
                    onChange={(e) =>
                        setInput((t) => ({ ...t, password: e.target.value }))
                    }
                />
            </div>
            <div>
                <input
                    type="checkbox"
                    value={open}
                    onChange={() => setOpen((t) => !t)}
                />
                <label>Show Password </label>
            </div>
            <button type="submit"> Submit</button>
        </form>
    );
};

export default Login;
