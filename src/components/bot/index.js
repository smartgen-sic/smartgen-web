import React from "react";
import { Link } from "react-router-dom";
import Back from './back.png';
import satu from './satuu.png';
import dua from './duaa.png';
import tiga from './tiga.png';
import empat from './empat.png';
import lima from './lima.png';
import enam from './enam.png';

import "./Bot.css";

export default function Bot() {
    return (
<body>
  
<Link to="/homepage">
<div className="back-bot">
    <img src={Back} alt="back" /></div></Link>

    <div className="curhat-judul">
    <h1>Curhat Session</h1></div>
            <div className="semangat">
            <img src={satu} alt="semangat"/></div>
        <div className="chat">
        <img src={dua} alt="masalah"/></div>
    <button type="button" className="button-belajar">
        <p className="belajar">Belajar</p>
       </button>
    <button type="button" className="button-keluarga">
        <p className="keluarga">keluarga</p>
       </button>
    <button type="button" className="button-teman">
        <p className="Teman">Teman</p>
       </button>
    <button type="button" className="button-kebiasaan">
        <p className="kebiasaan">kebiasaan</p>
       </button>
       
     <div className="wandi">
     <img src={tiga} alt="efektif"/></div>
    <button type="button" className="button-sudah">
      <p className="sudah">sudah</p>
     </button>
    <button type="button" className="button-belum">
      <p className="belum">belum</p>
     </button>

    <div className="bot">
    <img src={empat} alt="paparkan"/></div>

    <div className="memaparkan">
                <input
                    type="email"
                    className="form-control-paparan"
                    id="exampleFormControlInput1"
                    placeholder="paparkan cara belajarmu"
                    name="your direct name"
                    onChange={(event) => console.log("onchange berubah")}
                />{" "}
            </div>

    
    <div className="pemaparan">
    <p>cara belajarmu sudah keren nihh. Lebih semangat lagi yah sahabat Suzy!</p></div>
   <div className="cukup">
       <div className="bantu-lagi">
       <p>apakah ada yang perlu Suzy bantu lagi ?</p>
       </div>
    <button type="button" className="button-cukup">
          <p className="cukup-dalem">cukup</p>
         </button>
    <button type="button" className="button-curhat">
          <p className="curhat">curhat lagi</p>
         </button>
         </div>
        
      <div className="ending">
      <img src={lima} alt="baiklah"/></div>
    <button type="button" className="button-mulai">
          <p className="mulai kembali sesi curhatmu"> mulai kembali sesi</p>
         </button>
         <div className="perubahan">
         <img src={enam} alt="perubahan"/>
         </div>
         <Link to="/fitur">
     <button type="button" className="button-next-bot">
          <p className="next">next</p>
         </button></Link>
          





    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
  
  </body>
    );

}