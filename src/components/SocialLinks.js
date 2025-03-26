import React from 'react';
import '../styles/components/SocialLinks.css';

const SocialLinks = ({color = 'white'}) => {
  return (
    <div className="SocialLinks">
        <a href="https://www.instagram.com/lmfgvrio" target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-instagram social-icon ${color}`}></i>
        </a>
        <a href="https://www.linkedin.com/company/liga-de-mercado-financeiro-fgv-rio" target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-linkedin social-icon ${color}`}></i>
        </a>
    </div>
  );
};

export default SocialLinks;
