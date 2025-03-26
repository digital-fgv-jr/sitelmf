import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import '../styles/components/Navbar.css';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  // Controla o estado da navbar
  const handleScroll = () => {
    if (window.scrollY < 150) {
      setScrolled(false);
      setHidden(false);
    }
    else if (window.scrollY < lastScrollY) {
      setScrolled(true);
      setHidden(false);
    } else {
      setScrolled(false);
      setHidden(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, hidden]);

  return (
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className='navbar'>
        <Logo/>

        <nav className="navbar-links">

          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/processoSeletivo">Processo Seletivo</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><Link to="/equipe">Equipe</Link></li>
            <li><Link to="/alumni">Alumni</Link></li>
          </ul>
          
          <SocialLinks/>

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
      </div>
      <hr className={`header-divider ${hidden || scrolled ? 'hidden' : ''}`} />
    </header>
  );
};

export default Navbar;
