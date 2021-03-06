export interface IconProps {
  height: number;
  width: number;
  color?: string;
  className?: string;
}

export enum IconType {
  contact = "contact",
  profile = "profile",
  projects = "projects",
  skills = "skills",
  github = "github",
  linkedin = "linkedin",
  email = "email",
}

export enum ThemeType {
  light = "light",
  dark = "dark",
}
