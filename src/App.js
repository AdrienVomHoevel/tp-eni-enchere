import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connection from "./pages/Connection";
import Homes from "./pages/Homes";
import Inscription from "./pages/Inscription";
import Profil from "./pages/Profil";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

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
            <Route path="/profil/" element={<Profil />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
