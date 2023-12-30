import { UUID } from './common';

export interface Cocktail {
  id: UUID;
  name: string;
  description?: string;
  image: {
    url: string;
    offset?: {
      x?: number;
      y?: number;
      zoom?: number;
    };
  };
  recipe: CocktailIngredient[];
}

export interface CocktailIngredient {
  ingredientId: Ingredient['id'];
  amount: number;
  unitId: Unit['id'];
  optional?: boolean;
  garnish?: boolean;
}

export interface Ingredient {
  id: UUID;
  name: string;
  description?: string;
  tags: IngredientTag['id'][];
}

type IngredientTags = 'spirit' | 'liqueur' | 'bitter' | 'mixer' | 'sour' | 'syrup' | 'foaming-agent' | 'garnish';
export interface IngredientTag {
  id: IngredientTags;
  name: string;
  color: string;
}

export interface Unit {
  id: string;
  short: string;
  name: string;
  amountInMillis: number;
}
