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
<<<<<<< HEAD
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
=======
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src={Smartgen}/>
>>>>>>> e697d1446ef90a9d8d50fb2f415aca9be01d223a
            </center>
        </body>
    );
}
