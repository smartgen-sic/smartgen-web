import React from "react";
import { Link } from "react-router-dom";
import Animasi from "./Animasi.png";
import Chat from "./Chat.png";
import People from "./People.png";
import Home from "./Vector.png";

import "./index.css";

export default function Fitur() {
    return (
        <body>
            <Link to="/homepage">
                <div className="home-fitur">
                    <img src={Home} alt="home" />
                </div>
            </Link>
            <h1 class="tittle-fitur">SmartGen</h1>
            <div className="subtittle-fitur">
                <p>
                    There are several options that can help solve your problem.
                </p>
            </div>
            <div className="photo-fitur">
                <img src={Animasi} alt="animasi" />
            </div>

            <Link to="/psikologg">
                <div class="bk">
                    <h6 class="nama-konsel">Konseling</h6>
                    <p class="teks-konsel">
                        Consult your problem with the best psychologist
                    </p>
                    <div className="foto-konsel">
                        <img src={Chat} alt="chat" />
                    </div>
                </div>
            </Link>
            <Link to="/jurnal">
                <div class="diary">
                    <h6 class="nama-1-jurnal">Diary Journal</h6>
                    <p class="teks-1-jurnal">Create your journal !</p>

                    <div class="photo3-jurnal">
                        <img src={People} className="people" alt="journal" />
                    </div>
                </div>
            </Link>
        </body>
    );
}
