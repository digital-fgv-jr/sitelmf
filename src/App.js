import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/inicio';
import ProcessoSeletivo from './pages/processoSeletivo';
import Equipe from './pages/equipe';
import Alumni from './pages/alumni.js';
import Projetos from './pages/projetos';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <header className="main-header">
        <div className="logo">
          <img
            src="/logoo.png"
            alt="Logo LMF"
            className="logo-image"
          />
          <div className="separator"></div>
          <div className="logo-name">
            <span className="lmf">LMF</span>
            <span className="fgv-rio">FGV RIO</span>
          </div>
        </div>

        <nav className="nav-links">
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/processoSeletivo">Processo Seletivo</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><Link to="/equipe">Equipe</Link></li>
            <li><Link to="/alumni">Alumni</Link></li>
          </ul>
        </nav>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </header>

      <hr className="header-divider" />

      {menuOpen && (
        <nav className="mobile-menu open">
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Início</Link></li>
            <li><Link to="/processoSeletivo" onClick={() => setMenuOpen(false)}>Processo Seletivo</Link></li>
            <li><Link to="/projetos" onClick={() => setMenuOpen(false)}>Projetos</Link></li>
            <li><Link to="/equipe" onClick={() => setMenuOpen(false)}>Equipe</Link></li>
            <li><Link to="/alumni" onClick={() => setMenuOpen(false)}>Alumni</Link></li>
          </ul>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/processoSeletivo" element={<ProcessoSeletivo />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </Router>
  );
}

export default App;
