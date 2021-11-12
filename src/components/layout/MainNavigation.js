import React from "react";
import { Link } from "react-router-dom";
import './MainNavigation.css'


function MainNavigation() {
  return (
    <header className='header'>
      <div className='logo'> Grupos Geeks de React </div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Todos los grupos </Link>
          </li>
          <li>
            <Link to="/nuevosAmigos"> Nuevos Amigos </Link>
          </li>
          <li>
            <Link to="/misFavoritos"> Mis Favoritos </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
