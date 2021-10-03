import React from "react";
import "./psikolog.css";
import { Link } from "react-router-dom";
import satu from './satu.png';
import dua from './dua.png';
import tiga from './tiga.png';
import empat from './empat.png';
import Star from './star.png';
import home from './Vector.png';

export default function Register() {
    return (
        <body>
            <Link to="/homepage">
     <div className="home-psikolog" >
        <img src={home} alt="home"/></div></Link>
    <div className="title">
    <h1>SmartGen</h1></div>
    <h6 class="subtittle-psikolog">Pilih psikolog yang kamu mau yuk!</h6>
    <div>
    <button type="button" class="button-psikolog" >
        <h6 class="nama-psikolog">Nadhifah M.Psi</h6>
        <p class="spesialis">Spesialis pendidikan</p>
        <Link to="/chat">
        <a class="sesi-berlangsung" href="url">Sesi sedang berlangsung</a></Link>
        <img class="photo-psikolog" src={satu} />
    </button></div>


    <button type="button" class="button-disable-psikolog" disabled data-bs-toggle="button" autocomplete="off">
        <h6 class="nama-psikologg">Fitra Nur M.Psi</h6>
        <p class="spesialis-dua-p">Spesialis keluarga</p>
        
        <div className="star-dua">
        <i> <img className="css-star" src={Star} height="12px" width="12px" alt="bintang" ></img> 4.9</i></div>
        
        <img class="photo-psikolog-dua" src={dua} />
    </button>

    <button type="button" class="button-disable-dua-psikolog" disabled data-bs-toggle="button" autocomplete="off">
        <h6 class="nama-psikologgg">Eris Fadil M.Psi</h6>
        <p class="spesialis-tiga-p">Spesialis pertemanan</p>
        <div className="star-tiga">
        <i> <img className="css-star-1" src={Star} height="12px" width="12px" alt="bintang" ></img> 4.8</i></div>
        <img class="photo-psikolog-tiga" src={tiga} />
    </button>

    <button type="button" class="button-disable-tiga-psikolog" disabled data-bs-toggle="button" autocomplete="off">
      <h6 class="nama-psikologggg">Andri Setia M.Psi</h6>
      <p class="spesialis-empat-p">Spesialis sosial</p>
      <div className="star">
        <i> <img className="css-star-2" src={Star} height="12px" width="12px" alt="bintang" ></img> 4.7</i></div>
      <img class="photo-psikolog-empat" src={empat} />
  </button>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
  
</body>
    );
}