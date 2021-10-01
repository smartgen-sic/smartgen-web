import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <body>
            <center>
        <h1 class="tittle">SmartGen</h1>
        <h3 class="subtittle">Sign up your account</h3>
        <input  class="field-signup" type="text" placeholder="Email address" aria-label=".form-control-sm example"></input> 
        <div class="signup">
          <i class="fas fa-user"></i>  </div>
        <input class="field-pw" type="password" placeholder="........" aria-label=".form-control-sm example"></input>
        <div class="password-icon"><i class="fas fa-lock"></i></div>
        <input class="field-pw-again" type="password" placeholder="password again" aria-label=".form-control-sm example"></input>
        <div class="password-icon-again"><i class="fas fa-lock"></i></div>
        <Link to="/register">
        <button type="button" class="button-sign-up">Sign up</button> </Link>
     
    
    
      </center>
      </body>
    );
}