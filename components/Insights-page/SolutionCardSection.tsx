import { getSolutionCards } from "@/lib/action";
import SolutionCards from "./SolutionCards";

interface Card {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface ImageAsset {
  fields?: {
    file?: {
      url?: string;
    };
  };
}

const SolutionCardSection = async () => {
  const solCards = await getSolutionCards();

  const cardsDataNew: Card[] = solCards
    .map((entry) => {
      const image = entry.fields.cardImage;
      const imageUrl = (image as ImageAsset)?.fields?.file?.url;

      if (!imageUrl) return null;

      return {
        id: entry.sys.id,
        image: `https:${imageUrl}`,
        title: entry.fields.cardHeading as unknown as string,
        description: entry.fields.cardDescription as unknown as string,
      };
    })
    .filter((card): card is Card => card !== null);

  return <SolutionCards cards={cardsDataNew} />;
};

export default SolutionCardSection;
