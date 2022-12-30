import { faker } from '@faker-js/faker';
import { Ingredient } from '../types/cocktails';

export const ingredientList: Ingredient[] = [
  {
    id: faker.datatype.uuid(),
    name: 'Bourbon whisky',
    description: '',
    tags: ['spirit'],
  },
  {
    id: faker.datatype.uuid(),
    name: 'Irish whisky',
    description: '',
    tags: ['spirit'],
  },
  {
    id: faker.datatype.uuid(),
    name: 'Irish whisky',
    description: '',
    tags: ['spirit'],
  },
  {
    id: faker.datatype.uuid(),
    name: 'White rum',
    description: '',
    tags: ['spirit'],
  },
  {
    id: faker.datatype.uuid(),
    name: 'Dark rum',
    description: '',
    tags: ['spirit'],
  },
  {
    id: faker.datatype.uuid(),
    name: 'Demerara syrup',
    description: '',
    tags: ['syrup'],
  },
  {
    id: faker.datatype.uuid(),
    name: 'Angostura bitters',
    description: '',
    tags: ['bitter'],
  },
  {
    id: faker.datatype.uuid(),
    name: 'Orange twis',
    description: '',
    tags: ['garnish'],
  },
  {
    id: faker.datatype.uuid(),
    name: 'Lemon twis',
    description: '',
    tags: ['garnish'],
  },

  {
    id: faker.datatype.uuid(),
    name: 'Bourbon whisky',
    description: '',
    tags: [],
  },
  {
    id: faker.datatype.uuid(),
    name: 'Bourbon whisky',
    description: '',
    tags: [],
  },
];

export const ingredients = ingredientList.reduce(
  (acc, curr) => ({ ...acc, [curr.id]: curr }),
  {} as Record<string, Ingredient>
);
