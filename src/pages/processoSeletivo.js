import React from 'react';
import '../styles/pages/processoSeletivo.css';
import Banner from '../components/Banner';

function ProcessoSeletivo() {
  return (
    <div className='ps-container'>
      <Banner
        isHomePage = {false}
        backgroundImage= './imagem-inicio.jpg'
        PageName={<span>Processo<br />Seletivo</span>}
      />

      <div className='texto-ps'>
      <h2> Descrição</h2>
        <strong>Processo de Trainee – LMF FGV Rio</strong>
        <p>
        <br />
        A Liga do Mercado Financeiro da FGV Rio busca formar e capacitar seus membros por meio de um processo estruturado de
        aprendizado teórico e prático. O programa de trainee é dividido em quatro etapas, proporcionando uma imersão completa no
        mercado financeiro.
        <br/>
        </p>
        
        <h2>ETAPAS</h2>
        <p>
        <strong>1ª Etapa – Capacitação teórica e visitas técnicas</strong>
        <br />
        <br />
        Os trainees aprovados no processo seletivo recebem uma apostila exclusiva da liga para aprofundar seus conhecimentos sobre o
        mercado financeiro. Além disso, a LMF organiza palestras e visitas estratégicas a instituições do setor, proporcionando uma
        experiência prática e o contato direto com profissionais da área.
        <br />
        <br />
        <strong>2ª Etapa – Análise Macroeconômica</strong>
        <br />
        <br />
        Divididos em grupos, os trainees realizam uma apresentação sobre o cenário macroeconômico atual e suas perspectivas futuras. A
        análise deve contemplar fatores como política monetária e fiscal, além de suas implicações na economia atual e futura.
        <br />
        <br />
        <strong>3ª Etapa – Análise Setorial</strong>
        <br />
        <br />
        Depois, os trainees avaliam um setor específico da economia. O setor analisado é definido pela liga, e os trainees devem
        identificar as principais dinâmicas e tendências do mercado escolhido.
        <br />
        <br />
        <strong>4ª Etapa – Análise de uma empresa do setor</strong>
        <br/>
        <br/>
        Na última etapa, os trainees aplicam todo o conhecimento adquirido para analisar uma empresa listada em bolsa dentro do setor
        previamente estudado. O objetivo é compreender em profundidade seus demonstrativos financeiros e, por fim, realizar um
        valuation para embasar uma tese de investimento.
        <br/>
        <br/>
        OBS: Não é necessário conhecimento prévio para participar do programa. A LMF FGV Rio oferece suporte integral aos trainees,
        disponibilizando materiais de capacitação e cursos especializados, como Contabilidade, Valuation e Matemática Financeira.
        Buscamos candidatos motivados, com vontade de aprender e disponibilidade para se dedicar ao desenvolvimento dentro da liga.
        <br/> 
        </p> 

        {/* Atualizar cronograma do processo seletivo: */}
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
        // Atualizar link do formulário de inscrição:
        href="https://docs.google.com/forms/d/e/1FAIpQLSe16x3J1djU62vtFhbMSf3VX9Gw6vUuga6i_tmI0-tkZ9U-NQ/viewform?usp=sharing"
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