import { useState, useMemo } from 'react';

import { type Cocktail } from '~/model/types/mvp';
import { type CocktailTagKey, cocktails } from '~/model/data/mvp';
import { cn } from '~/utils/cn';
import { useMediaQuery } from '~/utils/hooks/useMediaQuery';
import { Drawer, DrawerContent, DrawerTrigger } from '~/components/drawer';

import { CollectionSidebar } from './sidebar';
import { CocktailCard } from './card';
import { CocktailDetails } from './details';
import { Sheet, SheetContent, SheetTrigger } from '~/components/sheet';

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
        { 'absolute inset-0 mx-0 max-h-full opacity-100': active }
      )}
      style={{}}
    >
      <CollectionSidebar selected={category} setSelected={setCategory} disabled={!active} />
      <div className="grid flex-1 flex-shrink-0 auto-rows-min grid-cols-2 gap-2 overflow-x-auto p-2 text-slate-800 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {filteredCocktails.map(cocktail => (
          <CocktailItem key={cocktail.id} cocktail={cocktail} />
        ))}
      </div>
    </div>
  );
}

type CocktailItemProps = {
  cocktail: Cocktail;
};
export function CocktailItem(props: CocktailItemProps) {
  const { cocktail } = props;
  const isMobile = useMediaQuery('(max-width: 768px)');

  const { Root, Trigger, Content } = useMemo(() => {
    if (isMobile) return { Root: Drawer, Trigger: DrawerTrigger, Content: DrawerContent };
    return { Root: Sheet, Trigger: SheetTrigger, Content: SheetContent };
  }, [isMobile]);

  return (
    <Root>
      <Trigger>
        <CocktailCard cocktail={cocktail} />
      </Trigger>
      <Content>
        <CocktailDetails cocktail={cocktail} isMobile={isMobile} />
      </Content>
    </Root>
  );
}
