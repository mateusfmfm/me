export default function BadgesRow() {
  // Lista das badges com seus respectivos links e textos alternativos para manter o código limpo
  const badges = [
    { src: "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white", alt: "Flutter Badge" },
    { src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB", alt: "React Badge" },
    { src: "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white", alt: "Angular Badge" },
    { src: "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white", alt: "Go Badge" },
    { src: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white", alt: "Postgres Badge" },
    { src: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white", alt: "MongoDB Badge" },
    { src: "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white", alt: "GraphQL" },
    { src: "https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white", alt: "Swagger" },
    { src: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white", alt: "AWS Badge" },
    { src: "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white", alt: "Google Cloud Badge" },
    { src: "https://img.shields.io/badge/node.js-6DA55F.svg?style=for-the-badge&logo=node.js&logoColor=white" },
    { src: "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" },
    { src: "https://img.shields.io/badge/FastAPI-005571.svg?style=for-the-badge&logo=fastapi" }
  ];

  return (
    <div
      id="badges"
      className="flex flex-wrap gap-3 items-center justify-start py-2 select-none"
    >
      {badges.map((badge, index) => (
        <img
          key={index}
          src={badge.src}
          alt={badge.alt}
          className="h-9 w-auto rounded-md shadow-xs hover:scale-105 hover:brightness-110 active:scale-98 transition-all duration-200 ease-out"
          loading="lazy"
        />
      ))}
    </div>
  );
}