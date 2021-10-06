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
                <h3 class="subtittle-login">Login your account</h3>
                <input
                    class="field-signup"
                    type="text"
                    placeholder="Email address"
                    aria-label=".form-control-sm example"
                ></input>
                <div className="masuk">
                    <i class="fas fa-user"></i>{" "}
                </div>
                <input
                    class="field-pw"
                    type="password"
                    placeholder="........"
                    aria-label=".form-control-sm example"
                ></input>
                <div class="password-icon">
                    <i class="fas fa-lock"></i>
                </div>
                <h3 class="password">Forgot password?</h3>
                <Link to="/homepage">
                    <button type="button" class="button-sign-up">
                        Login
                    </button>{" "}
                </Link>
                <h3 class="account">Don't have an account?</h3>
                <Link to="/signup">
                    <a href class="signup-satu">
                        <h3>Sign Up</h3>
                    </a>
                </Link>

                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
                    crossorigin="anonymous"
                ></script>
                <h3 class="google">Or login with</h3>
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
