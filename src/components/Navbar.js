import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
        <header className='subheader'>
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
        </header>
        <hr className="header-divider" />
    </header>
  );
}

export default Navbar;
