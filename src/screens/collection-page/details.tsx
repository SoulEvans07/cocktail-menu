import { useMemo } from 'react';
import { DrawerHeader, DrawerTitle } from '~/components/layout/drawer';
import { SheetHeader, SheetTitle } from '~/components/layout/sheet';
import { Cocktail } from '~/model/types/mvp';

type CocktailDetailsProps = {
  cocktail: Cocktail;
  isMobile?: boolean;
};
export function CocktailDetails(props: CocktailDetailsProps) {
  const { cocktail, isMobile } = props;

  const { Header, Title } = useMemo(() => {
    if (isMobile) return { Header: DrawerHeader, Title: DrawerTitle };
    return { Header: SheetHeader, Title: SheetTitle };
  }, [isMobile]);

  return (
    <>
      <Header>
        <div
          className="cocktail-img aspect-[4/3]"
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
      <div className="p-3">
        {cocktail.recipe.map(item => (
          <div key={item.ingredientId}>{item.ingredientId}</div>
        ))}
      </div>
    </>
  );
}
