import React from "react";
import { Link } from "react-router-dom";
import Animasi from './Animasi.png';
import Chat from './Chat.png';
import People from './People.png';
import Home from './Vector.png';

import "./index.css";

export default function Fitur() {
    return (
        <body>
        <div className="home-fitur" >
        <img src={Home} alt="home"/></div>
    <h1 class="tittle">SmartGen</h1>
    <div className="subtittle-fitur">
        <p>There are several options that can help solve your problem.</p>
    </div>
    <div className="photo" >
    <img src={Animasi}/></div>

    <Link to="/psikologg">
    <div class="bk">
        <h6 class="nama">Konseling</h6>
        <p class="teks">Consult your problem with the best psychologist</p>
        <div className="foto" >
        <img src={Chat} className="chat" alt="chat"/></div>
      </div></Link>

      <div class="diary">

    <h6 class="nama-1">Diary Journal</h6>
    <p class="teks-1">Create your journal</p>
    
    <div class="photo3">
    <img src={People} className="people" alt="journal"/></div>
</div>


        </body>
    );

}