interface MagicProps {
  index: string;
  name: string;
  url: string;
}

interface Rarity {
  name: string;
}

interface MagicItem {
  index: string;
  name: string;
  equipment_category: MagicProps;
  rarity: Rarity;
  variants: MagicProps[];
  variant: boolean;
  desc: string[];
  url: string;
}

export type { MagicProps, MagicItem }