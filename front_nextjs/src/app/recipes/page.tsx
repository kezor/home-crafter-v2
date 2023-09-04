import RecipeThumbnail from './components/recipeThumbnail';

export const recipes = [
    {
        name: 'Winko hibiskusowe',
        shortDescription: 'Lorem ipsum dolor sit amet.',
        image: 'https://cdn.pixabay.com/photo/2014/11/22/18/38/wine-541922_1280.jpg',
        vol: 18,
        rating: 3.4,
        numberOfVotes: 123,
        slug: 'wino-hibiskusowe'
    },
    {
        name: 'Winko jablkowe',
        shortDescription: 'Lorem ipsum dolor sit amet.',
        image: 'https://cdn.pixabay.com/photo/2017/09/26/16/44/wine-2789265_1280.jpg',
        vol: 15,
        rating: 5,
        numberOfVotes: 3422,
        slug: 'wino-jablkowe'
    },
    {
        name: 'Miód pitny - trójniak',
        shortDescription: 'Lorem ipsum dolor sit amet.',
        image: 'https://cdn.pixabay.com/photo/2016/08/09/11/29/wine-1580359_1280.jpg',
        vol: 23,
        rating: 2,
        numberOfVotes: 9875,
        slug: 'miod-pitny-trojniak'
    },
    {
        name: 'Piwo z brewkitu',
        shortDescription: 'Lorem ipsum dolor sit amet.',
        image: 'https://cdn.pixabay.com/photo/2015/06/24/13/31/beer-820011_1280.jpg',
        vol: 5,
        rating: 4.5,
        numberOfVotes: 23,
        slug: 'piwo-z-brewkitu'
    },
];

export default function Recipes() {
  return (
    <>
      <section>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Lista przepisów
        </h2>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {recipes.map((recipe, index) => <RecipeThumbnail key={index} recipe={recipe} />) }
          {/* <RecipeThumbnail />
          <RecipeThumbnail />
          <RecipeThumbnail />
          <RecipeThumbnail />
          <RecipeThumbnail />
          <RecipeThumbnail />
          <RecipeThumbnail /> */}
        </div>
      </section>
    </>
  );
}
