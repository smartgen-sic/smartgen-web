import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import hands from "./hands.png";

export default function Sukses() {
    return (
        <div>
            <body>
                <h1 className="tittle">SmartGen</h1>
                <div className="succes-pay">
                    <img src={hands} alt="gambar" />
                </div>
                <p className="text-sukses">Payment Success</p>
                

                    <div><a href="https://frontend-message.vercel.app/">
                    <button type="button" className="button-start">
                        Start
                    </button></a></div>

                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
                    crossorigin="anonymous"
                ></script>
            </body>
        </div>
    );
}
