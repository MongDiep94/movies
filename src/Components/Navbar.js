import React from "react";
import Liepflix from "../Images/liepflix.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar_logo" src={Liepflix} alt="logo" />
      <div className="element-right">
        <div className="navbar__links">
          <NavLink to="/" className="home">
            Accueil
          </NavLink>
          <NavLink to="/movies" className="movies">
            Films
          </NavLink>
          <NavLink to="/avis" className="avis">
            Avis
          </NavLink>
          <div>
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
