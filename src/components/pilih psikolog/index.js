import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import satu from "./satu.png";
import dua from "./dua.png";
import tiga from "./tiga.png";
import empat from "./empat.png";
import Star from "./star.png";
import home from "./Vector.png";

export default function Register() {
    return (
        <body>
            <Link to="/homepage">
                <div className="home-psikologg">
                    <img src={home} alt="home" />
                </div>
            </Link>
            <div className="tittle-psikolog1">
                <h1>SmartGen</h1>
            </div>
            <h6 className="subtittle-psikolog">
                Pilih psikolog yang kamu mau yuk!
            </h6>
            <Link to="/pembayaran">
                {" "}
                <div>
                    <button type="button" className="button-psikolog">
                        <h6 className="nama-psikolog">Nadhifah M.Psi</h6>
                        <p className="spesialis">Spesialis pendidikan</p>
                        <div className="star">
                            <i>
                                {" "}
                                <img
                                    src={Star}
                                    height="12px"
                                    width="12px"
                                    alt="star"
                                />
                                <span className="m-2">4.8</span>
                            </i>
                        </div>
                        <img className="photo-psikolog" src={satu} alt="satu" />
                    </button>
                </div>
            </Link>
            <Link to="/pembayaran">
                <button
                    type="button"
                    className="button-disable"
                    disabled
                    data-bs-toggle="button"
                    autocomplete="off"
                >
                    <h6 className="nama-psikolog-dua">Fitra Nur M.Psi</h6>
                    <p className="spesialis-dua">Spesialis keluarga</p>
                    <div className="star-2">
                        <i>
                            <img
                                src={Star}
                                height="12px"
                                width="12px"
                                alt="star"
                            />
                            <span className="m-2">4.9</span>
                        </i>
                    </div>
                    <img className="photo-psikolog-2" src={dua} alt="dua" />
                </button>
            </Link>
            <Link to="/pembayaran">
                <button
                    type="button"
                    className="button-disable-dua"
                    disabled
                    data-bs-toggle="button"
                    autocomplete="off"
                >
                    <h6 className="nama-psikolog-tiga">Eris Fadil M.Psi</h6>
                    <p className="spesialis-tiga">Spesialis pertemanan</p>
                    <div className="star-3">
                        <i>
                            {" "}
                            <img
                                src={Star}
                                height="12px"
                                width="12px"
                                alt="star"
                            />
                            <span className="m-2">4.8</span>
                        </i>
                    </div>
                    <img className="photo-psikolog-3" src={tiga} alt="tiga" />
                </button>
            </Link>
            <Link to="/pembayaran">
                <button
                    type="button"
                    className="button-disable-tiga"
                    disabled
                    data-bs-toggle="button"
                    autocomplete="off"
                >
                    <h6 className="nama-psikolog-empat">Andri Setia M.Psi</h6>
                    <p className="spesialis-empat">Spesialis sosial</p>
                    <div className="star-4">
                        <i>
                            {" "}
                            <img
                                src={Star}
                                height="12px"
                                width="12px"
                                alt="star"
                            />
                            <span className="m-2">4.7</span>
                        </i>
                    </div>
                    <img className="photo-psikolog-4" src={empat} alt="empat" />
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
