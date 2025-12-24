export type NavLink = {
  name: string;
  path: string;
};

export type FooterLink = {
  name: string;
  path: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};
