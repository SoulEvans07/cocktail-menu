import { type MouseEvent } from 'react';
import { QrCode } from 'lucide-react';
import colors from 'tailwindcss/colors';

import type { StateSetter } from '~/types/common';
import { cn } from '~/utils/cn';
import { cocktailGroups } from '~/model/data/populated';
import { Dialog, DialogContent, DialogTrigger } from '~/components/layout/dialog';

type CollectionSidebarProps = {
  selected: string;
  setSelected: StateSetter<string | 'all'>;
  disabled?: boolean;
};
export function CollectionSidebar(props: CollectionSidebarProps) {
  const { selected, setSelected, disabled } = props;

  return (
    <div className="relative flex w-12 flex-shrink-0 flex-col items-center bg-indigo-400 py-2">
      <div
        key="all"
        className={cn(
          'relative z-10 flex w-10 rotate-180 items-center justify-center self-end px-2 py-6 vertical-writing-lr orientation-sideways-left',
          cn({
            'z-0 rounded-br-2xl rounded-tr-2xl bg-indigo-100 text-indigo-800': 'all' === selected,
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
      {cocktailGroups.map(category => (
        <div
          key={category.id}
          className={cn(
            'relative z-10 flex w-10 rotate-180 items-center justify-center self-end px-2 py-6 vertical-writing-lr orientation-sideways-left',
            cn({
              'z-0 rounded-br-2xl rounded-tr-2xl bg-indigo-100 text-indigo-800': category.id === selected,
              [afterCorner]: category.id === selected,
              [beforeCorner]: category.id === selected,
            })
          )}
          onClick={(e: MouseEvent) => {
            if (!disabled) {
              e.stopPropagation();
              setSelected(category.id);
            }
          }}
        >
          {category.label}
        </div>
      ))}
      <Dialog>
        <DialogTrigger className="mt-auto flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200 active:bg-indigo-300">
          <QrCode width={20} />
        </DialogTrigger>
        <DialogContent>
          <img src="/qrcode.png" alt="QR code of https://dionysus.club" />
        </DialogContent>
      </Dialog>
    </div>
  );
}

const afterCorner = `after:absolute after:-top-8 after:left-0 after:h-8 after:w-4 after:rounded-bl-2xl after:bg-indigo-400 after:shadow-corner-left after:content-[""]'`;
const beforeCorner = `before:absolute before:-bottom-8 before:left-0 before:h-8 before:w-4 before:rounded-tl-2xl before:bg-indigo-400 before:shadow-corner-right before:content-[""]`;
