import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../styles/components/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    if (window.scrollY < 100) {
      setScrolled(false);
      setHidden(false);
    }
    else if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setScrolled(false);
      setHidden(true);
    } else if (window.scrollY < lastScrollY && window.scrollY > 100) {
      setScrolled(true);
      setHidden(false);
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
    <header className={`main-header ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <header className='subheader'>
        <Logo/>
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
      <hr className={`header-divider ${hidden || scrolled ? 'hidden' : ''}`} />
    </header>
  );
};

export default Navbar;
