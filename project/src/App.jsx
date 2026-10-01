import { useEffect, useState } from "react";
import "./App.css";

const learningTopics = [
  ["⌘", "Lógica de programação", "Organize ideias e resolva problemas passo a passo com algoritmos."],
  ["▤", "Desenvolvimento web", "Crie páginas e experiências digitais para diferentes dispositivos."],
  ["◩", "Frontend", "Construa interfaces acessíveis, bonitas e fáceis de usar."],
  ["⚙", "Backend e APIs", "Desenvolva regras, serviços e integrações que fazem sistemas funcionar."],
  ["▦", "Banco de dados", "Armazene, organize e consulte informações de forma estruturada."],
  ["▣", "Aplicativos", "Explore conceitos para desenvolver soluções para diferentes plataformas."],
  ["◉", "Testes e qualidade", "Verifique o funcionamento e aprimore cada parte do seu sistema."],
  ["⑂", "Git e colaboração", "Acompanhe mudanças no código e trabalhe em equipe nos projetos."],
];

const technologies = [
  ["5", "HTML", "Estrutura para a web"],
  ["#", "CSS", "Estilo e apresentação"],
  ["JS", "JavaScript", "Interatividade e lógica"],
  ["⚛", "React", "Interfaces por componentes"],
  ["⬡", "Node.js", "JavaScript no servidor"],
  ["SQL", "SQL", "Consulta e gestão de dados"],
  ["⑂", "Git", "Versionamento de código"],
  ["GH", "GitHub", "Colaboração em projetos"],
];

const careers = [
  ["01", "Desenvolvimento Frontend", "Interfaces e experiências digitais."],
  ["02", "Desenvolvimento Backend", "Serviços, dados e integrações."],
  ["03", "Desenvolvimento Full Stack", "Do visual à lógica do sistema."],
  ["04", "Banco de dados", "Organização e gestão da informação."],
  ["05", "Aplicações e sistemas", "Produtos digitais para diferentes usos."],
  ["06", "Suporte e manutenção", "Confiabilidade e evolução de sistemas."],
];

const projects = [
  ["Gestão · Organização", "Cadastro de clientes", "Contatos, informações e histórico em um só lugar."],
  ["Controle · Operações", "Sistema de estoque", "Produtos, quantidades e movimentações acompanhados."],
  ["Serviços · Agenda", "App de agendamentos", "Horários e compromissos organizados sem complicação."],
  ["E-commerce · Vendas", "Loja virtual", "Uma experiência de compra simples e agradável."],
  ["Dados · Visualização", "Dashboard administrativo", "Dados transformados em informações úteis e visuais."],
  ["Produtividade · Rotina", "Aplicativo de tarefas", "Atividades e metas acompanhadas passo a passo."],
];

function SectionHeading({ label, title, children }) {
  return (
    <div className="section-heading reveal">
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function ProjectArtwork() {
  return (
    <div className="project-art" aria-hidden="true">
      <div className="mock-ui">
        <span className="mock-sidebar" />
        <div className="mock-content"><i /><i /><i /></div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.title = "Técnico em Desenvolvimento de Sistemas | SENAI";

    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
      return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
    }

    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("in-view"));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="topbar">
        <div className="wrap nav">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Desenvolvimento de Sistemas SENAI, início">
            <span className="brand-mark">DS</span>
            <span className="brand-label">DESENVOLVIMENTO<small>CURSO TÉCNICO · SENAI</small></span>
          </a>
          <nav className={`nav-links${menuOpen ? " open" : ""}`} aria-label="Navegação principal">
            <a href="#inicio" onClick={closeMenu}>Início</a>
            <a href="#curso" onClick={closeMenu}>O curso</a>
            <a href="#aprendizado" onClick={closeMenu}>Aprendizados</a>
            <a href="#tecnologias" onClick={closeMenu}>Tecnologias</a>
            <a href="#carreiras" onClick={closeMenu}>Carreiras</a>
            <a href="#projetos" onClick={closeMenu}>Projetos</a>
            <a className="mobile-cta" href="#inscricao" onClick={closeMenu}>Conheça o curso ↗</a>
          </nav>
          <a className="nav-cta" href="#inscricao">Conheça o curso <span>↗</span></a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="wrap hero-grid">
            <div className="hero-content">
              <span className="eyebrow">Tecnologia começa com curiosidade</span>
              <h1>Ideias boas merecem virar <span>sistemas.</span></h1>
              <p className="hero-copy">Aprenda a transformar problemas em soluções digitais. No curso Técnico em Desenvolvimento de Sistemas do SENAI, você cria, testa e dá vida à tecnologia.</p>
              <div className="hero-actions">
                <a className="button button-acid" href="#curso">Explore o curso <span>↗</span></a>
                <a className="quiet-link" href="#aprendizado">O que você vai aprender <span>↓</span></a>
              </div>
              <div className="hero-caption"><span className="caption-mark">✳</span><span>Da primeira linha de código<br />ao seu próximo grande projeto.</span></div>
            </div>
            <div className="hero-art" aria-label="Ilustração de uma janela de código">
              <div className="orbit"><i className="orbit-dot" /></div>
              <div className="terminal">
                <div className="terminal-head"><i /><i /><i /><span>ideia-que-vira-realidade.js</span></div>
                <div className="terminal-code">
                  <div><span className="code-pink">const</span> futuro = {'{'}</div>
                  <div className="code-indent">ideia: <span className="code-green">'a sua próxima conquista'</span>,</div>
                  <div className="code-indent">criatividade: <span className="code-orange">100</span>,</div>
                  <div className="code-indent">tecnologia: <span className="code-purple">'em construção'</span></div>
                  <div>{'}'};</div><br />
                  <div><span className="code-pink">function</span> <span className="code-orange">criarPossibilidades</span>() {'{'}</div>
                  <div className="code-indent"><span className="code-pink">return</span> aprender(futuro);</div>
                  <div>{'}'}</div><br />
                  <div><span className="code-green">// seu próximo passo começa aqui</span></div>
                </div>
              </div>
              <div className="float-card float-one"><b>✦ Aprender fazendo</b><small>Conhecimento que vira prática</small></div>
              <div className="float-card float-two"><b>↗ Seu futuro, em construção</b><small>Uma linha de código de cada vez</small></div>
            </div>
          </div>
        </section>

        <section className="section" id="curso">
          <div className="wrap about-grid">
            <div className="about-art reveal" aria-hidden="true">
              <span className="about-index">ESTÚDIO DE IDEIAS · 001</span>
              <div className="about-card"><span>Projeto em andamento</span><strong>O próximo passo é seu.</strong><div className="about-bars"><i /><i /><i /></div></div>
            </div>
            <div className="about-text reveal">
              <span className="section-label">01 / Sobre o curso</span>
              <h2>Tecnologia para tirar suas ideias do papel.</h2>
              <p>Desenvolvimento de Sistemas é a área que planeja e cria softwares para resolver desafios reais. No curso Técnico do SENAI, você aprende a desenvolver aplicações, sites e sistemas — da ideia ao produto funcionando.</p>
              <p>O profissional da área entende necessidades, escreve código, trabalha com dados e testa soluções. Mais do que programar, desenvolve formas melhores de fazer as coisas.</p>
              <ul className="check-list">
                <li><span>✓</span> Aprendizado prático conectado ao mercado</li>
                <li><span>✓</span> Fundamentos para criar aplicações completas</li>
                <li><span>✓</span> Trabalho em equipe e resolução de problemas</li>
              </ul>
              <div className="stats"><div><strong>01</strong><small>curiosidade que vira ideia</small></div><div><strong>02</strong><small>código que vira solução</small></div><div><strong>∞</strong><small>caminhos para explorar</small></div></div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="aprendizado">
          <div className="wrap">
            <SectionHeading label="02 / Sua caixa de ferramentas" title={<>Aprenda a construir<br />o que ainda não existe.</>}>Conhecimentos que se conectam para ajudar você a criar soluções digitais de verdade.</SectionHeading>
            <div className="learning-grid">{learningTopics.map(([icon, title, description], index) => <article className="learn-card reveal" key={title}><div className="card-top"><span className="card-icon">{icon}</span><span className="card-number">{String(index + 1).padStart(2, "0")}</span></div><h3>{title}</h3><p>{description}</p></article>)}</div>
          </div>
        </section>

        <section className="section tech-section" id="tecnologias">
          <div className="wrap">
            <SectionHeading label="03 / Ferramentas do dia a dia" title={<>Um universo de ferramentas.<br />Uma habilidade: criar.</>}>Conheça tecnologias e linguagens presentes no desenvolvimento de aplicações modernas.</SectionHeading>
            <div className="tech-grid reveal">{technologies.map(([symbol, name, description]) => <div className="tech" key={name}><span className="tech-symbol">{symbol}</span><span>{name}<small>{description}</small></span></div>)}</div>
          </div>
        </section>

        <section className="section" id="carreiras">
          <div className="wrap">
            <SectionHeading label="04 / Muitas possibilidades" title={<>Uma área.<br />Vários caminhos.</>}>Com uma formação em desenvolvimento, você pode explorar diferentes funções e descobrir onde quer chegar.</SectionHeading>
            <div className="career-grid">{careers.map(([number, title, description]) => <article className="career reveal" key={number}><div className="career-meta"><span>CAMINHO {number}</span><span>↗</span></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
          </div>
        </section>

        <section className="section section-dark" id="projetos">
          <div className="wrap">
            <SectionHeading label="05 / Aprender construindo" title={<>Da ideia à tela.<br />Do código ao mundo.</>}>Imagine alguns dos projetos que você pode desenvolver ao longo da sua jornada.</SectionHeading>
            <div className="project-grid">{projects.map(([label, title, description]) => <article className="project-card reveal" key={title}><ProjectArtwork /><div className="project-info"><span className="project-label">{label}</span><h3>{title}</h3><p>{description}</p></div></article>)}</div>
          </div>
        </section>

        <section className="cta" id="inscricao"><div className="wrap cta-inner"><div><span className="section-label">Seu próximo capítulo</span><h2>Seu futuro na tecnologia pode começar aqui.</h2><p>Conheça o curso Técnico em Desenvolvimento de Sistemas do SENAI.</p></div><a className="button" href="#curso">Quero conhecer <span>↗</span></a></div></section>
      </main>

      <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#inicio"><span className="brand-mark">DS</span><span className="brand-label">DESENVOLVIMENTO<small>CURSO TÉCNICO · SENAI</small></span></a><div className="footer-note">Landing page acadêmica · SENAI · 2025<br />Desenvolvido por <strong>Seu nome aqui</strong></div></div></footer>
      <button className={`back-top${showBackToTop ? " visible" : ""}`} type="button" aria-label="Voltar ao início" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
    </>
  );
}