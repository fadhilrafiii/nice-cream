type NutritionFact = {
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
