import React from 'react';
import '../styles/pages/Inicio.css';

function Inicio() {
  return (
    <div className='inicio-container'>

      <div className="inicio-header">
        <img src="/imagem-inicio.jpg" alt="Imagem topo" className="inicio-imagem-topo" />
        <div className="banner">
          <div className='logo-banner'>
            <img src="/logoo.png" alt="Logo" className="logo-img" />
            <p>LIGA DE MERCADO FINACEIRO DA FGV RIO</p>
          </div>
          <div className="tela-azul"></div>
        </div>
      </div>

      <div className="sobre-nos">
        <h2>Sobre Nós</h2>
        <p>
        Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. 
        Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. 
        Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. 
        Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. 
        Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. 
        Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui.
        <br />
        <br />
        Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui.
        Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui.
        Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui.
        Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui.
        Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. 
        Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui. Texto legal aqui.
        </p>
      </div>

    </div>
  );
}

export default Inicio;
