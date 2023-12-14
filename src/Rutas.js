import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App, Carrito, Pasarela } from './App';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pasarela" element={<Pasarela />} />
        <Route path='/carrito' element={< Carrito />} />
        {/* Otras rutas pueden definirse aquí */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
