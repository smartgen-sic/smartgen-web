import React from "react";
import "./Signup.css"
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <body>
            <center>
          <div className="smartgen-signup">
            <h1>SmartGen</h1></div>
          <div className="subtittle-signup">
        <h3>Sign up your account</h3></div>
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