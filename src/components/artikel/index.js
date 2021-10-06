import React from "react";
import { Link } from "react-router-dom";
import back from "./back.png";

import "./index.css";

export default function Artikel() {
    return (
        <div>
            <Link to="/homepage">
                <div className="back-artikel">
                    <img src={back} alt="back" />
                </div>
            </Link>
            <div className="title">
                <h1>SmartGen</h1>
            </div>
            <h6 className="subtittle-psikolog">Pilih artikel yang menarik !</h6>
            <div>
                <a
                    href="https://www.halodoc.com/artikel"
                    className="card-artikel"
                >
                    <div className="judul-artikel">
                        <p>Curhat Bisa Membantu Kesehatan Mental</p>
                    </div>
                    <div className="isi-artikel">
                        <p>
                            Menjaga kesehatan mental bisa dilakukan dengan
                            beberapa cara, salah satunya......
                        </p>
                    </div>
                    <div className="link-artikel">
                        <p>source : https://www.halodoc.com/artikel/</p>
                    </div>
                </a>
            </div>

            <div>
                <a
                    href="http://upbk.unp.ac.id/news/read/22/cara-bergaul-yang-baik-agar-anda-punya-banyak-teman"
                    className="card-artikel2"
                >
                    <div className="judul-artikel">
                        <p>Cara Bergaul Yang Baik Agar Anda Punya Banyak Teman</p>
                    </div>
                    <div className="isi-artikel">
                        <p>
                        Karakter terbentuk karena kebiasaan, lingkungan, keturunan dan......
                        </p>
                    </div>
                    <div className="link-artikel">
                        <p>source : http://upbk.unp.ac.id/</p>
                    </div>
                </a>
            </div>

            <div>
                <a
                    href="https://www.cnnindonesia.com/gaya-hidup/20190715174718-284-412324/cara-mengatur-waktu-kerja-agar-lebih-produktif"
                    className="card-artikel3"
                >
                    <div className="judul-artikel">
                        <p>Cara Mengatur Waktu Kerja Agar Lebih Produktif</p>
                    </div>
                    <div className="isi-artikel">
                        <p>
                            Produktifitas kerja acapkali terhambat akibat manajer waktu yang buruk. Padahal......
                        </p>
                    </div>
                    <div className="link-artikel">
                        <p>source : https://www.cnnindonesia.com/</p>
                    </div>
                </a>
            </div>

            <div>
                <a
                    href="https://www.kejarmimpi.id/lakukan-kebiasaan-ini-untuk-kejarmimpi-membentuk-mental-yang-kuat.html"
                    className="card-artikel4"
                >
                    <div className="judul-artikel">
                        <p>Lakukan kebiasaan ini untuk membentuk mental kuat</p>
                    </div>
                    <div className="isi-artikel">
                        <p>
                        Hidup ini berliku-liku. Adakah hidup seseorang yang selalu lancar dan......
                        </p>
                    </div>
                    <div className="link-artikel">
                        <p>source : https://www.kejarmimpi.id/</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
