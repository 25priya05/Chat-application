import React, { useState } from "react";
import { login } from "../Request/Auth";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const [open, setOpen] = useState(false);
    const redirect = useNavigate();
    return (
        <form
            className="flex flex-col w-fit justify-center items-center m-auto gap-4 "
            onSubmit={(e) => login(e, input, redirect)}
        >
            <h1 className="text-6xl font-bold mb-4  ">Login</h1>
            <div className="flex flex-col gap-1 ">
                <label> Email</label>
                <input
                    className="border-2 w-96 rounded-md p-2 border-gray-500 "
                    placeholder="Enter your email... "
                    type="email"
                    value={input.email}
                    onChange={(e) =>
                        setInput((t) => ({ ...t, email: e.target.value }))
                    }
                />
            </div>
            <div className="flex flex-col gap-1 ">
                <label> Password</label>
                <input
                    className="border-2 w-96 rounded-md p-2 border-gray-500 "
                    placeholder="Enter your password..."
                    type={open ? "text" : "password"}
                    value={input.password}
                    onChange={(e) =>
                        setInput((t) => ({ ...t, password: e.target.value }))
                    }
                />
            </div>
            <div className="flex justify-between w-full  ">
                <div className="flex gap-1 items-center">
                    <input
                        type="checkbox"
                        value={open}
                        onChange={() => setOpen((t) => !t)}
                    />
                    <label>Show Password </label>
                </div>
                <Link className="text-blue-700" to="/forgotPassword">
                    Forgot Password?
                </Link>
            </div>
            <button
                className="w-full p-2 bg-blue-500 text-white rounded-md font-medium"
                type="submit"
            >
                Submit
            </button>
            <div>
                Not registered yet?{" "}
                <Link className=" text-blue-700 " to="/register">
                    Register
                </Link>
            </div>
        </form>
    );
};

export default Login;
