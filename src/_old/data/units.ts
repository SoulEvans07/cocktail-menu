import { Unit } from '../types/cocktails';

const unitList: Unit[] = [
  {
    id: 'ml',
    short: 'ml',
    name: 'milliliter',
    amountInMillis: 1,
  },
  {
    id: 'cl',
    short: 'cl',
    name: 'centiliter',
    amountInMillis: 10,
  },
  {
    id: 'dl',
    short: 'dl',
    name: 'deciliter',
    amountInMillis: 100,
  },
  {
    id: 'dash',
    short: 'dash',
    name: 'dash',
    amountInMillis: 2,
  },
  {
    id: 'leaf',
    short: 'leaf',
    name: 'leaf',
    amountInMillis: 0,
  },
  {
    id: 'bsp',
    short: 'bsp',
    name: 'barspoon',
    amountInMillis: 5,
  },
  {
    id: 'pcs',
    short: 'pcs',
    name: 'piece',
    amountInMillis: 0,
  },
  {
    id: 'dust',
    short: 'dust',
    name: 'grated',
    amountInMillis: 0,
  },
];

export const units = unitList.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {} as Record<string, Unit>);
