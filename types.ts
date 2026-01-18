
export interface Skill {
  name: string;
  level: number;
  img: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}
export interface ItemPlatform {
  name: string;
  link: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: any;
  period: string;
  description: string;
  tech: string[];
  image: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  CONTACT = 'contact'
}
