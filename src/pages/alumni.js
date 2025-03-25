import React from 'react';
import '../styles/pages/alumni.css';

function Alumni() {
  // Dados dos Alumni: adicione quantos perfis desejar
  const alumniList = [
    { name: 'Caio Lakiss', position: 'Fundador e Presidente', linkedin: 'https://www.linkedin.com/in/caiolakiss/' },
    { name: 'Newton Novo', position: 'Presidente', linkedin: 'Sem Linkedin' },
    { name: 'Otávio Rubião', position: 'Membro', linkedin: 'https://www.linkedin.com/in/ot%C3%A1vio-rubi%C3%A3o-101b5387/' },
    { name: 'Pedro Schott', position: 'Membro', linkedin: 'https://www.linkedin.com' },
    { name: 'Luis Gustavo Borges', position: 'Membro', linkedin: 'https://www.linkedin.com/in/luisgustavoborges/details/experience/' },
    { name: 'Gabriel Bernardino', position: 'Presidente', linkedin: 'https://www.linkedin.com/in/glbernardino/' },
    { name: 'Emanuel Fernandes', position: 'Membro', linkedin: 'https://www.linkedin.com' },
    { name: 'Nome Sobrenome 8', position: 'Posição', linkedin: 'https://www.linkedin.com' },
    { name: 'Nome Sobrenome 9', position: 'Posição', linkedin: 'https://www.linkedin.com' },
    { name: 'Pedro Rondon', position: 'Presidente', linkedin: 'https://www.linkedin.com/in/pedro-rondon-moura-/' },
    { name: 'Matheus Gabriel', position: 'Vice-Presidente', linkedin: 'https://www.linkedin.com' },
    { name: 'Alex Temporal', position: 'Direto Acadmêmico', linkedin: 'https://www.linkedin.com/in/alex-temporal/' },
    { name: 'Guilherme Mamedes', position: 'Diretor Institucional', linkedin: 'https://www.linkedin.com/in/guilherme-mamedes/' },
    { name: 'Luiz Felipe Peres', position: 'Presidente', linkedin: 'https://www.linkedin.com/in/luiz-filipe-peres/' },
    { name: 'Matheus Villela', position: 'Vice-Presidente', linkedin: 'https://www.linkedin.com/in/matheus-villela-8b5233276/' },
    { name: 'Rafael Gral', position: 'Diretor Acadêmico', linkedin: 'https://www.linkedin.com/in/rafael-milliati-gral/' },
    { name: 'Camille Medeiros', position: 'Diretora Institucional', linkedin: 'https://www.linkedin.com/in/camille-medeiros-/' },
    { name: 'João Pedro Landim', position: 'Membro', linkedin: 'https://www.linkedin.com/in/joaopedrolandim/' },
    { name: 'Bruno Albuquerque', position: 'Membro', linkedin: 'https://www.linkedin.com/in/bruno-albuquerque-7430a5227/' },
    { name: 'Gabriel Gonçalves', position: 'Membro', linkedin: 'https://www.linkedin.com/in/gabriel-goncalves-617022207/' },
    { name: 'Tomás Lira', position: 'Membro', linkedin: 'https://www.linkedin.com/in/tom%C3%A1s-lira-344872275/' },
    { name: 'Nikolas Moraes', position: 'Membro', linkedin: 'https://www.linkedin.com/in/n%C3%ADkolas-moraes-6128a6284/' },
    { name: 'Matheus Ruiz', position: 'Membro', linkedin: 'https://www.linkedin.com/in/mateus-ruiz-garcia/' },
    { name: 'Fernando Oliveira', position: 'Membro', linkedin: 'https://www.linkedin.com/in/fernandopuppin/' },
    { name: 'Lucas Valle', position: 'Membro', linkedin: 'https://www.linkedin.com/in/lucas-valle-01a563263/' },

  ];

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
                <span className="ps">Alumni</span>
              </div>
            </div>
          </div>
          <div className="ps-tela-azul"></div>
        </div>
      </div>

      <div className='profile-container'>
        {alumniList.map((profile, index) => (
          <div key={index} className="profile">
            <div className="profile-header">
              <span className="name">{profile.name}</span>
              <a 
                href={profile.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="linkedin-icon"
              >
                <img src="/linkedin-icon-azul.png" alt="LinkedIn" />
              </a>
            </div>
            <div className="position">{profile.position}</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Alumni;