export default {
  header: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    languagePt: "Switch to Portuguese",
    languageEn: "Switch to English",
    downloadCv: "Download CV",
  },
  intro: {
    badge: "🚀 Available for new projects",
    title: "I'm Mateus Félix",
    bio: "Hi, I'm a software engineer based in Santos/SP, Brazil. Passionate about learning and building software solutions.",
  },
  skills: {
    title: "Skills",
    description:
      "I've had the opportunity to work with a variety of technologies throughout my career, and I'm passionate about learning. This list is always being updated.",
    tabsPlaceholder: "[ Interactive tabs component will go here ]",
  },
  experiences: {
    title: "Experience",
    description: "Where I've been and what I've built throughout my professional journey.",
    items: {
      bancoBv: {
        name: "Banco BV",
        role: "Software Engineer",
        time: "Aug/2024 - Present",
        description:
          "In an app with 10 million users, I led mobile (Flutter) and web (Angular) development for credit and loan products, improving legacy code and shipping new features with clean architecture and microapps.",
      },
      wowe: {
        name: "Wowe",
        role: "Fullstack Developer",
        time: "Feb/2024 - Aug/2024",
        description:
          "Built 100% of the frontend (Flutter and React) and 100% of the backend (Go) for a social network focused on sharing experiences and trends, using clean architecture on both sides. The project used tools such as Google Places, Elasticsearch, RabbitMQ, and Kafka.",
      },
      viva: {
        name: "Viva Translate",
        role: "Frontend Developer",
        time: "Nov/2023 - Feb/2024",
        description:
          "Worked as a frontend developer (React and Flutter Desktop) on a real-time AI video-call translation product, available as a web extension or desktop app.",
      },
      cerc: {
        name: "CERC",
        role: "Frontend Developer",
        time: "Dec/2022 - Nov/2023",
        description:
          "Worked end-to-end from the start on a carbon credit web platform built with Angular.",
      },
      linx: {
        name: "Linx",
        role: "Fullstack Developer",
        time: "Jan/2022 - Dec/2022",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      headson: {
        name: "HeadsOn",
        role: "Fullstack Developer",
        time: "Jan/2022 - Dec/2022",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
    },
  },
  projects: {
    title: "GitHub Portfolio",
    description: "Some of my personal and open source projects.",
    bancoBv: {
      tag: "Go",
      name: "go-flight-tracker",
      description:
        "High-performance concurrent event engine in Go that tracks aircraft from the OpenSky Network API and streams real-time updates to clients via GraphQL Subscriptions (WebSockets).",
    },
    wowe: {
      tag: "Fullstack (Go, Flutter)",
      name: "wowe",
      description:
        "Led end-to-end development of a social network for sharing experiences and trends.",
    },
  },
} as const;
