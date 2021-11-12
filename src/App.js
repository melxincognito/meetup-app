import React from "react";
import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetUps";
import NewMeetupsPage from "./pages/NewMeetup";
import AllFavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes> 
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/nuevosAmigos" element={<NewMeetupsPage />} />
        <Route path="/misFavoritos" element={<AllFavoritesPage /> } />
      </Routes>
        
     
    </div>
  );
}

export default App;
