import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
 

      

   
  return (
    <nav className="navbar navbar-default"> 
    <div className="container-fluid">
    <div className="navbar-header">
        <NavLink className="navbar-brand" style={{color:"#2b4257"}} to="/">Birakayim Seni</NavLink>
    </div>
    <div id="navbar-main" className="navbar-collapse collapse">
    <ul class="nav navbar-nav">
        <li>
            <NavLink to="/" style={{color:"#091235"}}>Ana Sayfa</NavLink>
        </li>
        <li>
            <NavLink to="newAdvert" style={{color:"#091235"}}>İlan Ver</NavLink>
        </li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
    <li className="dropdown">
  
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style={{color:"#091235"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/></svg><span class="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Giriş Yap</a></li>
            <li><a href="#">Üye Ol</a></li>
            <li><a href="">İlanlarim</a></li>
            <li><a href="#">Çıkış Yap</a></li>
         
          </ul>
        </li>
    </ul>
    </div>
    </div>
    
    </nav>
  );
}
export default NavBar;
