import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Connection from './pages/Connection';
import Homes from './pages/Homes';
import Inscription from './pages/Inscription';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homes/>} />
        <Route path="/inscription" element={<Inscription/>} />
        <Route path="/connection" element={<Connection/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
