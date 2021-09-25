import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

export default function Login() {
    return (
        <div className="login-page">
            <h1>Hai ini halaman login</h1>
            <Link to="/homepage">
                <button className="login-button">Login</button>
            </Link>
        </div>
    );
}
