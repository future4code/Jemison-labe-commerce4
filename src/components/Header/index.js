
import React from "react";
import { HeaderContainer } from "./style";
import logo from "./Img/logo.jpeg";

 import galaxia2 from "./Img/gal1.jpeg" ;
  
function Header() {
   
   return <HeaderContainer>
     
   
       <img className="LogoSpace" src={logo} alt="Logo Space"></img>
       <h1> Market Space </h1>  
      <h6> Rocket® </h6>
      <img className ="Galaxia2" src={galaxia2} ></img>
      
    
   
   
   </HeaderContainer>
}

export default Header;
