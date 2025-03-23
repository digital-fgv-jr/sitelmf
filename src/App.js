import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/inicio';
import ProcessoSeletivo from './pages/processoSeletivo';
import Equipe from './pages/equipe';
import Alumni from './pages/alumni';
import Projetos from './pages/projetos';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/processoSeletivo" element={<ProcessoSeletivo />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
