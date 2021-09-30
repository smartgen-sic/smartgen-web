import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import hands from './hands.png';

export default function Sukses() {
    return (
        <div>
             <body>
    <h1 class="tittle">SmartGen</h1>
    <div class="succes-pay">
    <img src={hands} />
    </div>
    <p class="text-sukses">Payment Success</p>
    <Link to="/psikolog">
    <button type="button" class="button-start">Start</button>
    </Link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
  
</body>
        </div>
    );
}