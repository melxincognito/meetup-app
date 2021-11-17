import React from "react";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import './MainNavigation.css'
import FavoritesContext from "../../store/favorites-context";


function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={'header'}>
      <div className='logo'> Grupos Geeks de React </div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Todos los grupos </Link>
          </li>
          <li>
            <Link to="/nuevosAmigos"> Añadir Grupo </Link>
          </li>
          <li>
            <Link to="/misFavoritos"> 
              Mis Favoritos 
              <span className='badge'>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
