import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY === 0){
      setScrolled(false);
    }
    else if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setScrolled(false);
    } else if (window.scrollY < lastScrollY && window.scrollY > 100) {
      setScrolled(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
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

          <div className="social-links">
            <a href="https://www.instagram.com/lmfgvrio" target="_blank" rel="noopener noreferrer">
              <img src="/instagram-icon.png" alt='' className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/liga-de-mercado-financeiro-fgv-rio" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-icon.png" alt='' className="social-icon" />
            </a>
          </div>
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
      <hr className={`header-divider ${scrolled ? 'hidden' : ''}`} />
    </header>
  );
};

export default Navbar;
