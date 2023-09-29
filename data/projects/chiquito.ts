import { ProjectInterface } from "@/lib/types";

const description = `
Chiquito is a high-level structured language for implementing zero knowledge proof applications. Chiquito is being implemented in the DSL Working Group of PSE, Ethereum Foundation. This project allows the developer to think in more high-level and structured abstractions that most ZKP DSLs, while not sacrificing performance. Chiquito is being implemented in Rust, and it is based on the Halo2 proving system.
`;

export const chiquito: ProjectInterface = {
  id: "chiquito",
  projectStatus: "active",
  image: `chiquito.svg`,
  name: "Chiquito",
  tldr: "A high-level structured language for implementing zero knowledge proof applications.",
  description,
  links: {
    github: "https://github.com/privacy-scaling-explorations/chiquito",
  },
  tags: {
    keywords: ["Zero knowledge proofs", "DSL", "Structured language"],
    themes: ["build"],
    types: ["Application", "Language"],
    builtWith: ["Halo2", "Rust"],
  },
};