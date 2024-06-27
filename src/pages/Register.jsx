import React, { useState } from "react";
import { login, register } from "../Request/Auth";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [open, setOpen] = useState(false);
    const redirect = useNavigate();
    return (
        <form
            className="flex flex-col w-fit justify-center items-center m-auto gap-4 "
            onSubmit={(e) => register(e, input, redirect)}
        >
            <h1 className="text-6xl font-bold mb-4  ">Create Your Account</h1>
            <div className="flex flex-col gap-1 ">
                <label> Name</label>
                <input
                    className="border-2 w-96 rounded-md p-2 border-gray-500 "
                    placeholder="Enter your name... "
                    type="text"
                    value={input.name}
                    onChange={(e) =>
                        setInput((t) => ({ ...t, name: e.target.value }))
                    }
                />
            </div>
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
            <div className="flex  w-96  ">
                <div className="flex gap-1 items-center">
                    <input
                        type="checkbox"
                        value={open}
                        onChange={() => setOpen((t) => !t)}
                    />
                    <label>Show Password </label>
                </div>
            </div>
            <button
                className="w-96 p-2 bg-blue-500 text-white rounded-md font-medium"
                type="submit"
            >
                Submit
            </button>
            <div>
                Already Registered?
                <Link className=" text-blue-700 " to="/login">
                    Login
                </Link>
            </div>
        </form>
    );
};

export default Register;
