import React from "react";
import Animasi from './Animasi.png';
import Chat from './Chat.png';
import People from './People.png';

import "./index.css";

export default function Fitur() {
    return (
        <body>
        <div class="home">
      <i class="fas fa-home"></i></div>
    <h1 class="tittle">SmartGen</h1>
    <div className="subtittle">
        <p>There are several options that can help solve your problem.</p>
    </div>
    <div className="photo" >
    <img src={Animasi}/></div>

    <div class="bk">
        <h6 class="nama">Konseling</h6>
        <p class="teks">Consult your problem with the best psychologist</p>
        <div className="foto" >
        <img src={Chat}/></div>
      </div>

      <div class="diary">

    <h6 class="nama-1">Diary Journal</h6>
    <p class="teks-1">Create your journal</p>
    
    <div class="photo3">
    <img src={People}/></div>
</div>


        </body>
    );

}