
import { SkillCategory, ExperienceItem, ItemPlatform } from './types';
import cbt from "./assets/cbt.jpg";
import isms from "./assets/isms.jpg";
import erp from "./assets/erp.png";
import asana from "./assets/asana.png";
import chakraui from "./assets/chakraui.png";
import vue from "./assets/vue.png";
import vscode from "./assets/vscode.png";
import ts from "./assets/ts.png";
// import svelte from "./assets/svelte.png";
import semantic from "./assets/semantic.png";
import react from "./assets/react.png";
// import python from "./assets/python.png";
// import postman from "./assets/postman.png";
import php from "./assets/php.png";
import nextjs from "./assets/nextjs.png";
import mongodb from "./assets/mongodb.png";
import js from "./assets/js.png";
import html from "./assets/html.png";
import git from "./assets/git.png";
import figma from "./assets/figma.png";
// import elementor from "./assets/elementor.png";
import css from "./assets/css.png";
// import codeigniter from "./assets/codeigniter.png";

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Tools",
    items: [
      { name: "Figma", level: 80, img: figma },
      { name: "GIT", level: 85, img: git},
      { name: "MongoDB", level: 65, img: mongodb },
      { name: "VS Code", level: 85, img: vscode},
      { name: "Asana", level: 95, img: asana},
      // { name: "Postman", level: 80, img: postman}
    ]
},
  {
    category: "Language",
    items: [
      { name: "HTML", level: 90, img: html},
      { name: "CSS", level: 85, img: css},
      { name: "Javascript", level: 90, img: js},
      { name: "Typescript", level: 85, img: ts},
      { name: "PHP", level: 70, img: php},
      // { name: "Python", level: 65, img: python}
    ]
},
  {
    category: "Framework",
    items: [
      { name: "React JS", level: 90, img: react },
      { name: "Next JS", level: 85, img: nextjs },
      { name: "Vue JS", level: 75, img: vue },
      // { name: "Tailwind CSS", level: 95, img: css },
      { name: "Chakra UI", level: 90, img: chakraui },
      { name: "Semantic UI", level: 90, img: semantic }
    ]
  }
];

export const LIST_PLATFORM: ItemPlatform[] = [
  {name: 'Instagram', link: "https://www.instagram.com/byoscards"}, 
  {name: 'LinkedIn', link: "https://www.linkedin.com/in/bayoscr"}
]

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "1",
    title: "School Management System",
    company: <div>x <a className="hover:text-zinc-900" href="https://impuls.id/" target="_blank">Impuls.id</a> as Frontend Developer</div>,
    period: "2019 - 2023",
    description: "Developed the frontend using React, ensuring a modular and responsive component architecture for a large-scale school management system.",
    tech: ["React", "Javascript", "Semantic UI", "Asana", "GIT", "HTML", "CSS", "Figma"],
    image: isms
  },
  {
    id: "2",
    title: "Computer Based Test (CBT)",
    company: <div>x <a className="hover:text-zinc-900" href="https://impuls.id/" target="_blank">Impuls.id</a> as Frontend Developer</div> ,
    period: "2019 - 2023",
    description: "Developer for computer based test focusing on highly interactive user experiences and modern UI architecture.",
    tech: ["React", "Javascript", "Semantic UI", "Asana", "GIT", "HTML", "CSS", "Figma"],
    image: cbt
  },
  {
    id: "3",
    title: "Enterprise Resource Planning (ERP)",
    company: <div>x <a className="hover:text-zinc-900" href="https://impuls.id/" target="_blank">Impuls.id</a> x <a className="hover:text-zinc-900" href="https://ulapsi.psikologi.uns.ac.id/" target="_blank">ULAPSI</a> as Frontend Developer</div>,
    period: "2023",
    description: "Transformed high-fidelity designs into responsive, pixel-perfect ERP websites, optimizing operational workflows through an intuitive interface.",
    tech: ["Next.js", "Typescript", "Chakra UI", "Asana", "GIT", "HTML", "CSS", "Figma"],
    image: erp
  }
];
