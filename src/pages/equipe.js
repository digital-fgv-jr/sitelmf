import React from 'react';
import '../styles/pages/equipe.css';
import Banner from '../components/Banner';

function Equipe() {
  const diretores = [
    { nome: 'Pedro Migon', posicao: 'Presidente', linkedin: 'http://www.linkedin.com/in/pedro-migon', imagem: "Membros/PedroMigon_Presidente.jpg"  },
    { nome: 'João F. M. Lemos de Moraes' , posicao: 'Vice Presidente ', linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-f-m-lemos-de-moraes-97bb38255', imagem: "Membros/JoãoLemos_VicePresidente.jpg" },
    { nome: 'Rodrigo Kimaid Schroeder', posicao: 'Diretor de Parcerias', linkedin: 'http://www.linkedin.com/in/rodrigo-schroeder', imagem: "Membros/Rodrigo_Diretor-Parcerias.jpg"  },
    { nome: 'Arthur Ribeiro', posicao: 'Diretor Acadêmico', linkedin: 'https://www.linkedin.com/in/arthurrribeiro/', imagem: "Membros/Arthur_Diretor-Academico.jpg"  },
    { nome: 'Diretor 4', posicao: 'Posição', linkedin: '#', imagem: ""  },
    { nome: 'Diretor 5', posicao: 'Posição', linkedin: '#', imagem: "" },
  ];

  const membros = [
    { nome: 'Membro 1', posicao: 'Posição', linkedin: '#', imagem: ""  },
    { nome: 'Membro 2', posicao: 'Posição', linkedin: '#', imagem: ""  },
    { nome: 'Membro 3', posicao: 'Posição', linkedin: '#', imagem: ""  },
    { nome: 'Membro 4', posicao: 'Posição', linkedin: '#', imagem: ""  },
    { nome: 'Membro 5', posicao: 'Posição', linkedin: '#', imagem: ""  },
  ];

  return (
    <div className='equipe-container'>
      <Banner
        isHomePage = {false}
        backgroundImage= './imagem-inicio.jpg'
        PageName='Equipe'
      />

      <section className='equipe-diretoria'>
        <h2>DIRETORIA</h2>
        <div className='equipe-cards-container'>
          {diretores.map((diretor, index) => (
            <div key={index} className='equipe-card'>
              <img 
                src= {diretor.imagem}
                alt='Foto perfil' 
                className='equipe-foto' 
              />
              <div className='equipe-info'>
                <p className='equipe-nome'>{diretor.nome}</p>
                <p className='equipe-posicao'>{diretor.posicao}</p>
                <a 
                  href={diretor.linkedin} 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  <img 
                    src='/linkedin-icon-azul.png' 
                    alt='LinkedIn' 
                    className='equipe-linkedin' 
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='equipe-membros'>
        <h2>MEMBROS</h2>
        <div className='equipe-cards-container'>
          {membros.map((membro, index) => (
            <div key={index} className='equipe-card'>
              <img 
                src= {membro.imagem} 
                alt='Foto perfil' 
                className='equipe-foto' 
              />
              <div className='equipe-info'>
                <p className='equipe-nome'>{membro.nome}</p>
                <p className='equipe-posicao'>{membro.posicao}</p>
                <a 
                  href={membro.linkedin} 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  <img 
                    src='/linkedin-icon-azul.png' 
                    alt='LinkedIn' 
                    className='equipe-linkedin' 
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Equipe;