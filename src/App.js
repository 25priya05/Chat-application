import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Store/Auth";
import { SocketProvider } from "./Store/Socket";

const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/", element: <Home /> },
]);

const App = () => {
    return (
        <AuthProvider>
            <SocketProvider>
                <RouterProvider router={router} />
                <ToastContainer />
            </SocketProvider>
        </AuthProvider>
    );
};

export default App;
