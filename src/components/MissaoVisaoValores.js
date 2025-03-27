import React from 'react';
import '../styles/components/MissaoVisaoValores.css';

function MissoesVisaoValores() {
  return (
    <div className='missoes-visao-valores'>

      <div className='subitem-missao-visao-valores'>
        <h3>Missão</h3>
        <p>
          Descrição da missão da organização. Descrição da missão da organização. Descrição da missão da organização.
          Descrição da missão da organização. Descrição da missão da organização. Descrição da missão da organização.
        </p>
      </div>

      <div className='subitem-missao-visao-valores'>
        <h3>Visão</h3>
        <p>Descrição da visão da organização.</p>
      </div>

      <div className='subitem-missao-visao-valores'>
        <h3>Valores</h3>
        <p>Descrição dos valores da organização.</p>
      </div>
    </div>
  );
}

export default MissoesVisaoValores;
