import React from "react";
import { Link } from "react-router-dom";
import google from "./google.png";
import "./index.css";

export default function Login() {
    return (
        <body>
            <center>
                <div className="Smartgen">
<<<<<<< HEAD
                    <h1>SmartGen</h1>
                </div>
                <h3 class="subtittle-login">Login your account</h3>
=======
                    <h1 class="tittle">SmartGen</h1>
                </div>
                <h3 class="subtittle">Login your account</h3>
>>>>>>> 7f270e2d7e902ce1ca632c9a1409c0a15eea5974
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
<<<<<<< HEAD
                    <a class="signup-satu">
=======
                    <a class="signup">
>>>>>>> 7f270e2d7e902ce1ca632c9a1409c0a15eea5974
                        <h3>Sign Up</h3>
                    </a>
                </Link>

                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
                    crossorigin="anonymous"
                ></script>
<<<<<<< HEAD
                <div className="garis-2">
               <hr /></div>
                <h3 class="google">Or login with</h3>
               <div className="garis">
               <hr /></div>
                <div class="gugel">
                    <img src={google} alt="google" className="gambar-google" />
=======

                <h3 class="google">Or login with</h3>

                <div class="gugel">
                    <img src={google} />
>>>>>>> 7f270e2d7e902ce1ca632c9a1409c0a15eea5974
                </div>
            </center>
        </body>
    );
}