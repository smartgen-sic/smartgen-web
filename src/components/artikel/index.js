import React from "react";
import { Link } from "react-router-dom";
import back from "./back.png";

import "./index.css";

export default function Artikel() {
    return (
        <div>
            <Link to="/homepage">
                <div className="back-artikel">
                    <img src={back} alt="back" />
                </div>
            </Link>
            <div className="title">
                <h1>SmartGen</h1>
            </div>
            <h6 class="subtittle-psikolog">Pilih artikel yang menarik !</h6>
            <div>
                <a href className="card-artikel">
                    <div className="judul-artikel">
                        <p>Curhat Bisa Membantu Kesehatan Mental</p>
                    </div>
                    <div className="isi-artikel">
                        <p>
                            Menjaga kesehatan mental bisa dilakukan dengan
                            beberapa cara, salah satunya......
                        </p>
                    </div>
                    <div className="link-artikel">
                        <p>source : https://www.halodoc.com/artikel/</p>
                    </div>
                </a>
            </div>

            <div>
                <a href className="card-artikel2">
                    <div className="judul-artikel">
                        <p>Curhat Bisa Membantu Kesehatan Mental</p>
                    </div>
                    <div className="isi-artikel">
                        <p>
                            Menjaga kesehatan mental bisa dilakukan dengan
                            beberapa cara, salah satunya......
                        </p>
                    </div>
                    <div className="link-artikel">
                        <p>source : https://www.halodoc.com/artikel/</p>
                    </div>
                </a>
            </div>

            <div>
                <a href className="card-artikel3">
                    <div className="judul-artikel">
                        <p>Curhat Bisa Membantu Kesehatan Mental</p>
                    </div>
                    <div className="isi-artikel">
                        <p>
                            Menjaga kesehatan mental bisa dilakukan dengan
                            beberapa cara, salah satunya......
                        </p>
                    </div>
                    <div className="link-artikel">
                        <p>source : https://www.halodoc.com/artikel/</p>
                    </div>
                </a>
            </div>

            <div>
                <a href className="card-artikel4">
                    <div className="judul-artikel">
                        <p>Curhat Bisa Membantu Kesehatan Mental</p>
                    </div>
                    <div className="isi-artikel">
                        <p>
                            Menjaga kesehatan mental bisa dilakukan dengan
                            beberapa cara, salah satunya......
                        </p>
                    </div>
                    <div className="link-artikel">
                        <p>source : https://www.halodoc.com/artikel/</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
