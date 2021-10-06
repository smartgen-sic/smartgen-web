import React from "react";
import { Link } from "react-router-dom";
import psikolog from "./Group 239.png";
import gopay from "./gopay.png";
import ovo from "./ovo.png";
import dana from "./Dana.png";
import back from "./back.png";

import "./index.css";

export default function Data() {
    return (
        <body>
            <Link to="/sukses">
                <div className="back-bayar">
                    <img src={back} alt="back"></img>{" "}
                </div>
            </Link>
            <div className="Smartgen"></div>
            <div className="back-icon">
                <i className="fas fa-chevron-left"></i>
            </div>
            <h1>Smartgen</h1>
            <h5>Pembayaran Konsultasi Psikologi</h5>
            <div className="psikolog-done">
                <img src={psikolog} alt="udh milih psikolog" />
            </div>
            <div className="sesi">
                <p> Total price</p>
                <p>Session fee for 2 hours</p>
            </div>
            <p className="price">Rp. 100.000</p>
            <p className="method">Payment method</p>
            <Link to="/sukses">
                <button type="button" className="gopay">
                    <img src={gopay} alt="gopay" />
                </button>
            </Link>
            <Link to="/sukses">
                <button type="button" className="ovo">
                    <img src={ovo} alt="ovo" />
                </button>
            </Link>
            <Link to="/sukses">
                <button type="button" className="dana">
                    <img src={dana} alt="dana" />
                </button>
            </Link>

            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
                crossorigin="anonymous"
            ></script>
        </body>
    );
}
