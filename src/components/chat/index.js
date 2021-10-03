import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import back from './back.png';
import ava from './avatar-4.png';
import profill from './Ellipse.png';
import send from './send.png';

export default function Chat() {
    return (
        <div>
           
        <div class= "backk">
            <img src = {back} alt="back"/></div>
        <div className="title-chat">
        <h1>SmartGen</h1></div>
        <div className="subtitle-chat">
            <h6>Konsultasi Psikolog "Dimulai"</h6>
        </div>
        <div className="img-cont-msg">
            <img src={ava} alt="avatar"></img>
        </div>
        <div className="msg-container">
            <p>Hi sahabat, mari mulai sesi konsultasimu, ada yang bisa saya bantu?</p>
        </div>
        <div className="img-cont-msg-ava">
            <img src={profill} alt="profil"></img>
        </div>
        <div className="msg-container-send">
            <p>........</p>
        </div>
        <div className="img-cont-msg-2">
            <img src={ava} alt="avatar"></img>
        </div>
        <div className="msg-container-2">
            <p>........</p>
        </div>
        <div className="img-cont-msg-3">
            <img src={profill} alt="avatar"></img>
        </div>
        <div className="msg-container-3">
            <p>........</p>
        </div>
        <div className="img-cont-msg-4">
            <img src={ava} alt="avatar"></img>
        </div>
        <div className="msg-container-4">
            <p>Time’s up! see you later.</p>
        </div>
     
            <textarea className="ketik-pesan" placeholder="ketik pesan"></textarea>
            <img src={send} alt="send" className="send-chat" ></img>

        
            </div>
        );
    }