import { useMemo } from 'react';

import type { PopulatedCocktail } from '~/model/types/populated';
import { cn } from '~/utils/cn';
import { Button } from '~/components/controls/button';
import { DrawerClose, DrawerHeader, DrawerTitle } from '~/components/layout/drawer';
import { SheetClose, SheetHeader, SheetTitle } from '~/components/layout/sheet';

type CocktailDetailsProps = {
  cocktail: PopulatedCocktail;
  isMobile?: boolean;
};
export function CocktailDetails(props: CocktailDetailsProps) {
  const { cocktail, isMobile } = props;

  const { Header, Title, Close } = useMemo(() => {
    if (isMobile) return { Header: DrawerHeader, Title: DrawerTitle, Close: DrawerClose };
    return { Header: SheetHeader, Title: SheetTitle, Close: SheetClose };
  }, [isMobile]);

  return (
    <div className="flex h-full flex-col">
      <Header>
        <div
          className={cn('cocktail-img aspect-[1/1]', { 'aspect-[9/5]': isMobile })}
          style={{
            backgroundImage: `url(${cocktail.image.url})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: `${cocktail.image?.page.offX ?? 0}px`,
            backgroundPositionY: `${cocktail.image?.page.offY ?? 0}px`,
            backgroundSize: cocktail.image?.page.scale ? `${cocktail.image?.page.scale}%` : 'cover',
          }}
        />
        <Title className="text-left">{cocktail.name}</Title>
      </Header>
      <div className="flex flex-1 flex-col gap-1 p-3">
        {cocktail.recipe.map(item => (
          <div key={item.ingredientId} className="ingredient flex flex-row">
            <span>
              {item.ingredient.name}
              <span className="modifier text-slate-400">
                {!!item.optional && ' (optional)'}
                {!!item.garnish && ' (garnish)'}
              </span>
            </span>
            {!item.garnish && (
              <>
                <span className="amount ml-auto">{item.amount}</span>
                <span className="unit ml-1 text-slate-400">{item.unit.shortName}</span>
              </>
            )}
          </div>
        ))}
        <Button as={Close} className={cn('mt-auto w-full', { 'mt-10': isMobile })}>
          Close
        </Button>
      </div>
    </div>
  );
}
