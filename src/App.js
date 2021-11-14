import React from "react";
import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetUps";
import NewMeetupsPage from "./pages/NewMeetup";
import AllFavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";


function App() {
  return (
    
      <Layout> 
        <Routes> 
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/nuevosAmigos" element={<NewMeetupsPage />} />
          <Route path="/misFavoritos" element={<AllFavoritesPage /> } />
        </Routes>
      </Layout>
    
  );
}

export default App;
