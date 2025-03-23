import React from 'react';
import '../styles/components/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img
            src="/logoo.png"
            alt="Logo LMF"
            className="footer-logo-image"
          />
          <div className="footer-separator"></div>
          <div className="footer-logo-name">
            <span className="footer-lmf">LMF</span>
            <span className="footer-fgv-rio">FGV RIO</span>
          </div>
        </div>

        <div className="footer-contact">
            <p><strong>Endereço:</strong> <br /> Praia de Botafogo, 190, Rio de Janeiro, RJ</p>
            <p><strong>Contato:</strong> <br /> email@email.com</p>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/lmfgvrio" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-icon-preto.png" alt='' className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/liga-de-mercado-financeiro-fgv-rio" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon-preto.png" alt='' className="social-icon" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Developed by FGV JR</p>
      </div>
    </footer>
  );
}

export default Footer;
