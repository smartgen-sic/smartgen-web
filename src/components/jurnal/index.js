import React from "react";
import Avatar from './Avatar.png';
import Kalender from './Kalender.png';

import "./index.css";

export default function jurnal() {
    return (
        <body>
            <center>
    <div className="diary-jurnal">
    <h1>Diary Journal</h1></div>
    <p className="jadwal-jurnal"> Yuk jadwalin kegiatan positif kamu..</p>

    <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Catatan
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea></label>
      </div>
        <div className="ava">
        <img src={Avatar}alt="avatar"/>;
        </div>

<div className="kalender">
<img src={Kalender}alt="kalender"/>;
</div>

    </center>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</body>
    );
}