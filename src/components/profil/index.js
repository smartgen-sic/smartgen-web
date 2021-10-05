import React from "react";
import profil from "./Ellipse.png";
import homee from "./Vector.png";
import "./index.css";

export default function Profil() {
    return (
    <body>
       <div className="home-profil" >
        <img src={homee} alt="home"/></div>
        <h4 class="tittle">My Account</h4>
        <div className="garis-profil">
            <hr /> </div>
        <div class="ava-pp">
         <img src={profil}></img></div>
         <div class="nama-profil">
        <a>Wandi</a> </div>
        <div class="gender-profil">
        <a>Laki - laki</a> </div>
        <div class="umur-profil">
        <a>18 tahun</a></div>
    </body>
        );
    }
    