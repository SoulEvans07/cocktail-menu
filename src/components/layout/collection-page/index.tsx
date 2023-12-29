'use client';

import { useState, type MouseEvent, useMemo } from 'react';
import { cn } from '~/utils/cn';
import type { StateSetter } from '~/types/common';
import { type CocktailTagKey, cocktails, cocktailTags } from '~/model/data/mvp';

type CollectionPageProps = {
  active: boolean;
};

export function CollectionPage(props: CollectionPageProps) {
  const { active } = props;

  const [category, setCategory] = useState<CocktailTagKey | 'all'>('all');
  const filteredCocktails = useMemo(
    () =>
      cocktails.filter(c => {
        if (category === 'all') return true;
        return c.tagKeys.includes(category);
      }),
    [cocktails, category]
  );

  return (
    <div
      className={cn(
        'mx-1 flex max-h-[calc(100vh-64px)] w-full flex-shrink-0 flex-row overflow-x-hidden bg-slate-200 opacity-50',
        { 'absolute inset-0 mx-0 max-h-screen opacity-100': active }
      )}
      style={{}}
    >
      <CollectionSidebar selected={category} setSelected={setCategory} disabled={!active} />
      <div className="grid flex-1 flex-shrink-0 auto-rows-min grid-cols-2 gap-2 overflow-x-auto p-2 text-slate-800 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {filteredCocktails.map(cocktail => (
          <div key={cocktail.id} className="relative aspect-[3/4]">
            <div
              className="aspect-[3/4] rounded-lg"
              style={{
                backgroundImage: `url(${cocktail.image.url})`,
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: `${cocktail.image?.offX ?? 0}px`,
                backgroundPositionY: `${cocktail.image?.offY ?? 0}px`,
                backgroundSize: cocktail.image?.scale ? `${cocktail.image?.scale}%` : 'cover',
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 rounded-bl-lg rounded-br-lg bg-gradient-to-b from-transparent to-[#00000080] px-3 pb-2 pt-6 font-medium text-white">
              {cocktail.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type CollectionSidebarProps = {
  selected: CocktailTagKey | 'all';
  setSelected: StateSetter<CocktailTagKey | 'all'>;
  disabled?: boolean;
};
function CollectionSidebar(props: CollectionSidebarProps) {
  const { selected, setSelected, disabled } = props;

  return (
    <div className="relative flex w-12 flex-shrink-0 flex-col bg-slate-400 py-2">
      <div
        key="all"
        className={cn(
          'relative z-10 flex w-10 rotate-180 items-center justify-center self-end px-2 py-6 vertical-writing-lr orientation-sideways-left',
          cn({
            'z-0 rounded-br-2xl rounded-tr-2xl bg-slate-200 text-slate-800': 'all' === selected,
            [afterCorner]: 'all' === selected,
            [beforeCorner]: 'all' === selected,
          })
        )}
        onClick={(e: MouseEvent) => {
          if (!disabled) {
            e.stopPropagation();
            setSelected('all');
          }
        }}
      >
        All
      </div>
      {cocktailTags.map(category => (
        <div
          key={category.key}
          className={cn(
            'relative z-10 flex w-10 rotate-180 items-center justify-center self-end px-2 py-6 vertical-writing-lr orientation-sideways-left',
            cn({
              'z-0 rounded-br-2xl rounded-tr-2xl bg-slate-200 text-slate-800': category.key === selected,
              [afterCorner]: category.key === selected,
              [beforeCorner]: category.key === selected,
            })
          )}
          onClick={(e: MouseEvent) => {
            if (!disabled) {
              e.stopPropagation();
              setSelected(category.key);
            }
          }}
        >
          {category.label}
        </div>
      ))}
    </div>
  );
}

const afterCorner = `after:absolute after:-top-8 after:left-0 after:h-8 after:w-4 after:rounded-bl-2xl after:bg-slate-400 after:shadow-[0_1rem_0_0_#e2e8f0] after:content-[""]'`;
const beforeCorner = `before:absolute before:-bottom-8 before:left-0 before:h-8 before:w-4 before:rounded-tl-2xl before:bg-slate-400 before:shadow-[0_-1rem_0_0_#e2e8f0] before:content-[""]`;
