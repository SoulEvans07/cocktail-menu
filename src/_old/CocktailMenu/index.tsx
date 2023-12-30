import { CSSProperties, ReactElement } from 'react';
import classNames from 'classnames';

interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  opt?: boolean;
  gar?: boolean; // garnish
}

interface Cocktail {
  name: string;
  imgUrl: string;
  offX?: number;
  offY?: number;
  zoom?: number;
  recipe: Ingredient[];
  disabled?: boolean;
  unavailable?: boolean;
}

const drinks: Cocktail[] = [
  {
    name: 'Old Fashioned',
    recipe: [
      { name: 'Bourbon whisky', amount: 60, unit: 'ml' },
      { name: 'Demerara syrup', amount: 10, unit: 'ml' },
      { name: 'Angostura bitters', amount: 2, unit: 'dash' },
      { name: 'Orange twist', amount: 1, unit: 'piece', gar: true },
    ],
    imgUrl: '/img/old-fashioned.jpg',
  },
  {
    name: 'B&B',
    recipe: [
      { name: 'Brandy', amount: 50, unit: 'ml' },
      { name: 'Benedictine', amount: 50, unit: 'ml' },
    ],
    imgUrl: '/img/bnb.jpg',
    offX: -20,
  },
  {
    name: 'Manhattan',
    recipe: [
      { name: 'Rye whisky', amount: 60, unit: 'ml' },
      { name: 'Red vermouth', amount: 30, unit: 'ml' },
      { name: 'Angostura bitters', amount: 2, unit: 'dash' },
    ],
    imgUrl: '/img/manhattan.jpg',
    offX: 0,
    offY: -20,
  },
  {
    name: 'Aviation',
    unavailable: true,
    recipe: [
      { name: 'Gin', amount: 60, unit: 'ml' },
      { name: 'Lemon juice', amount: 15, unit: 'ml' },
      { name: 'Violet syrup', amount: 15, unit: 'ml' },
      { name: 'Maraschino liqueur', amount: 7.5, unit: 'ml' },
    ],
    imgUrl: '/img/aviation.jpg',
    offX: -55,
  },
  {
    name: 'Earl Grey MarTEAni',
    recipe: [
      { name: 'Tea Infused Gin', amount: 45, unit: 'ml' },
      { name: 'Demerara syrup', amount: 30, unit: 'ml' },
      { name: 'Lemon juice', amount: 20, unit: 'ml' },
      { name: 'Egg white', amount: 30, unit: 'ml' },
    ],
    imgUrl: '/img/earl-grey-marteani.jpg',
    offX: -26,
    offY: -85,
    zoom: 176,
  },
  {
    name: 'Whisky Sour',
    recipe: [
      { name: 'Whisky', amount: 50, unit: 'ml' },
      { name: 'Lemon juice', amount: 30, unit: 'ml' },
      { name: 'Sugar syrup', amount: 20, unit: 'ml' },
      { name: 'Egg white', amount: 30, unit: 'ml' },
    ],
    imgUrl: '/img/whisky-sour.jpg',
    offX: -20,
  },
  {
    name: 'White Russian',
    recipe: [
      { name: 'Coffee liqueur', amount: 30, unit: 'ml' },
      { name: 'Vodka', amount: 30, unit: 'ml' },
      { name: 'Heavy cream', amount: 30, unit: 'ml' },
    ],
    imgUrl: '/img/white-russian.jpg',
  },
  {
    name: 'Black Russian',
    recipe: [
      { name: 'Coffee liqueur', amount: 30, unit: 'ml' },
      { name: 'Vodka', amount: 30, unit: 'ml' },
    ],
    imgUrl: '/img/black-russian.jpg',
  },
  {
    name: 'Coffee Martini',
    recipe: [
      { name: 'Vodka', amount: 50, unit: 'ml' },
      { name: 'Coffee liqueur', amount: 30, unit: 'ml' },
      { name: 'Coffee', amount: 30, unit: 'ml' },
    ],
    imgUrl: '/img/coffee-martini.jpg',
    offY: -15,
  },
  {
    name: 'Toasted Almond',
    recipe: [
      { name: 'Vodka', amount: 30, unit: 'ml', opt: true },
      { name: 'Amaretto (almond liqueur)', amount: 30, unit: 'ml' },
      { name: 'Coffee liqueur', amount: 30, unit: 'ml' },
      { name: 'Heavy cream', amount: 10, unit: 'ml' },
    ],
    imgUrl: '/img/roasted-toasted-almond.jpg',
    offX: -90,
  },
  {
    name: 'Blue Hawaii',
    recipe: [
      { name: 'White rum', amount: 30, unit: 'ml' },
      { name: 'Vodka', amount: 30, unit: 'ml' },
      { name: 'Blue curacao', amount: 30, unit: 'ml' },
      { name: 'Sugar syrup', amount: 15, unit: 'ml' },
      { name: 'Lemon juice', amount: 15, unit: 'ml' },
      { name: 'Pinapple juice', amount: 90, unit: 'ml' },
    ],
    imgUrl: '/img/blue-hawaii.jpg',
  },
  {
    name: 'Blue Hawaiian',
    recipe: [
      { name: 'White rum', amount: 40, unit: 'ml' },
      { name: 'Malibu', amount: 40, unit: 'ml' },
      { name: 'Blue curacao', amount: 40, unit: 'ml' },
      { name: 'Pinapple juice', amount: 40, unit: 'ml' },
    ],
    imgUrl: '/img/blue-hawaiian.jpg',
    offX: -110,
  },
  {
    name: 'Blue Lagoon',
    recipe: [
      { name: 'Vodka', amount: 50, unit: 'ml' },
      { name: 'Blue curacao', amount: 30, unit: 'ml' },
      { name: 'Sugar syrup', amount: 15, unit: 'ml' },
      { name: 'Lemon juice', amount: 15, unit: 'ml' },
      { name: 'Soda', amount: 100, unit: 'ml' },
    ],
    imgUrl: '/img/blue-lagoon.jpg',
  },
  {
    name: 'Blue Ocean',
    recipe: [
      { name: 'Vodka', amount: 30, unit: 'ml' },
      { name: 'Blue curacao', amount: 15, unit: 'ml' },
      { name: 'Sugar syrup', amount: 15, unit: 'ml' },
      { name: 'Grapefruit juice', amount: 30, unit: 'ml' },
    ],
    imgUrl: '/img/blue-ocean.png',
  },
  {
    name: 'Godfather',
    recipe: [
      { name: 'Whisky', amount: 60, unit: 'ml' },
      { name: 'Amaretto (almond liqueur)', amount: 30, unit: 'ml' },
    ],
    imgUrl: '/img/godfather.jpg',
  },
  {
    name: 'Godmother',
    recipe: [
      { name: 'Vodka', amount: 45, unit: 'ml' },
      { name: 'Amaretto (almond liqueur)', amount: 45, unit: 'ml' },
    ],
    imgUrl: '/img/godmother.jpg',
    offX: -35,
  },
  {
    name: 'Negroni',
    recipe: [
      { name: 'Campari', amount: 30, unit: 'ml' },
      { name: 'Gin', amount: 30, unit: 'ml' },
      { name: 'Red vermouth', amount: 30, unit: 'ml' },
      { name: 'Orange twist', amount: 1, unit: 'piece', gar: true },
    ],
    imgUrl: '/img/negroni.jpg',
  },
  {
    name: 'Trinidad Sour',
    recipe: [
      { name: 'Angostura bitters', amount: 30, unit: 'ml' },
      { name: 'Orgeat', amount: 30, unit: 'ml' },
      // { name: 'Rye whisky', amount: 15, unit: 'ml' },
      { name: 'Whisky', amount: 15, unit: 'ml' },
      { name: 'Lemon juice', amount: 20, unit: 'ml' },
      { name: 'Mint', amount: 3, unit: 'leaf', gar: true },
    ],
    imgUrl: '/img/trinidad-sour.jpg',
  },
  {
    name: 'Piña colada',
    recipe: [
      { name: 'White rum', amount: 60, unit: 'ml' },
      { name: 'Pinapple juice', amount: 60, unit: 'ml' },
      { name: 'Creme of Coconut', amount: 30, unit: 'ml' },
    ],
    imgUrl: '/img/pina-colada.jpg',
  },
  {
    name: 'Mai Tai',
    recipe: [
      { name: 'Dark rum', amount: 60, unit: 'ml' },
      { name: 'Lime juice', amount: 30, unit: 'ml' },
      { name: 'Orgeat', amount: 20, unit: 'ml' },
      { name: 'Triple Sec', amount: 15, unit: 'ml' },
      { name: 'Simple syrup', amount: 10, unit: 'ml' },
      { name: 'Mint', amount: 2, unit: 'leaf', gar: true },
    ],
    imgUrl: '/img/mai-tai.jpg',
  },
  {
    name: 'Tequila Sunrise',
    recipe: [
      { name: 'Tequila', amount: 60, unit: 'ml' },
      { name: 'Grenadine', amount: 15, unit: 'ml' },
      { name: 'Orange juice', amount: 120, unit: 'ml' },
    ],
    imgUrl: '/img/tequila-sunrise.jpg',
    offX: -25,
    disabled: true,
  },
  {
    name: 'Vodka Paloma',
    recipe: [
      { name: 'Vodka', amount: 45, unit: 'ml' },
      { name: 'Grapefruit juice', amount: 100, unit: 'ml' },
      { name: 'Lime juice', amount: 20, unit: 'ml' },
      { name: 'Sugar syrup', amount: 20, unit: 'ml' },
      { name: 'Soda', amount: 100, unit: 'ml' },
    ],
    imgUrl: '/img/paloma.jpg',
    offX: -20,
  },
  {
    name: 'Daiquiri',
    recipe: [
      { name: 'White rum', amount: 60, unit: 'ml' },
      { name: 'Lemon juice', amount: 30, unit: 'ml' },
      { name: 'Sugar syrup', amount: 20, unit: 'ml' },
    ],
    imgUrl: '/img/daiquiri.jpg',
    offX: -110,
  },
  {
    name: 'White Lady',
    recipe: [
      { name: 'Gin', amount: 45, unit: 'ml' },
      { name: 'Triple Sec', amount: 25, unit: 'ml' },
      { name: 'Lemon juice', amount: 20, unit: 'ml' },
      { name: 'Sugar syrup', amount: 10, unit: 'ml' },
      { name: 'Egg white', amount: 30, unit: 'ml', opt: true },
    ],
    imgUrl: '/img/white-lady.jpg',
  },
  {
    name: 'Ivy Gimlet',
    recipe: [
      { name: 'Vodka', amount: 60, unit: 'ml' },
      { name: 'Lime juice', amount: 30, unit: 'ml' },
      { name: 'Simple syrup', amount: 20, unit: 'ml' },
      { name: 'Mint', amount: 4, unit: 'leaf' },
    ],
    imgUrl: '/img/ivy-gimlet.jpg',
    offX: -30,
    offY: -65,
    zoom: 125,
  },
  {
    name: 'Southside',
    recipe: [
      { name: 'Gin', amount: 60, unit: 'ml' },
      { name: 'Lime juice', amount: 20, unit: 'ml' },
      { name: 'Simple syrup', amount: 20, unit: 'ml' },
      { name: 'Mint', amount: 4, unit: 'leaf' },
    ],
    imgUrl: '/img/southside.jpg',
    offX: -17,
    offY: -7,
    zoom: 150,
  },
  {
    name: 'Eastside',
    recipe: [
      { name: 'Gin', amount: 60, unit: 'ml' },
      { name: 'Lime juice', amount: 20, unit: 'ml' },
      { name: 'Simple syrup', amount: 20, unit: 'ml' },
      { name: 'Cucumber', amount: 3, unit: 'slice' },
      { name: 'Mint', amount: 4, unit: 'leaf' },
    ],
    imgUrl: '/img/eastside.jpg',
    offX: -10,
    offY: -15,
    zoom: 150,
  },
  {
    name: "The Bee's Knees",
    recipe: [
      { name: 'Gin', amount: 60, unit: 'ml' },
      { name: 'Honey syrup', amount: 30, unit: 'ml' },
      { name: 'Lemon juice', amount: 30, unit: 'ml' },
    ],
    imgUrl: '/img/bees-knees.jpg',
    zoom: 150,
    offX: -20,
    offY: -70,
    disabled: true,
  },
  {
    name: "Dark'n'Stormy",
    recipe: [
      { name: 'Ginger beer', amount: 100, unit: 'ml' },
      { name: 'Dark rum', amount: 50, unit: 'ml' },
      { name: 'Demerara syrup', amount: 20, unit: 'ml' },
      { name: 'Lime juice', amount: 20, unit: 'ml' },
    ],
    imgUrl: '/img/dark-n-stormy.jpg',
    offX: -10,
  },
  {
    name: "Hades' Ambrosia",
    recipe: [
      { name: 'Dark rum', amount: 60, unit: 'ml' },
      { name: 'Honey syrup', amount: 15, unit: 'ml' },
      { name: 'Elderflower liqueur', amount: 1, unit: 'bsp' },
      { name: 'Benedictine', amount: 2, unit: 'bsp' },
      { name: 'Lemon juice', amount: 1, unit: 'bsp' },
    ],
    imgUrl: '/img/ambrosia.jpg',
    zoom: 130,
    offY: -40,
    offX: -20,
  },
  {
    name: "Dune's Spice Coffee",
    recipe: [
      { name: 'Coffee', amount: 90, unit: 'ml' },
      { name: 'Coffee liqueur', amount: 30, unit: 'ml' },
      { name: 'Rye whisky', amount: 30, unit: 'ml' },
      { name: 'The Spice syrup', amount: 30, unit: 'ml' },
      { name: 'Whipped cream', amount: 30, unit: 'ml' },
    ],
    imgUrl: '/img/dune-spice-coffee.png',
    offX: -130,
    disabled: true,
  },
  {
    name: 'Margarita',
    recipe: [
      { name: 'Tequila', amount: 60, unit: 'ml' },
      { name: 'Lime juice', amount: 30, unit: 'ml' },
      { name: 'Triple Sec', amount: 30, unit: 'ml' },
      { name: 'Salt', amount: 0.5, unit: 'glass rim', gar: true },
    ],
    imgUrl: '/img/margarita.jpg',
    offX: -20,
    unavailable: true,
  },
  {
    name: 'Martini',
    recipe: [
      { name: 'Gin', amount: 60, unit: 'ml' },
      { name: 'Dry vermouth', amount: 30, unit: 'ml' },
      { name: 'Orange bitters', amount: 2, unit: 'dash' },
    ],
    imgUrl: '/img/martini.jpg',
    offX: -40,
    offY: 0,
  },
  {
    name: 'Sidecar',
    recipe: [
      { name: 'Brandy', amount: 50, unit: 'ml' },
      { name: 'Cointreau', amount: 30, unit: 'ml' },
      { name: 'Lemon juice', amount: 15, unit: 'ml' },
      { name: 'Sugar rim', amount: 1, unit: 'piece', gar: true },
      { name: 'Lemon twist', amount: 1, unit: 'piece', gar: true },
    ],
    imgUrl: '/img/sidecar.jpg',
    offX: -10,
  },
  {
    name: 'Between the Sheets',
    recipe: [
      { name: 'Brandy', amount: 20, unit: 'ml' },
      { name: 'White Rum', amount: 20, unit: 'ml' },
      { name: 'Triple Sec', amount: 20, unit: 'ml' },
      { name: 'Lemon juice', amount: 10, unit: 'ml' },
    ],
    imgUrl: '/img/between-the-sheets.jpg',
    offX: -10,
  },
  {
    name: 'Blue Kamikaze (shot)',
    recipe: [
      { name: 'Vodka', amount: 50, unit: 'ml' },
      { name: 'Blue curacao', amount: 50, unit: 'ml' },
      { name: 'Lime juice', amount: 50, unit: 'ml' },
    ],
    imgUrl: '/img/blue-kamikaze.jpg',
    offX: -90,
    disabled: true,
  },
].filter(drink => !drink.disabled);

type Spirit = 'gin' | 'rum' | 'whisky' | 'vodka' | 'tequila' | 'brandy' | 'cognac';
type SpiritColorMap = {
  [spirit in Spirit | 'other']: string;
};
const colorMap: SpiritColorMap = {
  whisky: '#d10b0a',
  brandy: '#ffa808',
  cognac: '#ffa808',
  rum: '#08c3f7',
  gin: '#85e8c2',
  tequila: '#ac82ed',
  vodka: '#ffd457',
  other: '#efefef',
};

const hasIngredient = (ingredients: Ingredient[], search: string): boolean => {
  return !!ingredients.find(item => item.name.toLowerCase().includes(search));
};

const getSpirit = (drink: Cocktail): Spirit | undefined => {
  return Object.keys(colorMap)
    .map(spirit => {
      if (hasIngredient(drink.recipe, spirit)) {
        return spirit as Spirit;
      }
      return undefined;
    })
    .filter(it => !!it)[0];
};

export default function CocktailMenu(): ReactElement {
  const renderIngredient = (ingredient: Ingredient, index: number) => {
    return (
      <div className="ingredient" key={ingredient.name}>
        <span className="name">
          {ingredient.name}
          <span className="modifier">
            {!!ingredient.opt && ' (optional)'}
            {!!ingredient.gar && ' (garnish)'}
          </span>
        </span>
        {!ingredient.gar && (
          <>
            <span className="amount">{ingredient.amount}</span>
            <span className="unit">{ingredient.unit}</span>
          </>
        )}
      </div>
    );
  };

  const renderCocktail = (drink: Cocktail, index: number) => {
    const imgStyle = {
      backgroundImage: `url(${drink.imgUrl})`,
      '--offsetX': `${drink?.offX || 0}px`,
      '--offsetY': `${drink?.offY || 0}px`,
      ...(!!drink.zoom ? { '--size': `${drink.zoom}%` } : {}),
    } as CSSProperties;

    const spirit = getSpirit(drink);
    const borderStyle = {
      borderColor: colorMap[spirit || 'other'],
    };

    return (
      <div className={classNames('cocktail', { unavailable: drink.unavailable })} key={drink.name} title={spirit}>
        <div className="recipe">
          <div className="title-block">
            <span className="title">{drink.name}</span>
            <span className="underline" style={borderStyle} />
          </div>
          <div className="ingredients">{drink.recipe.map(renderIngredient)}</div>
        </div>
        <div className="image" style={imgStyle} />
      </div>
    );
  };

  return <div className="cocktail-menu">{drinks.map(renderCocktail)}</div>;
}
