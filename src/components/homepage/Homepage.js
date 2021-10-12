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
import Swal from "sweetalert2";

export default function Homepage() {
    const ClickKecewa = () => {
    Swal.fire({
            text: "Ada yang lagi kecewa nih :(                     yakin deh, sebentar lagi hal baik akan datang padamu, semangat terus sahabat Suzy !",
            confirmButtonText: "Oke",
      });
    };

    const ClickSedih = () => {
        Swal.fire({
                text: "Yah.. kenapa sedih? Semangat dong, jangan bersedih lama - lama engga baik, mending kita happy bareng yuk sahabat Suzy!",
                confirmButtonText: "Oke",
          });
        };
    
        const ClickSenang = () => {
            Swal.fire({
                    text: "Wih suasana hatimu sedang bagus nih, semangat terus ya sahabat Suzy ^^",
                    confirmButtonText: "Oke",
              });
            };
    
            const ClickMarah = () => {
                Swal.fire({
                        text: "Hayoloh marah marah nanti cepet tua XX. Selesain dulu masalah nya satu - satu yuk sahabat Suzy ",
                        confirmButtonText: "Oke",
                  });
                };
                const ClickKesal = () => {
                    Swal.fire({
                            text: "Yah kamu lagi kesal ya ? Gapapa wajar kok, tapi jangan biarin kesal hancurin hari kamu yaa sahabat Suzy, Suzy mohon ^o^",
                            confirmButtonText: "Oke",
                      });
                    };

    return (
        <div>
            <div className="pp-home">
                <img src={profil} alt="pp" />
                Hi, Wandi
            </div>
            <img className="style" src={logo} alt="logo" />
            <div className="home-title">
                <p>SmartGen</p>
            </div>
            <div className="garis-home">
                <hr />
            </div>
            <Link to="/bot">
                <button type="button" className="button-home">
                    <div className="rectangle">
                        <div className="kata-button">
                            {" "}
                            Mulai Sesi Curhatmu Yuk!
                        </div>
                    </div>
                </button>
            </Link>
            <div className="perasaan">
                <p>Bagaimana perasaan kamu hari ini?</p>
            </div>
            <img className="kecewa" src={keewa} alt="kecewa" onClick={ClickKecewa} />
            <img className="kesal" src={kesal} alt="kesal" onClick={ClickKesal} />
            <img className="marah" src={marah} alt="marah" onClick={ClickMarah} />
            <img className="sedih" src={sedih} alt="sedih" onClick={ClickSedih}  />
            <img className="senang" src={senang} alt="senang" onClick={ClickSenang} />
            <Link to="/psikologg">
                <button type="button" className="button-konsul">
                    <div className="konsul">
                        <img src={konseling} alt="konsul" />
                    </div>
                </button>
            </Link>
            <Link to="/jurnal">
                <button type="button" className="button-agenda">
                    <div className="agenda">
                        <img src={agenda} alt="agenda" />
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
