import { contentfulClient } from "./contentful";
import { Entry } from "contentful";
import {
  FeatureShowcaseCardsSkeleton,
  HeroSkeleton,
  SolutionCardsSkeleton,
} from "./types";

export async function getHero(): Promise<Entry<HeroSkeleton>> {
  const res = await contentfulClient.getEntries<HeroSkeleton>({
    content_type: "hero",
    limit: 1,
  });

  return res.items[0];
}

export async function getSolutionCards(): Promise<
  Entry<SolutionCardsSkeleton>[]
> {
  const res = await contentfulClient.getEntries<SolutionCardsSkeleton>({
    content_type: "solutionCards",
    order: ["sys.createdAt"],
  });

  return res.items;
}

export async function getFeatureShowcaseCards(): Promise<
  Entry<FeatureShowcaseCardsSkeleton>[]
> {
  const res = await contentfulClient.getEntries<FeatureShowcaseCardsSkeleton>({
    content_type: "featureShowcaseCards",
    order: ["sys.createdAt"],
  });

  return res.items;
}
