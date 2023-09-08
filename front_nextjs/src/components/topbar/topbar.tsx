'use client';

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import TopBarLink from './link';
import { classNames } from './utils';
import TopbarRighMenu from './rightMenu';
import Logo from './logo';
import NotificationBell from './notificationBell';
import MobileMenuButton from './mobileMenuButton';
import ProfileDropdown from './profileDropdown';

export type User = {
  name: string;
  email: string;
  imageUrl: string;
};

const user: User = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

export type NavigationItem = {
  name: string;
  href: string;
};

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Przepisy', href: '/recipes' },
  { name: 'Mój dashboard', href: '/my-dashboard' },
  { name: 'Generator etykiet', href: 'label-generator' },
];

const userNavigation: NavigationItem[] = [
  { name: 'Mój profil', href: '/my-profile' },
  { name: 'Ustawienia', href: '/settings' },
  { name: 'Wyloguj', href: '/logout' },
];

const open = false;

export default function TopBar() {
  const currentRoute = usePathname();

  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>
              <div className='flex items-center'>
                <Logo />
                <div className='hidden md:block'>
                  <div className='ml-10 flex items-baseline space-x-4'>
                    {navigation.map((item, index) => (
                      <TopBarLink
                        key={index}
                        item={item}
                        currentRoute={currentRoute}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className='hidden md:block'>
                <div className='ml-4 flex items-center md:ml-6'>
                  <NotificationBell />

                  {/* Profile dropdown */}
                  <ProfileDropdown
                    userNavigation={userNavigation}
                    user={user}
                  />
                </div>
              </div>
              {/* Mobile menu button */}
              <MobileMenuButton open={open} />
            </div>
          </div>

          <TopbarRighMenu
            navigation={navigation}
            userNavigation={userNavigation}
            currentRoute={currentRoute}
            user={user}
          />
        </>
      )}
    </Disclosure>
  );
}
