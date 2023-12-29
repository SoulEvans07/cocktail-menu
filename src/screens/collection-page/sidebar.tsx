import { type MouseEvent } from 'react';
import type { StateSetter } from '~/types/common';
import { cn } from '~/utils/cn';
import { type CocktailTagKey, cocktailTags } from '~/model/data/mvp';

type CollectionSidebarProps = {
  selected: CocktailTagKey | 'all';
  setSelected: StateSetter<CocktailTagKey | 'all'>;
  disabled?: boolean;
};
export function CollectionSidebar(props: CollectionSidebarProps) {
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
