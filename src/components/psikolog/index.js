import React from "react";
import "./psikolog.css";
import satu from './satu.png';
import dua from './dua.png';
import tiga from './tiga.png';
import empat from './empat.png';

export default function Register() {
    return (
        <body>
      <div class="home-psikolog">
    <i class="fas fa-home"></i></div>
    <h1 class="tittle-psikolog">SmartGen</h1>
    <h6 class="subtittle-psikolog">Pilih psikolog yang kamu mau yuk!</h6>
    <div>
    <button type="button" class="button-psikolog" >
        <h6 class="nama-psikolog">Nadhifah M.Psi</h6>
        <p class="spesialis">Spesialis pendidikan</p>
        <a class="sesi-berlangsung" href="url">Sesi sedang berlangsung</a>
        <img class="photo-psikolog" src={satu} />
    </button></div>

    <button type="button" class="button-disable" disabled data-bs-toggle="button" autocomplete="off">
        <h6 class="nama-psikolog-dua">Fitra Nur M.Psi</h6>
        <p class="spesialis-dua">Spesialis keluarga</p>
        <div class="logo">
        <i class="far fa-star">4.9</i>
        </div>
        <img class="photo-psikolog-dua" src={dua} />
    </button>

    <button type="button" class="button-disable-dua" disabled data-bs-toggle="button" autocomplete="off">
        <h6 class="nama-psikolog-tiga">Eris Fadil M.Psi</h6>
        <p class="spesialis-tiga">Spesialis pertemanan</p>
        <div class="logo-dua">
        <i class="far fa-star">4.8</i>
        </div>
        <img class="photo-psikolog-tiga" src={tiga} />
    </button>

    <button type="button" class="button-disable-tiga" disabled data-bs-toggle="button" autocomplete="off">
      <h6 class="nama-psikolog-empat">Andri Setia M.Psi</h6>
      <p class="spesialis-empat">Spesialis sosial</p>
      <div class="logo-tiga">
      <i class="far fa-star">4.7</i>
      </div>
      <img class="photo-psikolog-empat" src={empat} />
  </button>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
  
</body>
    );
}