import { Cocktail } from '~/model/types/mvp';

type CocktailCardProps = {
  cocktail: Cocktail;
};
export function CocktailCard(props: CocktailCardProps) {
  const { cocktail } = props;

  return (
    <div className="relative aspect-[3/4] rounded-lg text-left shadow-custom-card">
      <div
        className="aspect-[3/4] rounded-lg"
        style={{
          backgroundImage: `url(${cocktail.image.url})`,
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: `${cocktail.image?.card.offX ?? 0}px`,
          backgroundPositionY: `${cocktail.image?.card.offY ?? 0}px`,
          backgroundSize: cocktail.image?.card.scale ? `${cocktail.image?.card.scale}%` : 'cover',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 rounded-bl-lg rounded-br-lg bg-gradient-to-b from-transparent to-[#00000080] px-3 pb-2 pt-6 font-medium text-white">
        {cocktail.name}
      </div>
    </div>
  );
}
