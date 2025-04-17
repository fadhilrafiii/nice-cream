import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import DarkchocoIceCream from '@/public/images/darkchoco-icecream.png';
import Fruity3VarIcecream from '@/public/images/fruty3variant-icecream.png';
import MatchaIceCream from '@/public/images/matcha-icecream.png';
import PandanIceCream from '@/public/images/pandan-icecream.png';
import StrawberryIceCream from '@/public/images/strawberry-icecream.png';

export type NutritionFact = {
  name: string;
  subName: string;
  value: string;
  desc: string;
};

export const NUTRITION_FACTS: NutritionFact[] = [
  {
    name: 'Calories',
    subName: 'per Serving',
    value: '200g',
    desc: "It is lesser than normal ice cream. It tastes good and gives energy, but won't make you fat.",
  },
  {
    name: 'Fat',
    subName: 'per Serving',
    value: '7.6%',
    desc: 'Normal ice cream will give you more than 10% fat on each serving. Lower fat will make you stay slim and healthy.',
  },
  {
    name: 'Protein',
    subName: 'Compare than normal',
    value: '20%',
    desc: 'Have 20% higher protein from oat milk and soy milk. Eating this ice cream helps you build your muscle',
  },
];

export type IceCream = {
  img: StaticImport;
  name: string;
  desc: string;
};

export const ICE_CREAMS: IceCream[] = [
  {
    img: Fruity3VarIcecream,
    name: 'Fruity 3-Variant',
    desc: 'A refreshing trio of tropical fruits in every scoop.',
  },
  {
    img: MatchaIceCream,
    name: 'Matcha Match',
    desc: 'Earthy, creamy matcha goodness for green tea lovers.',
  },
  {
    img: StrawberryIceCream,
    name: 'Floral Strawberry',
    desc: 'Sweet strawberries with a delicate floral twist.',
  },
  {
    img: PandanIceCream,
    name: 'Greeny Pandan',
    desc: 'Aromatic pandan meets creamy delight.',
  },
  {
    img: DarkchocoIceCream,
    name: 'Dark Chocolate',
    desc: 'Bold, rich cocoa for pure chocolate indulgence.',
  },
];
