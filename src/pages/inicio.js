import React from 'react';
import '../styles/pages/Inicio.css';

function Inicio() {
  return (
    <div className="inicio-container">
      <img src="/imagem-inicio.jpg" alt="Imagem topo" className="inicio-imagem-topo" />
      <div className="banner">
        <div className='logo-banner'>
          <img src="/logoo.png" alt="Logo" className="logo-img" />
          <p>LIGA DE MERCADO FINACEIRO DA FGV RIO</p>
        </div>
        <div className="tela-azul"></div>
      </div>
    </div>
  );
}

export default Inicio;
