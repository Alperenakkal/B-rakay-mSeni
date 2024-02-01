import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <div className="navbar-default navbar navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <NavLink className="navbar-brand" to="/">Bırakayim Seni</NavLink>
          <button
            className="navbar-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-main"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div id="navbar-main" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li>
              <NavLink to={"admin"}>Ana Sayfa</NavLink>
            </li>
            <li>
              <NavLink to={"newAdvert"}>İlan Ver</NavLink> 
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faUser} />
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">Profil</a></li>
                <li><a href="#">Ayarlar</a></li>
                <li><a href="#">Çıkış</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
