import React from "react";
import Avatar from './Avatar.png';
import Kalender from './Kalender.png';
import Vector from './Vector.png'
import { Link } from "react-router-dom";

import "./index.css";

export default function jurnal() {
    return (
        <div>
        <body>
        <Link to="/homepage">
        <div className="home-jurnal">
            <img src={Vector} alt="home" /></div></Link>
    
    <div className="diary-jurnal-1">
    <h1>Diary Journal</h1></div>
    <p className="jadwal-jurnal-1"> Yuk jadwalin kegiatan positif kamu..</p>

        <textarea className="form-control-jurnall" placeholder="type your schedule here"></textarea>
    
        <div className="ava">
        <img src={Avatar}alt="avatar"/>;
        </div>

<div className="kalender">
<img src={Kalender}alt="kalender"/>;
</div>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</body></div>
    );
}
