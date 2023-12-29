import { faker } from '@faker-js/faker';

import type { Cocktail, Ingredient, RecipeItem, Tag, Unit } from '../types/mvp';

export const units = [
  {
    id: 'bsp',
    name: 'barspoon',
    shortName: 'bsp',
    amountInMillis: 5,
  },
  {
    id: 'dash',
    name: 'dash',
    shortName: 'dash',
    amountInMillis: 0,
  },
  {
    id: 'ml',
    name: 'milliliter',
    shortName: 'ml',
    amountInMillis: 1,
    system: 'metric',
  },
  // {
  //   id: 'cl',
  //   name: 'centiliter',
  //   shortName: 'cl',
  //   amountInMillis: 10,
  //   system: 'metric',
  // },
  // {
  //   id: 'dl',
  //   name: 'deciliter',
  //   shortName: 'dl',
  //   amountInMillis: 100,
  //   system: 'metric',
  // },
  {
    id: 'piece',
    name: 'piece',
    shortName: 'pc',
    amountInMillis: 0,
  },
  {
    id: 'cube',
    name: 'cube',
    shortName: 'cube',
    amountInMillis: 0,
  },
  {
    id: 'leaf',
    name: 'leaf',
    shortName: 'leaf',
    amountInMillis: 0,
  },
  {
    id: 'slice',
    name: 'slice',
    shortName: 'slice',
    amountInMillis: 0,
  },
  {
    id: 'rim',
    name: 'rimmed glass',
    shortName: 'rim',
    amountInMillis: 0,
  },
] as const satisfies Readonly<Unit[]>;

export type UnitId = (typeof units)[number]['id'];

const ingredientTags = [] as const satisfies Readonly<Tag[]>;

export type IngredientTagId = (typeof ingredientTags)[number]['id'];

type MockIngredient = Omit<Ingredient, 'possibleUnitIds' | 'tagIds'> & {
  possibleUnitIds: UnitId[] | readonly [];
  tagIds: IngredientTagId[] | readonly [];
};

export const ingredients = [
  {
    id: 'amaretto',
    name: 'Amaretto (almond liqueur)',
    description: '',
    image: {
      url: '/img/ingredients/amaretto.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'angostura-bitters',
    name: 'Angostura bitters',
    description: '',
    image: {
      url: '/img/ingredients/angostura-bitters.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'benedictine',
    name: 'Benedictine',
    description: '',
    image: {
      url: '/img/ingredients/benedictine.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
    missing: true,
  },
  {
    id: 'blue-curacao',
    name: 'Blue curacao',
    description: '',
    image: {
      url: '/img/ingredients/blue-curacao.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'bourbon-whisky',
    name: 'Bourbon whisky',
    description: '',
    image: {
      url: '/img/ingredients/bourbon-whisky.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'brandy',
    name: 'Brandy',
    description: '',
    image: {
      url: '/img/ingredients/brandy.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
    missing: true,
  },
  {
    id: 'campari',
    name: 'Campari',
    description: '',
    image: {
      url: '/img/ingredients/campari.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'champagne',
    name: 'Champagne',
    description: '',
    image: {
      url: '/img/ingredients/champagne.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'coffee',
    name: 'Coffee',
    description: '',
    image: {
      url: '/img/ingredients/coffee.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'coffee-liqueur',
    name: 'Coffee liqueur',
    description: '',
    image: {
      url: '/img/ingredients/khalua.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'cointreau',
    name: 'Cointreau',
    description: '',
    image: {
      url: '/img/ingredients/cointreau.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'creme-of-coconut',
    name: 'Creme of Coconut',
    description: '',
    image: {
      url: '/img/ingredients/creme-of-coconut.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'cucumber',
    name: 'Cucumber',
    description: '',
    image: {
      url: '/img/ingredients/cucumber.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'dark-rum',
    name: 'Dark rum',
    description: '',
    image: {
      url: '/img/ingredients/dark-rum.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'demerara-syrup',
    name: 'Demerara syrup',
    description: '',
    image: {
      url: '/img/ingredients/demerara-syrup.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'dry-vermouth',
    name: 'Dry vermouth',
    description: '',
    image: {
      url: '/img/ingredients/dry-vermouth.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
    missing: true,
  },
  {
    id: 'egg-white',
    name: 'Egg white',
    description: '',
    image: {
      url: '/img/ingredients/egg-white.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'elderflower-liqueur',
    name: 'Elderflower liqueur',
    description: '',
    image: {
      url: '/img/ingredients/elderflower-liqueur.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'gin',
    name: 'Gin',
    description: '',
    image: {
      url: '/img/ingredients/gin.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'ginger-beer',
    name: 'Ginger beer',
    description: '',
    image: {
      url: '/img/ingredients/ginger-beer.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'grapefruit-juice',
    name: 'Grapefruit juice',
    description: '',
    image: {
      url: '/img/ingredients/grapefruit-juice.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'grenadine',
    name: 'Grenadine',
    description: '',
    image: {
      url: '/img/ingredients/grenadine.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'guinness',
    name: 'Guinness',
    description: '',
    image: {
      url: '/img/ingredients/guinness.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'heavy-cream',
    name: 'Heavy cream',
    description: '',
    image: {
      url: '/img/ingredients/heavy-cream.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'honey-syrup',
    name: 'Honey syrup',
    description: '',
    image: {
      url: '/img/ingredients/honey-syrup.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'kevert',
    name: 'Kevert',
    description: '',
    image: {
      url: '/img/ingredients/kevert.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'lemon-juice',
    name: 'Lemon juice',
    description: '',
    image: {
      url: '/img/ingredients/lemon-juice.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'lemon-twist',
    name: 'Lemon twist',
    description: '',
    image: {
      url: '/img/ingredients/lemon-twist.jpeg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'lime-juice',
    name: 'Lime juice',
    description: '',
    image: {
      url: '/img/ingredients/lime-juice.jpeg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'malibu',
    name: 'Coconut liqueur',
    description: '',
    image: {
      url: '/img/ingredients/coconut-liqueur.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'maraschino-liqueur',
    name: 'Maraschino liqueur',
    description: '',
    image: {
      url: '/img/ingredients/maraschino-liqueur.png',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'mint',
    name: 'Mint',
    description: '',
    image: {
      url: '/img/ingredients/mint.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
    missing: true,
  },
  {
    id: 'orange-bitters',
    name: 'Orange bitters',
    description: '',
    image: {
      url: '/img/ingredients/orange-bitters.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'orange-juice',
    name: 'Orange juice',
    description: '',
    image: {
      url: '/img/ingredients/orange-juice.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'orange-twist',
    name: 'Orange twist',
    description: '',
    image: {
      url: '/img/ingredients/orange-twist.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'orgeat',
    name: 'Orgeat',
    description: '',
    image: {
      url: '/img/ingredients/orgeat.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'pinapple-juice',
    name: 'Pinapple juice',
    description: '',
    image: {
      url: '/img/ingredients/pinapple-juice.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'red-vermouth',
    name: 'Red vermouth',
    description: '',
    image: {
      url: '/img/ingredients/red-vermouth.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
    missing: true,
  },
  {
    id: 'rye-whisky',
    name: 'Rye whisky',
    description: '',
    image: {
      url: '/img/ingredients/rye-whisky.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'salt',
    name: 'Salt',
    description: '',
    image: {
      url: '/img/ingredients/salt.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'sugar',
    name: 'Sugar',
    description: '',
    image: {
      url: '/img/ingredients/sugar.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'simple-syrup',
    name: 'Simple syrup',
    description: '',
    image: {
      url: '/img/ingredients/simple-syrup.jpeg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'soda',
    name: 'Sparkling Water',
    description: '',
    image: {
      url: '/img/ingredients/sparkling-water.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'tea-infused-gin',
    name: 'Tea Infused Gin',
    description: '',
    image: {
      url: '/img/ingredients/tea-infused-gin.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'tequila',
    name: 'Tequila',
    description: '',
    image: {
      url: '/img/ingredients/tequila.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
    missing: true,
  },
  {
    id: 'the-spice-syrup',
    name: 'The Spice syrup',
    description: '',
    image: {
      url: '/img/ingredients/the-spice-syrup.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
    missing: true,
  },
  {
    id: 'triple-sec',
    name: 'Triple Sec',
    description: '',
    image: {
      url: '/img/ingredients/triple-sec.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'violet-syrup',
    name: 'Violet syrup',
    description: '',
    image: {
      url: '/img/ingredients/violet-syrup.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
    missing: true,
  },
  {
    id: 'vodka',
    name: 'Vodka',
    description: '',
    image: {
      url: '/img/ingredients/vodka.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'whipped-cream',
    name: 'Whipped cream',
    description: '',
    image: {
      url: '/img/ingredients/whipped-cream.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'whisky',
    name: 'Whisky',
    description: '',
    image: {
      url: '/img/ingredients/whisky.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
  {
    id: 'white-rum',
    name: 'White rum',
    description: '',
    image: {
      url: '/img/ingredients/white-rum.jpg',
      icon: {},
    },
    tagIds: [],
    possibleUnitIds: [],
  },
] as const satisfies Readonly<MockIngredient[]>;

export type IngredientId = (typeof ingredients)[number]['id'];

export const cocktailTags = [
  {
    id: 'gin',
    label: 'Gin',
    group: 'base',
  },
  {
    id: 'rum',
    label: 'Rum',
    group: 'base',
  },
  {
    id: 'whisky',
    label: 'Whisky',
    group: 'base',
  },
  {
    id: 'vodka',
    label: 'Vodka',
    group: 'base',
  },
  {
    id: 'tequila',
    label: 'Tequila',
    group: 'base',
  },
  {
    id: 'brandy',
    label: 'Brandy',
    group: 'base',
  },
  {
    id: 'other',
    label: 'Other',
    group: 'base',
  },
] as const satisfies Readonly<Tag[]>;

export type CocktailTagId = (typeof cocktailTags)[number]['id'];

type MockRecipeItem = Omit<RecipeItem, 'ingredientId' | 'unitId'> & {
  ingredientId: IngredientId;
  unitId: UnitId;
};

type MockCocktail = Omit<Cocktail, 'recipe' | 'tagIds'> & {
  recipe: MockRecipeItem[];
  tagIds: CocktailTagId[];
};

export const cocktails: Cocktail[] = [
  {
    id: faker.string.uuid(),
    name: 'Old Fashioned',
    description: '',
    recipe: [
      { ingredientId: 'bourbon-whisky', unitId: 'ml', amount: 60 },
      { ingredientId: 'demerara-syrup', unitId: 'ml', amount: 10 },
      { ingredientId: 'angostura-bitters', unitId: 'ml', amount: 2 },
      { ingredientId: 'orange-twist', unitId: 'piece', amount: 1, garnish: true },
    ],
    tagIds: ['whisky'],
    image: {
      url: '/img/cocktails/old-fashioned.jpg',
      card: {},
      page: {},
    },
  },
  {
    id: faker.string.uuid(),
    name: 'B&B',
    description: '',
    recipe: [
      { ingredientId: 'brandy', unitId: 'ml', amount: 50 },
      { ingredientId: 'benedictine', unitId: 'ml', amount: 50 },
    ],
    tagIds: ['brandy'],
    image: {
      url: '/img/cocktails/bnb.jpg',
      card: { offX: -20 },
      page: { offX: -20 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Manhattan',
    description: '',
    recipe: [
      { ingredientId: 'rye-whisky', unitId: 'ml', amount: 60 },
      { ingredientId: 'red-vermouth', unitId: 'ml', amount: 30 },
      { ingredientId: 'angostura-bitters', unitId: 'dash', amount: 2 },
    ],
    tagIds: ['whisky'],
    image: {
      url: '/img/cocktails/manhattan.jpg',
      card: { offX: 0, offY: -20 },
      page: { offX: 0, offY: -20 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Aviation',
    description: '',
    recipe: [
      { ingredientId: 'gin', unitId: 'ml', amount: 60 },
      { ingredientId: 'lemon-juice', unitId: 'ml', amount: 15 },
      { ingredientId: 'violet-syrup', unitId: 'ml', amount: 15 },
      { ingredientId: 'maraschino-liqueur', unitId: 'ml', amount: 7.5 },
    ],
    tagIds: ['gin'],
    image: {
      url: '/img/cocktails/aviation.jpg',
      card: { offX: -55 },
      page: { offX: -55 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Earl Grey MarTEAni',
    description: '',
    recipe: [
      { ingredientId: 'tea-infused-gin', unitId: 'ml', amount: 45 },
      { ingredientId: 'demerara-syrup', unitId: 'ml', amount: 30 },
      { ingredientId: 'lemon-juice', unitId: 'ml', amount: 20 },
      { ingredientId: 'egg-white', unitId: 'ml', amount: 30 },
    ],
    tagIds: ['gin'],
    image: {
      url: '/img/cocktails/earl-grey-marteani.jpg',
      card: { offX: -26, offY: -85, scale: 176 },
      page: { offX: -26, offY: -85, scale: 176 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Whisky Sour',
    description: '',
    recipe: [
      { ingredientId: 'whisky', unitId: 'ml', amount: 50 },
      { ingredientId: 'lemon-juice', unitId: 'ml', amount: 30 },
      { ingredientId: 'simple-syrup', unitId: 'ml', amount: 20 },
      { ingredientId: 'egg-white', unitId: 'ml', amount: 30 },
    ],
    tagIds: ['whisky'],
    image: {
      url: '/img/cocktails/whisky-sour.jpg',
      card: { offX: -20 },
      page: { offX: -20 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'White Russian',
    description: '',
    recipe: [
      { ingredientId: 'coffee-liqueur', unitId: 'ml', amount: 30 },
      { ingredientId: 'vodka', unitId: 'ml', amount: 30 },
      { ingredientId: 'heavy-cream', unitId: 'ml', amount: 30 },
    ],
    tagIds: ['vodka'],
    image: {
      url: '/img/cocktails/white-russian.jpg',
      card: {},
      page: {},
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Black Russian',
    description: '',
    recipe: [
      { ingredientId: 'coffee-liqueur', unitId: 'ml', amount: 30 },
      { ingredientId: 'vodka', unitId: 'ml', amount: 30 },
    ],
    tagIds: ['vodka'],
    image: {
      url: '/img/cocktails/black-russian.jpg',
      card: {},
      page: {},
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Coffee Martini',
    description: '',
    recipe: [
      { ingredientId: 'vodka', unitId: 'ml', amount: 50 },
      { ingredientId: 'coffee-liqueur', unitId: 'ml', amount: 30 },
      { ingredientId: 'coffee', unitId: 'ml', amount: 30 },
    ],
    tagIds: ['vodka'],
    image: {
      url: '/img/cocktails/coffee-martini.jpg',
      card: { offY: -15 },
      page: { offY: -15 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Toasted Almond',
    description: '',
    recipe: [
      { ingredientId: 'vodka', unitId: 'ml', amount: 30, optional: true },
      { ingredientId: 'amaretto', unitId: 'ml', amount: 30 },
      { ingredientId: 'coffee-liqueur', unitId: 'ml', amount: 30 },
      { ingredientId: 'heavy-cream', unitId: 'ml', amount: 10 },
    ],
    tagIds: ['vodka'],
    image: {
      url: '/img/cocktails/roasted-toasted-almond.jpg',
      card: { offX: -90 },
      page: { offX: 0 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Blue Hawaii',
    description: '',
    recipe: [
      { ingredientId: 'white-rum', unitId: 'ml', amount: 30 },
      { ingredientId: 'vodka', unitId: 'ml', amount: 30 },
      { ingredientId: 'blue-curacao', unitId: 'ml', amount: 30 },
      { ingredientId: 'simple-syrup', unitId: 'ml', amount: 15 },
      { ingredientId: 'lemon-juice', unitId: 'ml', amount: 15 },
      { ingredientId: 'pinapple-juice', unitId: 'ml', amount: 90 },
    ],
    tagIds: ['rum'],
    image: {
      url: '/img/cocktails/blue-hawaii.jpg',
      card: {},
      page: {},
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Blue Hawaiian',
    description: '',
    recipe: [
      { ingredientId: 'white-rum', unitId: 'ml', amount: 40 },
      { ingredientId: 'malibu', unitId: 'ml', amount: 40 },
      { ingredientId: 'blue-curacao', unitId: 'ml', amount: 40 },
      { ingredientId: 'pinapple-juice', unitId: 'ml', amount: 40 },
    ],
    tagIds: ['rum'],
    image: {
      url: '/img/cocktails/blue-hawaiian.jpg',
      card: { offX: -110 },
      page: { offX: -110 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Blue Lagoon',
    description: '',
    recipe: [
      { ingredientId: 'vodka', unitId: 'ml', amount: 50 },
      { ingredientId: 'blue-curacao', unitId: 'ml', amount: 30 },
      { ingredientId: 'simple-syrup', unitId: 'ml', amount: 15 },
      { ingredientId: 'lemon-juice', unitId: 'ml', amount: 15 },
      { ingredientId: 'soda', unitId: 'ml', amount: 100 },
    ],
    tagIds: ['vodka'],
    image: {
      url: '/img/cocktails/blue-lagoon.jpg',
      card: {},
      page: {},
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Blue Ocean',
    description: '',
    recipe: [
      { ingredientId: 'vodka', unitId: 'ml', amount: 30 },
      { ingredientId: 'blue-curacao', unitId: 'ml', amount: 15 },
      { ingredientId: 'simple-syrup', unitId: 'ml', amount: 15 },
      { ingredientId: 'grapefruit-juice', unitId: 'ml', amount: 30 },
    ],
    tagIds: ['vodka'],
    image: {
      url: '/img/cocktails/blue-ocean.png',
      card: {},
      page: {},
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Blue Kamikaze',
    description: '',
    recipe: [
      { ingredientId: 'vodka', unitId: 'ml', amount: 50 },
      { ingredientId: 'blue-curacao', unitId: 'ml', amount: 50 },
      { ingredientId: 'lime-juice', unitId: 'ml', amount: 50 },
    ],
    tagIds: ['vodka'],
    image: {
      url: '/img/cocktails/blue-kamikaze.jpg',
      card: { offX: -90 },
      page: { offX: -90 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Godfather',
    description: '',
    recipe: [
      { ingredientId: 'whisky', unitId: 'ml', amount: 60 },
      { ingredientId: 'amaretto', unitId: 'ml', amount: 30 },
    ],
    tagIds: ['whisky'],
    image: {
      url: '/img/cocktails/godfather.jpg',
      card: {},
      page: {},
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Godmother',
    description: '',
    recipe: [
      { ingredientId: 'vodka', unitId: 'ml', amount: 45 },
      { ingredientId: 'amaretto', unitId: 'ml', amount: 45 },
    ],
    tagIds: ['vodka'],
    image: {
      url: '/img/cocktails/godmother.jpg',
      card: { offX: -35 },
      page: { offX: -35 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Negroni',
    description: '',
    recipe: [
      { ingredientId: 'campari', unitId: 'ml', amount: 30 },
      { ingredientId: 'gin', unitId: 'ml', amount: 30 },
      { ingredientId: 'red-vermouth', unitId: 'ml', amount: 30 },
      { ingredientId: 'orange-twist', unitId: 'piece', amount: 1, garnish: true },
    ],
    tagIds: ['gin'],
    image: {
      url: '/img/cocktails/negroni.jpg',
      card: {},
      page: {},
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Trinidad Sour',
    description: '',
    recipe: [
      { ingredientId: 'angostura-bitters', unitId: 'ml', amount: 30 },
      { ingredientId: 'orgeat', unitId: 'ml', amount: 30 },
      { ingredientId: 'whisky', unitId: 'ml', amount: 15 },
      { ingredientId: 'lemon-juice', unitId: 'ml', amount: 20 },
      { ingredientId: 'mint', unitId: 'leaf', amount: 3, garnish: true },
    ],
    tagIds: ['other'],
    image: {
      url: '/img/cocktails/trinidad-sour.jpg',
      card: {},
      page: {},
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Kevert soda (microwaved)',
    description: '',
    recipe: [
      { ingredientId: 'kevert', unitId: 'ml', amount: 50 },
      { ingredientId: 'soda', unitId: 'ml', amount: 50 },
    ],
    tagIds: ['other'],
    image: {
      url: '/img/cocktails/kevert-soda.jpeg',
      card: { offX: -40 },
      page: { offY: -60 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Piña colada',
    description: '',
    recipe: [
      { ingredientId: 'white-rum', unitId: 'ml', amount: 60 },
      { ingredientId: 'pinapple-juice', unitId: 'ml', amount: 60 },
      { ingredientId: 'creme-of-coconut', unitId: 'ml', amount: 30 },
    ],
    tagIds: ['rum'],
    image: {
      url: '/img/cocktails/pina-colada.jpg',
      card: {},
      page: {},
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Mai Tai',
    description: '',
    recipe: [
      { ingredientId: 'dark-rum', unitId: 'ml', amount: 60 },
      { ingredientId: 'lime-juice', unitId: 'ml', amount: 30 },
      { ingredientId: 'orgeat', unitId: 'ml', amount: 20 },
      { ingredientId: 'triple-sec', unitId: 'ml', amount: 15 },
      { ingredientId: 'simple-syrup', unitId: 'ml', amount: 10 },
      { ingredientId: 'mint', unitId: 'leaf', amount: 2, garnish: true },
    ],
    tagIds: ['rum'],
    image: {
      url: '/img/cocktails/mai-tai.jpg',
      card: {},
      page: {},
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Tequila Sunrise',
    description: '',
    recipe: [
      { ingredientId: 'tequila', unitId: 'ml', amount: 60 },
      { ingredientId: 'grenadine', unitId: 'ml', amount: 15 },
      { ingredientId: 'orange-juice', unitId: 'ml', amount: 120 },
    ],
    tagIds: ['tequila'],
    image: {
      url: '/img/cocktails/tequila-sunrise.jpg',
      card: { offX: -25 },
      page: { offX: -25 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Vodka Paloma',
    description: '',
    recipe: [
      { ingredientId: 'vodka', unitId: 'ml', amount: 45 },
      { ingredientId: 'grapefruit-juice', unitId: 'ml', amount: 100 },
      { ingredientId: 'lime-juice', unitId: 'ml', amount: 20 },
      { ingredientId: 'simple-syrup', unitId: 'ml', amount: 20 },
      { ingredientId: 'soda', unitId: 'ml', amount: 100 },
    ],
    tagIds: ['vodka'],
    image: {
      url: '/img/cocktails/paloma.jpg',
      card: { offX: -20 },
      page: { offX: -20 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Daiquiri',
    description: '',
    recipe: [
      { ingredientId: 'white-rum', unitId: 'ml', amount: 60 },
      { ingredientId: 'lemon-juice', unitId: 'ml', amount: 30 },
      { ingredientId: 'simple-syrup', unitId: 'ml', amount: 20 },
    ],
    tagIds: ['rum'],
    image: {
      url: '/img/cocktails/daiquiri.jpg',
      card: { offX: -110 },
      page: { offX: -110 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Dark Daiquiri',
    description: '',
    recipe: [
      { ingredientId: 'dark-rum', unitId: 'ml', amount: 60 },
      { ingredientId: 'lemon-juice', unitId: 'ml', amount: 30 },
      { ingredientId: 'demerara-syrup', unitId: 'ml', amount: 20 },
    ],
    tagIds: ['rum'],
    image: {
      url: '/img/cocktails/dark-daiquiri.png',
      card: { offX: -70, offY: -15, scale: 140 },
      page: { offX: -110 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'White Lady',
    description: '',
    recipe: [
      { ingredientId: 'gin', unitId: 'ml', amount: 45 },
      { ingredientId: 'triple-sec', unitId: 'ml', amount: 25 },
      { ingredientId: 'lemon-juice', unitId: 'ml', amount: 20 },
      { ingredientId: 'simple-syrup', unitId: 'ml', amount: 10 },
      { ingredientId: 'egg-white', unitId: 'ml', amount: 30, optional: true },
      { ingredientId: 'sugar', unitId: 'rim', amount: 1, garnish: true },
    ],
    tagIds: ['gin'],
    image: {
      url: '/img/cocktails/white-lady.jpg',
      card: {},
      page: {},
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Ivy Gimlet',
    description: '',
    recipe: [
      { ingredientId: 'vodka', unitId: 'ml', amount: 60 },
      { ingredientId: 'lime-juice', unitId: 'ml', amount: 30 },
      { ingredientId: 'simple-syrup', unitId: 'ml', amount: 20 },
      { ingredientId: 'mint', unitId: 'leaf', amount: 4 },
    ],
    tagIds: ['vodka'],
    image: {
      url: '/img/cocktails/ivy-gimlet.jpg',
      card: { offX: -30, offY: -65, scale: 125 },
      page: { offX: -30, offY: -65, scale: 125 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Southside',
    description: '',
    recipe: [
      { ingredientId: 'gin', unitId: 'ml', amount: 60 },
      { ingredientId: 'lime-juice', unitId: 'ml', amount: 20 },
      { ingredientId: 'simple-syrup', unitId: 'ml', amount: 20 },
      { ingredientId: 'mint', unitId: 'leaf', amount: 4 },
    ],
    tagIds: ['gin'],
    image: {
      url: '/img/cocktails/southside.jpg',
      card: { offX: -17, offY: -7, scale: 150 },
      page: { offX: -17, offY: -7, scale: 150 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Eastside',
    description: '',
    recipe: [
      { ingredientId: 'gin', unitId: 'ml', amount: 60 },
      { ingredientId: 'lime-juice', unitId: 'ml', amount: 20 },
      { ingredientId: 'simple-syrup', unitId: 'ml', amount: 20 },
      { ingredientId: 'cucumber', unitId: 'slice', amount: 3 },
      { ingredientId: 'mint', unitId: 'leaf', amount: 4 },
    ],
    tagIds: ['gin'],
    image: {
      url: '/img/cocktails/eastside.jpg',
      card: { offX: -10, offY: -15, scale: 150 },
      page: { offX: -10, offY: -15, scale: 150 },
    },
  },
  {
    id: faker.string.uuid(),
    name: "The Bee's Knees",
    description: '',
    recipe: [
      { ingredientId: 'gin', unitId: 'ml', amount: 60 },
      { ingredientId: 'honey-syrup', unitId: 'ml', amount: 30 },
      { ingredientId: 'lemon-juice', unitId: 'ml', amount: 30 },
    ],
    tagIds: ['gin'],
    image: {
      url: '/img/cocktails/bees-knees.jpg',
      card: { offX: -20, offY: -70, scale: 150 },
      page: { offX: -20, offY: -70, scale: 150 },
    },
  },
  {
    id: faker.string.uuid(),
    name: "Dark'n'Stormy",
    description: '',
    recipe: [
      { ingredientId: 'ginger-beer', unitId: 'ml', amount: 100 },
      { ingredientId: 'dark-rum', unitId: 'ml', amount: 50 },
      { ingredientId: 'demerara-syrup', unitId: 'ml', amount: 20 },
      { ingredientId: 'lime-juice', unitId: 'ml', amount: 20 },
    ],
    tagIds: ['rum'],
    image: {
      url: '/img/cocktails/dark-n-stormy.jpg',
      card: { offX: -10 },
      page: { offX: -10 },
    },
  },
  {
    id: faker.string.uuid(),
    name: "Hades' Ambrosia",
    description: '',
    recipe: [
      { ingredientId: 'dark-rum', unitId: 'ml', amount: 60 },
      { ingredientId: 'honey-syrup', unitId: 'ml', amount: 15 },
      { ingredientId: 'elderflower-liqueur', unitId: 'bsp', amount: 1 },
      { ingredientId: 'benedictine', unitId: 'bsp', amount: 2 },
      { ingredientId: 'lemon-juice', unitId: 'bsp', amount: 1 },
    ],
    tagIds: ['rum'],
    image: {
      url: '/img/cocktails/ambrosia.jpg',
      card: { offX: -20, offY: -40, scale: 130 },
      page: { offX: -20, offY: -40, scale: 130 },
    },
  },
  {
    id: faker.string.uuid(),
    name: "Dune's Spice Coffee",
    description: '',
    recipe: [
      { ingredientId: 'coffee', unitId: 'ml', amount: 90 },
      { ingredientId: 'coffee-liqueur', unitId: 'ml', amount: 30 },
      { ingredientId: 'rye-whisky', unitId: 'ml', amount: 30 },
      { ingredientId: 'the-spice-syrup', unitId: 'ml', amount: 30 },
      { ingredientId: 'whipped-cream', unitId: 'ml', amount: 30 },
    ],
    tagIds: ['whisky'],
    image: {
      url: '/img/cocktails/dune-spice-coffee.png',
      card: { offX: -130 },
      page: { offX: -130 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Margarita',
    description: '',
    recipe: [
      { ingredientId: 'tequila', unitId: 'ml', amount: 60 },
      { ingredientId: 'lime-juice', unitId: 'ml', amount: 30 },
      { ingredientId: 'triple-sec', unitId: 'ml', amount: 30 },
      { ingredientId: 'salt', unitId: 'rim', amount: 0.5, garnish: true },
    ],
    tagIds: ['tequila'],
    image: {
      url: '/img/cocktails/margarita.jpg',
      card: { offX: -20 },
      page: { offX: -20 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Martini',
    description: '',
    recipe: [
      { ingredientId: 'gin', unitId: 'ml', amount: 60 },
      { ingredientId: 'dry-vermouth', unitId: 'ml', amount: 30 },
      { ingredientId: 'orange-bitters', unitId: 'dash', amount: 2 },
    ],
    tagIds: ['gin'],
    image: {
      url: '/img/cocktails/martini.jpg',
      card: { offX: -40, offY: 0 },
      page: { offX: -40, offY: 0 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Sidecar',
    description: '',
    recipe: [
      { ingredientId: 'brandy', unitId: 'ml', amount: 50 },
      { ingredientId: 'cointreau', unitId: 'ml', amount: 30 },
      { ingredientId: 'lemon-juice', unitId: 'ml', amount: 15 },
      { ingredientId: 'sugar', unitId: 'rim', amount: 1, garnish: true },
      { ingredientId: 'lemon-twist', unitId: 'piece', amount: 1, garnish: true },
    ],
    tagIds: ['brandy'],
    image: {
      url: '/img/cocktails/sidecar.jpg',
      card: { offX: -10 },
      page: { offX: -10 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Between the Sheets',
    description: '',
    recipe: [
      { ingredientId: 'brandy', unitId: 'ml', amount: 20 },
      { ingredientId: 'white-rum', unitId: 'ml', amount: 20 },
      { ingredientId: 'triple-sec', unitId: 'ml', amount: 20 },
      { ingredientId: 'lemon-juice', unitId: 'ml', amount: 10 },
    ],
    tagIds: ['brandy'],
    image: {
      url: '/img/cocktails/between-the-sheets.jpg',
      card: { offX: -10 },
      page: { offX: -10 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Champagne Cocktail',
    description: '',
    recipe: [
      { ingredientId: 'champagne', unitId: 'ml', amount: 200 },
      { ingredientId: 'brandy', unitId: 'ml', amount: 40, optional: true },
      { ingredientId: 'angostura-bitters', unitId: 'dash', amount: 6 },
      { ingredientId: 'sugar', unitId: 'cube', amount: 1 },
    ],
    tagIds: ['other'],
    image: {
      url: '/img/cocktails/champagne-cocktail.jpg',
      card: { offX: -70 },
      page: { offX: 0 },
    },
  },
  {
    id: faker.string.uuid(),
    name: 'Black Velvet',
    description: '',
    recipe: [
      { ingredientId: 'champagne', unitId: 'ml', amount: 100 },
      { ingredientId: 'guinness', unitId: 'ml', amount: 100 },
    ],
    tagIds: ['other'],
    image: {
      url: '/img/cocktails/black-velvet.jpg',
      card: { offX: -90 },
      page: { offX: 0 },
    },
  },
] satisfies MockCocktail[];

export const allTags: Tag[] = [...ingredientTags, ...cocktailTags];
