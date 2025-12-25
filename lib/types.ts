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

import { EntrySkeletonType, Asset } from "contentful";

export interface HeroFields {
  heroBatch: string;
  heading: string;
  description: string;
  animation: Asset;
}

export interface HeroSkeleton extends EntrySkeletonType {
  contentTypeId: "hero";
  fields: HeroFields;
}

export interface SolutionCardsFields {
  cardImage: Asset;
  cardHeading: string;
  cardDescription: string;
}

export interface SolutionCardsSkeleton extends EntrySkeletonType {
  contentTypeId: "solutionCards";
  fields: SolutionCardsFields;
}

export interface FeatureShowcaseCardsFeilds {
  cardImage: Asset;
  heading: string;
  description: string;
}

export interface FeatureShowcaseCardsSkeleton extends EntrySkeletonType {
  contentTypeId: "featureShowcaseCards";
  fields: FeatureShowcaseCardsFeilds;
}
