import React from "react";
import Ellipse from "./Ellipse.png";

import "./index.css";

export default function Akun() {
    return (
        <body>
            <h4 class="tittle">My Account</h4>
            <div class="data-diri">
                <img src={Ellipse} alt="Logo" />
                <p>Wandi</p>
                <br> </br>
                <p>Laki - laki</p>
                <br> </br>
                <p>18 tahun</p>
            </div>
        </body>
    );
}
