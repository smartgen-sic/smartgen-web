import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import Smartgen from "./Smartgen.png";

import "./index.css";

export default function Pembukaan() {
    setTimeout(() => {
        <Redirect to="/login" />;
    }, 100);

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
                <img src={Smartgen} />
            </center>
        </body>
    );
}
