import { Recipe } from '@/types/recipe.type';
import Image from 'next/image';
import Ratings from './ratings';
import Link from 'next/link';

type RecipeThumbnailTypes = {
  recipe: Recipe;
};

export default function RecipeThumbnail({ recipe }: RecipeThumbnailTypes) {
  const { name, vol, shortDescription, image, rating, numberOfVotes, slug } = recipe;

  return (
    <div className='group relative'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <Image
          src={image}
          alt={shortDescription}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          width={256}
          height={256}
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <Link href={`/recipes/${slug}`}>
            <span aria-hidden='true' className='absolute inset-0'></span>
              {name}
            </Link>
          </h3>
          <Ratings rating={rating} numberOfVotes={numberOfVotes} />
        </div>
        <div>
          <p className='text-sm font-medium text-gray-900'>vol: {vol}%</p>
        </div>
      </div>
    </div>
  );
}
