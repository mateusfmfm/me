export const experienceIds = [
  "bancoBv",
  "wowe",
  "viva",
  "cerc",
  "headson",
  "linx",
] as const;

export type ExperienceId = (typeof experienceIds)[number];

export const projectItems = [
  {
    id: "bancoBv",
    stacks: ["Go", "GraphQL", "Redis"],
  },
  {
    id: "wowe",
    stacks: ["Go", "Flutter", "React"],
  },
] as const;

export type ProjectId = (typeof projectItems)[number]["id"];

export const skillNames = [
  "Flutter",
  "React",
  "Go",
  "Angular",
  "Postgres",
  "MongoDB",
  "GraphQL",
  "Swagger",
  "AWS",
  "Google Cloud",
  "Node.js",
  "Django",
  "FastAPI",
] as const;
