import React from "react";
import Avatar from './Avatar.png';
import Kalender from './Kalender.png';

import "./index.css";

export default function jurnal() {
    return (
        <div>
        <body>
    <div className="diary-jurnal-1">
    <h1>Diary Journal</h1></div>
    <p className="jadwal-jurnal-1"> Yuk jadwalin kegiatan positif kamu..</p>

    
        <label for="exampleFormControlTextarea1" class="form-label-1">Catatan
        <textarea className="form-control" placeholder="type you schedule here"></textarea></label>
      
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
