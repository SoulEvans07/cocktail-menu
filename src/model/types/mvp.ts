export interface ImgTransform {
  offX?: number;
  offY?: number;
  scale?: number;
}

export type Image<Variants extends string | never = never> = {
  url: string;
} & {
  [V in Variants]: ImgTransform;
};

export interface Tag {
  key: string;
  label: string;
  group: string;
}

export interface Unit {
  id: string;
  name: string;
  shortName: string;
  amountInMillis: number;
  system?: 'metric' | 'imperial';
}

export interface Ingredient {
  id: string;
  name: string;
  description: string;
  tagKeys: Tag['key'][];
  tags?: Tag[];
  image: Image<'icon'>;
  possibleUnitIds: Unit['id'][];
  possibleUnits?: Unit[];
}

export interface RecipeItem {
  ingredientId: Ingredient['id'];
  ingredient?: Ingredient;
  unitId: Unit['id'];
  unit?: Unit;
  amount: number;
  garnish?: boolean;
  optional?: boolean;
}

export interface Cocktail {
  id: string;
  name: string;
  description: string;
  recipe: RecipeItem[];
  image: Image<'card' | 'page'>;
  tagKeys: Tag['key'][];
  tags?: Tag[];
  // glassShape?: string; P4: add glass shape
}
