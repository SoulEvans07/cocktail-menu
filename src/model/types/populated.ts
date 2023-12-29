import { Cocktail, Ingredient, RecipeItem } from './mvp';

// prettier-ignore
type ForeignKeys<T> = Exclude<
  {
    [K in keyof T]: 
      K extends `${infer Single}Id` 
        ? Single extends keyof T ? Single : never
        : K extends `${infer Plural}Ids` 
          ? `${Plural}s` extends keyof T ? `${Plural}s` : never
          : never;
  }[keyof T],
  undefined
>;

export type TestKeys = ForeignKeys<Ingredient>;
//          ^?

// prettier-ignore
type Populate<
  T, 
  K extends ForeignKeys<T>, 
  R extends Partial<Record<Exclude<ForeignKeys<T>, K>, unknown>> = {}
> = 
  Omit<T, K | keyof R> &
  Required<Pick<T, K>> &
  R;

type Swap<T, Replace extends Partial<Record<keyof T, unknown>> = {}> = Omit<T, keyof Replace> & Replace;

export type PopulatedIngredient = Populate<Ingredient, 'possibleUnits' | 'tags'>;

export type PopulatedRecipeItem = Populate<RecipeItem, 'unit', { ingredient: PopulatedIngredient }>;

export type PopulatedCocktail = Swap<Populate<Cocktail, 'tags'>, { recipe: PopulatedRecipeItem[] }>;
