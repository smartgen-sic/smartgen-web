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
             <div className="smartgen-pembayaran">
                <p>Smartgen</p> </div>
            <Link to="/psikologg">
                <div className="back-bayar">
                    <img src={back} alt="back"></img>{" "}
                </div>
            </Link>
                <div className="atribut">
                <p>Pembayaran Konsultasi Psikologi</p></div>
           
            <div className="back-icon">
                <i className="fas fa-chevron-left"></i>
            </div>

            <div className="content-pembayaran">
                <div className="psikolog-done-pemabayaran">
                    <img src={psikolog} alt="udh milih psikolog" />
                </div>
                <div className="sesi">
                    <p> Total price</p>
                    <p>Session fee for 2 hours</p>
                    <p className="price">Rp. 100.000</p>
                    <p className="method">Payment method</p>
                </div>

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
            </div>
        </body>
    );
}
