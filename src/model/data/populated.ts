import { allTags, cocktailTags, cocktails, ingredients, units } from './mvp';
import type { PopulatedCocktail, PopulatedIngredient, PopulatedRecipeItem } from '../types/populated';

export const populatedIngredients = ingredients.map<PopulatedIngredient>(ingredient => {
  return {
    ...ingredient,
    possibleUnits: [], // units.filter(unit => ingredient.possibleUnitIds.includes(unit.id)),
    tags: [], // allTags.filter(tag => ingredient.tagIds.includes(tag.id)),
  };
});

export const populatedCocktails = cocktails
  .map<PopulatedCocktail>(cocktail => {
    return {
      ...cocktail,
      recipe: cocktail.recipe.map<PopulatedRecipeItem>(item => {
        const ingredient = populatedIngredients.find(ingredient => item.ingredientId === ingredient.id);
        if (!ingredient) throw `Can't find ingredient ${item.ingredientId}`;

        const unit = units.find(unit => item.unitId === unit.id);
        if (!unit) throw `Can't find ingredient ${item.unitId}`;

        return { ...item, ingredient, unit };
      }),
      tags: allTags.filter(tag => cocktail.tagIds.includes(tag.id)),
    };
  })
  .filter(cocktail => {
    const hasAllIngredients = cocktail.recipe.every(item => item.optional || item.garnish || !item.ingredient.missing);
    return hasAllIngredients;
  });

export const cocktailsGrouped = cocktailTags.reduce(
  (acc, curr) => {
    const entries = populatedCocktails.filter(cocktail => cocktail.tagIds.includes(curr.id));
    return {
      ...acc,
      ...(entries.length > 0 ? { [curr.id]: entries } : {}),
    };
  },
  {} as Record<string, PopulatedCocktail[]>
);

export const cocktailGroups = allTags.filter(tag => Object.keysTyped(cocktailsGrouped).includes(tag.id));
