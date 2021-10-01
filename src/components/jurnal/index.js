import React from "react";

import "./index.css";

export default function jurnal() {
    return (
        <body>
      <div class="home">
      <i class="fas fa-home"></i></div>
    <h1 class="diary">Diary Journal</h1>
    <p class="jadwal"> Yuk jadwalin kegiatan positif kamu..</p>

    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Catatan</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    <center>
        <div class="ava">
            <img src="./Frame 461.png" alt="avatar"></img>
        </div>

<div class="kalender">
    <img src="Group 286.png" alt="kalender"></img></div>

    </center>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>

</body>
    );
}