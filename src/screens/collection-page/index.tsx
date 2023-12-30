import { useState, useMemo } from 'react';

import type { PopulatedCocktail } from '~/model/types/populated';
import { populatedCocktails } from '~/model/data/populated';
import { useMediaQuery } from '~/utils/hooks/useMediaQuery';
import { Drawer, DrawerContent, DrawerTrigger } from '~/components/layout/drawer';
import { Sheet, SheetContent, SheetTrigger } from '~/components/layout/sheet';

import { CollectionSidebar } from './sidebar';
import { CocktailCard } from './card';
import { CocktailDetails } from './details';

type CollectionPageProps = {
  active: boolean;
};

export function CollectionPage(props: CollectionPageProps) {
  const { active } = props;

  const [category, setCategory] = useState<string | 'all'>('all');
  const filteredCocktails = useMemo(() => {
    return populatedCocktails.filter(c => {
      if (category === 'all') return true;
      return c.tagIds.includes(category);
    });
  }, [populatedCocktails, category]);

  return (
    <div className="flex h-screen max-h-screen w-full flex-shrink-0 flex-row overflow-x-hidden bg-slate-200">
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
  cocktail: PopulatedCocktail;
};
export function CocktailItem(props: CocktailItemProps) {
  const { cocktail } = props;
  const isMobile = useMediaQuery('(max-width: 640px)');

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
