import React from "react";
import { Link } from "react-router-dom";
import google from "./google.png";
import "./index.css";

export default function Login() {
    return (
        <body>
            <center>
                <div className="Smartgen">
                    <h1>SmartGen</h1>
                </div>
                <h3 className="subtittle-login">Login your account</h3>
                <input
                    className="field-signup"
                    type="email"
                    placeholder="Email address"
                    aria-label=".form-control-sm example"
                ></input>
                <input
                    className="field-pw"
                    type="password"
                    placeholder="........"
                    aria-label=".form-control-sm example"
                ></input>
                <h3 className="password">Forgot password?</h3>
                <Link to="/homepage">
                    <button type="button" className="button-sign-up">
                        Login
                    </button>{" "}
                </Link>
                <h3 className="account">Don't have an account?</h3>
                <Link to="/signup">
                    <a href className="signup-satu">
                        <p>Sign Up</p>
                    </a>
                </Link>

                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
                    crossorigin="anonymous"
                ></script>
                <h3 className="google">Or login with</h3>
                <div className="garis-login-satu">
                    <hr />
                </div>
                <div className="garis-login">
                    <hr />
                </div>
                <div className="gugel">
                    <img src={google} alt="google" className="gambar-google" />
                </div>
            </center>
        </body>
    );
}
