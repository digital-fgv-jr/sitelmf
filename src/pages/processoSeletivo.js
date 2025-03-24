import React from 'react';
import '../styles/pages/processoSeletivo.css';

function ProcessoSeletivo() {
  return (
    <div className='ps-container'>

      <div className="ps-header">
        <img src="/imagem-inicio.jpg" alt="Imagem topo" className="ps-imagem-topo" />
        <div className="ps-banner">
          <div className='ps-logo-banner'>
            <div className="ps-logo">
          <img
            src="/logoo.png"
            alt="Logo LMF"
            className="ps-logo-image"
          />
          <div className="ps-separator"></div>
          <div className="ps-logo-name">
            <span className="ps">Processo <br /> Seletivo</span>
          </div>
        </div>
          </div>
          <div className="ps-tela-azul"></div>
        </div>
      </div>

      <div className='texto-ps'>
        <h2>ETAPAS</h2>
        <p>
        <strong>1° fase: Teste de conhecimento</strong>
        <br />
        <br />
        Prova contendo questões de múltipla escolha e discursivas, focadas majoritariamente em raciocínio lógico e atualidades.
        Não serão exigidos conhecimentos técnicos sobre o mercado financeiro.
        <br />
        <br />
        <strong>2° fase: Dinâmica em grupo</strong>
        <br />
        <br />
        A dinâmica consiste na resolução de um business case em grupo. Tanto o case quanto o grupo serão escolhidos pela direção da
        Liga.
        <br />
        <br />
        <strong>3° fase: Entrevista Individual</strong>
        <br />
        <br />
        Entrevista pessoal e sobre conteúdo específico a ser divulgado.
        <br />
        </p> 

        <h2>CRONOGRAMA</h2>
        <p>
        <strong>Inscrições:</strong> 27/01 a 22/02
        <br />
        <br />
        <strong>Teste de Conhecimento:</strong> 24/02
        <br />
        <br />
        <strong>Dinâmica em Grupo:</strong> 26/02 e 27/02
        <br />
        <br />
        <strong>Entrevista Individual:</strong> 10/03 a 12/03
        <br />
        <br />
        <strong>Divulgação de Resultados:</strong> 14/03
        <br />
        </p>
      </div>

      <div className="inscricao">
      <a
        href="https://linkdoformulario.com"
        className="inscricao-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        INSCREVA-SE AQUI
      </a>
    </div>

    </div>
  );
}

export default ProcessoSeletivo;