import { NavLink, FooterSection, SocialLink } from "./types";

export const NAVLINKS: NavLink[] = [
  { name: "Products", path: "/products" },
  { name: "Solutions", path: "/solutions" },
  { name: "Resources", path: "/Resources" },
  { name: "Company", path: "/Company" },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Product",
    links: [
      { name: "Customer Support", path: "/customer-support" },
      { name: "Data Professional", path: "/data-professional" },
      { name: "Employee Assistant", path: "/employee-assistant" },
      { name: "Pharmacist Assistant", path: "/pharmacist-assistant" },
      { name: "Proposal Manager", path: "/proposal-manager" },
      { name: "Compliance Analyst", path: "/compliance-analyst" },
      { name: "FAQs", path: "/faqs" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Customer Support", path: "/solutions/customer-support" },
      { name: "Data Professional", path: "/solutions/data-professional" },
      { name: "Employee Assistant", path: "/solutions/employee-assistant" },
      { name: "Pharmacist Assistant", path: "/solutions/pharmacist-assistant" },
      { name: "Proposal Manager", path: "/solutions/proposal-manager" },
      { name: "Compliance Analyst", path: "/solutions/compliance-analyst" },
      { name: "FAQs", path: "/solutions/faqs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blogs", path: "/blogs" },
      { name: "Customers", path: "/customers" },
      { name: "Videos", path: "/videos" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", path: "/about" },
      { name: "Join The Team", path: "/careers" },
      { name: "News", path: "/news" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
];
