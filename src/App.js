import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connection from "./pages/Connection";
import Homes from "./pages/Homes";
import Inscription from "./pages/Inscription";
import Profil from "./pages/Profil";
import { ChakraProvider } from "@chakra-ui/react";
import NouvelleVente from "./pages/NouvelleVente";
import DetailVente from "./pages/DetailVente";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homes />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/connection" element={<Connection />} />
            <Route path="/profil/:id" element={<Profil />} />
            <Route path="/nouvelleVente" element={<NouvelleVente />} />
            <Route path="/detailVente" element={<DetailVente />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
