import { Cocktail } from '../types/cocktails';

export const cocktailList: Cocktail[] = [];

export const cocktails = cocktailList.reduce(
  (acc, curr) => ({ ...acc, [curr.id]: curr }),
  {} as Record<string, Cocktail>
);
