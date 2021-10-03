import React from "react";
import { Link } from "react-router-dom";
import profil from './Ellipse.png';
import logo from './Logo.png';
import agenda from './agenda.png';
import keewa from './keewa.png';
import kesal from './kesal.png';
import konseling from './konseling.png';
import marah from './marah.png';
import sedih from './sedih.png';
import senang from './senang.png';

import "./index.css";

export default function Homepage() {
    return (
        <div>
            <div className="pp-home">
             <img src={profil} alt="pp"/>Hi, Wandi</div>
             <img className="style" src={logo} />
           <div className="title-home">
            <h1>SmartGen</h1></div>
            <hr />
        <button type="button" class="button-home">
         <div class="rectangle">
         <div class="kata-button"> Mulai Sesi Curhatmu Yuk!</div>
        </div>
    </button>
    <div class="perasaan">
      <p>Bagaimana perasaan kamu hari ini?</p>
    </div>
          <img className="kecewa" src={keewa} alt="kecewa"/>
            <img className="kesal" src={kesal} alt="kesal"/>
            <img className="marah" src={marah} alt="marah"/>
            <img className="sedih" src={sedih} alt="sedih"/>
            <img className="senang" src={senang} alt="senang" />
            <Link to="/psikologg">
            <button type="button" className="button-konsul">
             <div class="konsul">  <img src={konseling} /></div>
            </button></Link>
            <Link to="/jurnal">
            <button type="button" class="button-agenda">
             <div className="agenda"> 
             <img src={agenda} />
             </div>
            </button></Link>
            <Link to="https://kepri.bnn.go.id/hidup-sehat-dan-bahagia-tanpa-narkoba/">
            <button type="button" className="artikel">You've must read this (artikel)</button> </Link>
            <Link to="https://kepri.bnn.go.id/hidup-sehat-dan-bahagia-tanpa-narkoba/">
            <button type="button" className="artikell">kenakalan remaja harus kita hindari (artikel)</button> </Link>
        </div>
    );
}