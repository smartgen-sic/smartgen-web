import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <body>
            <center>
                <div className="smartgen-signup">
                    <h1>SmartGen</h1>
                </div>
                <div className="subtittle-signup">
                    <h3>Sign up your account</h3>
                </div>
                <input
                    className="field-signup"
                    type="text"
                    placeholder="Email address"
                    aria-label=".form-control-sm example"
                ></input>
                <div className="signup">
                    <i className="fas fa-user"></i>{" "}
                </div>
                <input
                    className="field-pw"
                    type="password"
                    placeholder="........"
                    aria-label=".form-control-sm example"
                ></input>
                <div className="password-icon">
                    <i className="fas fa-lock"></i>
                </div>
                <input
                    className="field-pw-again"
                    type="password"
                    placeholder="password again"
                    aria-label=".form-control-sm example"
                ></input>
                <div className="password-icon-again">
                    <i className="fas fa-lock"></i>
                </div>
                <Link to="/register">
                    <button type="button" className="button-sign-up">
                        Sign up
                    </button>{" "}
                </Link>
            </center>
        </body>
    );
}
