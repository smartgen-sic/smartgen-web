import React from "react";
import { Link } from "react-router-dom";
import profil from "./Ellipse.png";
import logo from "./Logo.png";
import agenda from "./agenda.png";
import keewa from "./keewa.png";
import kesal from "./kesal.png";
import konseling from "./konseling.png";
import marah from "./marah.png";
import sedih from "./sedih.png";
import senang from "./senang.png";
import "./Homepage.css";

export default function Homepage() {
    return (
        <div>
            <div className="pp-home">
                <img src={profil} alt="pp" />
                Hi, Wandi
            </div>
            <img className="style" src={logo} />
            <div className="home-title">
                <h1>SmartGen</h1>
            </div>
            <div className="garis-home">
                <hr />
            </div>
            <Link to="/bot">
                <button type="button" class="button-home">
                    <div class="rectangle">
                        <div class="kata-button"> Mulai Sesi Curhatmu Yuk!</div>
                    </div>
                </button>
            </Link>
            <div class="perasaan">
                <p>Bagaimana perasaan kamu hari ini?</p>
            </div>
            <img className="kecewa" src={keewa} alt="kecewa" />
            <img className="kesal" src={kesal} alt="kesal" />
            <img className="marah" src={marah} alt="marah" />
            <img className="sedih" src={sedih} alt="sedih" />
            <img className="senang" src={senang} alt="senang" />
            <Link to="/psikologg">
                <button type="button" className="button-konsul">
                    <div class="konsul">
                        {" "}
                        <img src={konseling} />
                    </div>
                </button>
            </Link>
            <Link to="/jurnal">
                <button type="button" class="button-agenda">
                    <div className="agenda">
                        <img src={agenda} />
                    </div>
                </button>
            </Link>
            <Link to="/artikel">
                <button type="button" className="artikel-home">
                    Artikel
                </button>
            </Link>
        </div>
    );
}
