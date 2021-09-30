import React from "react";
import { Link } from "react-router-dom";
import ellipse from './Ellipse.png';
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
             <img class="profil" src={ellipse} />
            <img class="style" src={logo} />
           
            <h1>SmartGen</h1>
            <hr />
        <button type="button" class="button-home">
         <div class="rectangle">
         <div class="kata-button"> Mulai Sesi Curhatmu Yuk!</div>
        </div>
    </button>
    <div class="perasaan">
      <p>Bagaimana perasaan kamu hari ini?</p>
    </div>
          <img class="kecewa" src={keewa}/>
            <img class="kesal" src={kesal} />
            <img class="marah" src={marah} />
            <img class="sedih" src={sedih} />
            <img class="senang" src={senang} />
            <Link to="/psikologg">
    <button type="button" class="button-konsul">
             <div class="konsul">  <img src={konseling} /></div>
            </button></Link>

            <button type="button" class="button-agenda">
             <div class="agenda"> 
             <img src={agenda} />
             </div>
            </button>
            <Link to="https://kepri.bnn.go.id/hidup-sehat-dan-bahagia-tanpa-narkoba/">
            <button type="button" class="artikel">Artikel</button> </Link>
            <button type="button" class="artikell">Artikel</button>
        </div>
    );
}