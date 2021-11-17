import React from 'react'
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function AllFavoritesPage() {
   const favoritesCtx = useContext(FavoritesContext);

   let content; 

   if (favoritesCtx.totalFavorites === 0) {
      content = <p> Todavia no tienes grupos agregado a tús favoritos! Agrega algunos a tú lista!</p>
   } else {
      content = <MeetupList meetups={favoritesCtx.favorites} />
   }

   return (
      <section> 
         <h1> Mís Favoritos</h1>
         {content}
      </section>
   
   )
}

export default AllFavoritesPage;