import { skillNames } from "../../data/cv";

const badgeSrcByName: Record<(typeof skillNames)[number], string> = {
  Flutter:
    "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white",
  React:
    "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  Go: "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white",
  Angular:
    "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white",
  Postgres:
    "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
  MongoDB:
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  GraphQL:
    "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white",
  Swagger:
    "https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white",
  AWS: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
  "Google Cloud":
    "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  "Node.js":
    "https://img.shields.io/badge/node.js-6DA55F.svg?style=for-the-badge&logo=node.js&logoColor=white",
  Django:
    "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
  FastAPI:
    "https://img.shields.io/badge/FastAPI-005571.svg?style=for-the-badge&logo=fastapi",
};

export default function BadgesRow() {
  return (
    <div
      id="badges"
      className="flex flex-wrap gap-3 items-center justify-start py-2 select-none"
    >
      {skillNames.map((name) => (
        <img
          key={name}
          src={badgeSrcByName[name]}
          alt={name}
          className="skill-badge"
          loading="lazy"
        />
      ))}
    </div>
  );
}
