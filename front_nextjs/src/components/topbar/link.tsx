import Link from 'next/link';
import React, { ReactElement } from 'react';
import { classNames, isActiveLink } from './utils';

interface Props {
  item: any;
  currentRoute: string;
}

export default function TopBarLink({
  item,
  currentRoute,
}: Props): ReactElement {
  return (
    <Link
      key={item.name}
      href={item.href}
      className={classNames(
        isActiveLink(item.href, currentRoute)
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'rounded-md px-3 py-2 text-sm font-medium'
      )}
      aria-current={item.current ? 'page' : undefined}
    >
      {item.name}
    </Link>
  );
}
