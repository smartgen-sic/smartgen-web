import React from "react";

import "./index.css";

export default function jurnal() {
    return (
        <body>
            <div className="home">
                <i className="fas fa-home"></i>
            </div>
            <h1 className="diary">Diary Journal</h1>
            <p className="jadwal"> Yuk jadwalin kegiatan positif kamu..</p>

            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                    Catatan
                </label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
            </div>
            <center>
                <div className="ava">
                    <img src="./Frame 461.png" alt="avatar"></img>
                </div>

                <div className="kalender">
                    <img src="Group 286.png" alt="kalender"></img>
                </div>
            </center>

            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
                crossorigin="anonymous"
            ></script>
        </body>
    );
}
