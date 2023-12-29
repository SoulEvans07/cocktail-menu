import { faker } from '@faker-js/faker';
import type { CollectionCategory } from './types';

export const categories: CollectionCategory[] = [
  {
    id: faker.string.uuid(),
    label: 'Whisky',
  },
  {
    id: faker.string.uuid(),
    label: 'Gin',
  },
  {
    id: faker.string.uuid(),
    label: 'Rum',
  },
  {
    id: faker.string.uuid(),
    label: 'Vodka',
  },
];
