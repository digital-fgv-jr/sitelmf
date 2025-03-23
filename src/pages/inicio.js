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
        A Liga de Mercado Financeiro da FGV Rio nasceu com o propósito de transformar o interesse pelo mercado financeiro 
        em conhecimento aplicado e oportunidades concretas. Acreditamos que a melhor forma de aprender é combinando teoria
        e prática, por isso, promovemos desafios, eventos e treinamentos que estimulam o pensamento crítico e preparam nossos
        membros para os mais altos padrões do setor.
        <br />
        <br />
        Mais do que um grupo de estudos, somos uma comunidade de alunos dedicados a explorar as dinâmicas do mercado e a
        construir carreiras de impacto. Através de parcerias estratégicas com grandes instituições financeiras, oferecemos
        acesso direto a profissionais experientes, cases reais e competições que testam e desenvolvem habilidades essenciais.
        <br />
        <br />

        Nosso ambiente é pautado pela meritocracia, onde o desempenho e a dedicação abrem portas para novas oportunidades. 
        Buscamos a excelência em tudo o que fazemos, incentivando nossos membros a se desafiarem constantemente e a desenvolverem
        a resiliência necessária para enfrentar os desafios de um mercado competitivo.
        <br />
        <br />
        Se você busca crescimento, desafios e um ambiente que valoriza alto desempenho e o pensamento crítico, a Liga de Mercado
        Financeiro da FGV Rio é o lugar certo.
        </p>
      </div>

      <div className="missoes-visao-valores">
        <div className="missao">
          <h3>Missão</h3>
          <p>Descrição da missão da organização.</p>
        </div>
        <div className="visao">
          <h3>Visão</h3>
          <p>Descrição da visão da organização.</p>
        </div>
        <div className="valores">
          <h3>Valores</h3>
          <p>Descrição dos valores da organização.</p>
        </div>
      </div>

    </div>
  );
}

export default Inicio;
