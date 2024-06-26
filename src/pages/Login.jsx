import React from "react";

const Login = () => {
    const [action, setAction] = useState("Sign Up");
    return (
        <div className="container">
            <div className="header">
                <div className="text"> {action} </div>{" "}
                <div className="underline"> </div>
            </div>{" "}
            <div className="inputs">
                <div className="input">
                    <img src="user.png" alt="" />
                    <input type="text" placeholder="Enter Your Name" />
                </div>
                <div className="input">
                    <img src="mail.png" alt="" />
                    <input type="email" placeholder="Enter your email " />
                </div>{" "}
                <div className="input">
                    <img src="padlock.png" alt="" />
                    <input type="password" placeholder="Enter Your Password" />
                </div>
            </div>{" "}
            <div className="forgot-password">
                Lost Password ? <span> Click Here! </span>{" "}
            </div>
            <div className="submit-container">
                <div
                    className={action === "Login" ? "submit-gray" : "submit"}
                    onClick={() => {
                        setAction("Sign Up");
                    }}
                >
                    {" "}
                    Sign Up{" "}
                </div>
                <div
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={() => {
                        setAction("Login");
                    }}
                >
                    {" "}
                    Login{" "}
                </div>
            </div>
        </div>
    );
};

export default Login;
