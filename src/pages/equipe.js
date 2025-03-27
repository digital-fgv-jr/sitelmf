import React from 'react';
import '../styles/pages/equipe.css';
import Banner from '../components/Banner';

function Equipe() {
  const diretores = [
    { nome: 'Pedro Migon', posicao: 'Presidente', linkedin: 'http://www.linkedin.com/in/pedro-migon', imagem: "Membros/PedroMigon_Presidente.jpg"  },
    { nome: 'João Lemos' , posicao: 'Vice Presidente ', linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-f-m-lemos-de-moraes-97bb38255', imagem: "Membros/JoãoLemos_VicePresidente.jpg" },
    { nome: 'Rodrigo Schroeder', posicao: 'Diretor de Parcerias', linkedin: 'http://www.linkedin.com/in/rodrigo-schroeder', imagem: "Membros/Rodrigo_Diretor-Parcerias.jpg"  },
    { nome: 'Arthur Ribeiro', posicao: 'Diretor Acadêmico', linkedin: 'https://www.linkedin.com/in/arthurrribeiro/', imagem: "Membros/Arthur_Diretor-Academico.jpg"  },
    { nome: 'Julia Stepansky', posicao: 'Diretora Institucional', linkedin: 'https://www.linkedin.com/in/julia-stepansky-9aa025319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', imagem: "Membros/JuliaStepansky_DiretoraInst.jpg"  },
  ];

  const membros = [
    { nome: 'Davi Alves', posicao: 'Coordenador do Núcleo de Private Equity', linkedin: 'https://www.linkedin.com/in/davi-alves-593948316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', imagem: "Membros/DaviAlves_CNPrE.jpg"  },
    { nome: 'Lucas Vinhas', posicao: 'Membro do Núcleo de Private Equity', linkedin: 'https://www.linkedin.com/in/lucas-vinhas', imagem: "Membros/LucasVinhas_MNPE.jpg"  },
    { nome: 'Carolina Schiefler', posicao: 'Membro do Núcleo de Private Equity', linkedin: 'https://www.linkedin.com/in/carolina-schiefler-01a0b133a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', imagem: "Membros/CarolinaMeirelesSchiefler_MNPrE.jpg"  },
    { nome: 'Giovanna Gomes', posicao: 'Membro do Núcleo de Private Equity', linkedin: 'https://www.linkedin.com/in/giovannamachadogomes/', imagem: "Membros/GiovanaMachadoGomes_MNPrE.jpg"  },
    { nome: 'Artur Vidal', posicao: 'Membro do Núcleo de Private Equity', linkedin: 'https://www.linkedin.com/in/artur-vidal-197870322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', imagem: "Membros/ArturVidal_MNPrE.jpg"  },
    { nome: 'Membro', posicao: 'Cargo', linkedin: '#', imagem: ""  },
    { nome: 'Arthur Ribeiro', posicao: 'Coordenador do Núcleo de Public Equit', linkedin: 'https://www.linkedin.com/in/arthurrribeiro/', imagem: "Membros/Arthur_Diretor-Academico.jpg"  },
    { nome: 'Eduardo Rodrigues', posicao: 'Membro do Núcleo de Public Equity', linkedin: 'https://www.linkedin.com/in/eduardo-rodrigues-556104347?utm_source=share&utm_campaign', imagem: "Membros/EduardoRottaRodrigues-MNPuE.jpg"  },
    { nome: 'João Benech', posicao: 'Membro do Núcleo de Public Equity', linkedin: 'http://www.linkedin.com/in/joão-pinto-coelho-benech-927188322', imagem: "Membros/JoãoPintoCoelhoBenech_MNPuE.jpg"  },
    { nome: 'Thiago Carvalho', posicao: 'Membro do Núcleo de Public Equity', linkedin: 'https://www.linkedin.com/in/thiago-carvalho-3a0086332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', imagem: "Membros/ThiagoCarvalho_MNPuE.jpg"  },
    { nome: 'Rodrigo Schroeder', posicao: 'Coordenador do Núcleo de Macro', linkedin: 'http://www.linkedin.com/in/rodrigo-schroeder', imagem: "Membros/Rodrigo_Diretor-Parcerias.jpg"  },
    { nome: 'Julia Stepansky', posicao: 'Membro do Núcleo de Macro', linkedin: 'https://www.linkedin.com/in/julia-stepansky-9aa025319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', imagem: "Membros/JuliaStepansky_DiretoraInst.jpg"  },
    { nome: 'Antônio Talamini', posicao: 'Membro do Núcleo de Macro', linkedin: 'https://www.linkedin.com/in/antonio-talamini-b13b78321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', imagem: "Membros/AntonioTalamini_MNM.jpg"  },
    { nome: 'Membro', posicao: 'Cargo', linkedin: '#', imagem: ""  },
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