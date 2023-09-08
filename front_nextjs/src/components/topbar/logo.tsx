import Image from 'next/image';
import React, { ReactElement } from 'react';

interface Props {}

export default function Logo({}: Props): ReactElement {
  return (
    <div className='flex-shrink-0'>
      <Image
        className='h-8 w-8'
        src='/home_crafter.png'
        alt='Home Crafter'
        width={32}
        height={32}
      />
    </div>
  );
}
