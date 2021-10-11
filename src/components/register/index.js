import React from "react";
import { Link } from "react-router-dom";
import logo from "./Group.png";
import Back from "./back.png";

import "./register.css";

export default function Data() {
    return (
        <body>
            <Link to="/signup">
                <div className="back-regist">
                    <img src={Back} alt="back" />
                </div>
            </Link>
            <div className="regist-title">
                <p>SmartGen</p>
            </div>
            <div className="logo-suzy">
                <img src={logo} alt="Logo" />
            </div>
            <div className="form-label-name">
                <label for="exampleFormControlInput1">What's your name?</label>
            </div>
            <div className="form-control-nama-regist">
                <input
                    type="email"
                    className="form-control-name-regist"
                    id="exampleFormControlInput1"
                    placeholder="your direct name"
                    name="Your direct name"
                    onChange={(event) => console.log("onchange berubah")}
                />{" "}
            </div>
            <label for="exampleFormControlInput1" className="form-label-dua">
                What's your gender?
            </label>

            <div className="p-2 bd-highlight"></div>
            <button type="button" className="button-female">
                Female
            </button>

            <div className="p-2 bd-highlight">
                <button type="button" className="button-male">
                    Male
                </button>
            </div>
            <div className="form-label-umur-regist">
                <label for="exampleFormControlInput1">How old are you?</label>
            </div>
            <div className="form-control-umur-regist">
                <input
                    type="email"
                    className="form-control-age-regist"
                    id="exampleFormControlInput1"
                    placeholder="your age"
                    name="Your direct name"
                    onChange={(event) => console.log("onchange berubah")}
                />{" "}
            </div>

            <Link to="/homepage">
                <button type="button" className="button-next-awal">
                    Next
                </button>{" "}
            </Link>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
                crossorigin="anonymous"
            ></script>

            <div className="p-2 bd-highlight"></div>
            <button type="button" className="button-female">
                Female
            </button>

            <div className="p-2 bd-highlight">
                <button type="button" className="button-male">
                    Male
                </button>
            </div>

            <Link to="/homepage">
                <button type="button" className="button-next-awal">
                    Next
                </button>{" "}
            </Link>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
                crossorigin="anonymous"
            ></script>
        </body>
    );
}
