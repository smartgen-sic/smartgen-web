import React from "react";
import { Link } from "react-router-dom";
import logo from './Group.png';
import Back from './back.png';

import "./register.css";

export default function Data() {
    return (
        <body>
          <Link to="/signup">
           <div class= "back">
    <img src = {Back} alt="back"/></div></Link>
  <div className="tittle-register">
    <h1>SmartGen</h1></div>
    <div class= "logo-suzy">
    <img src = {logo} alt="Logo"/></div>
  
        <label for="exampleFormControlInput1" class="form-label">What's your name?</label>
        <input type="email" class="form-control-name" id="exampleFormControlInput1" placeholder="your direct name" name="your direct name"onChange={ (event) => console.log ("onchange berubah")} />
      <label for="exampleFormControlInput1" class="form-label-dua">What's your gender?</label>

       <div class="p-2 bd-highlight" ></div>
       <button type="button" class="button-female">Female</button>
    
       <div class="p-2 bd-highlight">
       <button type="button" class="button-male">Male</button>
    </div>
    <label for="exampleFormControlInput1" className="form-label-register">How old are you?</label>
        <input type="email" className="form-control-register" id="exampleFormControlInput1" placeholder="your age" name="your direct name"onChange={ (event) => console.log ("onchange berubah")} />
     
      <Link to="/homepage">
    <button type="button" class="button-next-awal">Next</button> </Link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>

 </body>
    );
}
