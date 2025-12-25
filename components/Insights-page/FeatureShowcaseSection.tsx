import { getFeatureShowcaseCards } from "@/lib/action";
import FeatureShowcase from "./FeatureShowcase";

interface Card {
  id: string;
  image: string;
  title: string;
  description: string;
}

const FeatureShowcaseSection = async () => {
  const featureshowcasecards = await getFeatureShowcaseCards();

  const featureshowcasecardsnew: Card[] = featureshowcasecards
    .map((entry) => {
      const image = entry.fields.cardImage;
      const imageUrl = (image as any)?.fields?.file?.url;

      if (!imageUrl) return null;

      return {
        id: entry.sys.id,
        image: `https:${imageUrl}`,
        title: entry.fields.heading as unknown as string,
        description: entry.fields.description as unknown as string,
      };
    })
    .filter((card): card is Card => card !== null);

  return <FeatureShowcase featureCards={featureshowcasecardsnew} />;
};

export default FeatureShowcaseSection;
