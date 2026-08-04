export default {
  header: {
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    languagePt: "Mudar para português",
    languageEn: "Mudar para inglês",
    downloadCv: "Download CV",
  },
  intro: {
    badge: "🚀 Disponível para novos projetos",
    title: "Sou Mateus Félix",
    bio: "Olá, sou engenheiro de software localizado em Santos/SP. Apaixonado por estudos e desenvolvimento de soluções em software.",
  },
  skills: {
    title: "Skills",
    description:
      "Tive a oportunidade de trabalhar com uma variedade de tecnologias ao longo da minha carreira, além ser apaixonado por estudos. Portanto, essa lista está sempre sendo atualizada.",
    tabsPlaceholder: "[ Aqui vai entrar nosso componente de abas interativas ]",
  },
  experiences: {
    title: "Experiências",
    description: "Por onde passei e o que construí ao longo da minha jornada profissional.",
    items: {
      bancoBv: {
        name: "Banco BV",
        role: "Engenheiro de Software",
        time: "Ago/2024 - Atualmente",
        description:
          "Em um aplicativo com 10 milhões de usuários, liderei o desenvolvimento mobile (Flutter) e web (Angular) de produtos voltados a concessão de crédito e empréstimos, ajudando a melhoria continua do código legado e o desenvolvimento de novas features com arquitetura limpa e microapps.",
      },
      wowe: {
        name: "Wowe",
        role: "Desenvolvedor Fullstack",
        time: "Fev/2024 - Ago/2024",
        description:
          "Desenvolvi 100% do frontend (Flutter e React) e 100% do backend (Go) de um aplicativo de rede social para compartilhamento de experiências e trendings, utilizando arquitetura limpa em ambas as frentes. Projeto baseado com o uso de ferramentas como Google Places, Elasticsearch, RabbitMQ, Kafka entre outros.",
      },
      viva: {
        name: "Viva Translate",
        role: "Desenvolvedor FrontEnd",
        time: "Nov/2023 - Fev/2024",
        description:
          "Nesse projeto, atuei como desenvolvedor Front End (React e Flutter Desktop) de um produto de tradução em tempo real de video-chamadas baseado em inteligencia artificial, com uso via web extension ou desktop.",
      },
      cerc: {
        name: "CERC",
        role: "Desenvolvedor FrontEnd",
        time: "Dez/2022 - Nov/2023",
        description:
          "Atuei integralmente na construção, desde o início, de uma plataforma web de crédito de carbono construída com Angular.",
      },
      linx: {
        name: "Linx",
        role: "Desenvolvedor Fullstack",
        time: "Jan/2022 - Dez/2022",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      headson: {
        name: "HeadsOn",
        role: "Desenvolvedor Fullstack",
        time: "Jan/2022 - Dez/2022",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
    },
  },
  projects: {
    title: "Portfólio GitHub",
    description: "Alguns dos meus projetos pessoais e open source.",
    bancoBv: {
      tag: "Go",
      name: "go-flight-tracker",
      description:
        "Engine de eventos de alta performance e concorrência em Go que rastreia aeronaves da API do OpenSky Network e transmite atualizações em tempo real para clientes via GraphQL Subscriptions (WebSockets).",
    },
    wowe: {
      tag: "Fullstack (Go, Flutter)",
      name: "wowe",
      description:
        "Liderei o desenvolvimento integral do projeto, baseado em uma rede social para compartilhamento de experiências e trendings.",
    },
  },
} as const;
