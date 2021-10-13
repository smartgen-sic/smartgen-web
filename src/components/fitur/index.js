import React from "react";
import { Link } from "react-router-dom";
import Animasi from "./Animasi.png";
import Chat from "./Chat.png";
import People from "./People.png";
import Home from "./Vector.png";
import Backg from "./Logo.png";

import "./index.css";

export default function Fitur() {
    return (
        <body>
            <div>
                <img src={Backg}  className="bg-fitur" alt="pict" /></div>
            <Link to="/homepage">
                <div className="home-fitur">
                    <img src={Home} alt="home" />
                </div>
            </Link>
            <p className="tittle-fitur">SmartGen</p>
            <div className="subtittle-fitur">
                <p>
                    There are several options that can help solve your problem.
                </p>
            </div>
            <div className="photo-fitur">
                <img src={Animasi} alt="animasi" />
            </div>

            <Link to="/psikologg">
                <div className="bk">
                    <h6 className="nama-konsel">Konseling</h6>
                    <p className="teks-konsel">
                        Consult your problem with the best psychologist
                    </p>
                    <div className="foto-konsel">
                        <img src={Chat} alt="chat" />
                    </div>
                </div>
            </Link>
            <Link to="/jurnal">
                <div className="diary">
                    <h6 className="nama-1-jurnal">Diary Journal</h6>
                    <p className="teks-1-jurnal">Create your journal !</p>

                    <div className="photo3-jurnal">
                        <img src={People} className="people" alt="journal" />
                    </div>
                </div>
            </Link>
        </body>
    );
}
