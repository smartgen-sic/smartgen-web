import React from "react";
import { Link } from "react-router-dom";
import Smartgen from "./Smartgen.png";

import "./index.css";

export default function buka() {
    return (
        <body>
            <center>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img src={Smartgen} alt="smartgen" />
                <Link to="/login">
                    <button type="button" className="button-sign-up">
                        Let's go
                    </button>{" "}
                </Link>
            </center>
        </body>
    );
}
