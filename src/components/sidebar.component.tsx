'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CartIc from '@/public/images/cart.svg';
import HomeIc from '@/public/images/home.svg';
import IngredientIc from '@/public/images/ingredient.svg';
import LikeIc from '@/public/images/like.svg';

const pages = [
  { icon: HomeIc, label: 'Home', link: '#hero' },
  { icon: LikeIc, label: 'Featured', link: '#featured' },
  { icon: IngredientIc, label: 'Ingredient', link: '#ingredient' },
  { icon: CartIc, label: 'Checkout', link: '#variant' },
];

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <aside className="fixed top-0 bottom-0 left-0 z-10 hidden h-screen w-20 bg-tertiary py-4 md:block">
      <div className="h-full border-r-3 border-double border-stone-400">
        <div className="flex h-full flex-col items-center px-5 py-4">
          <div
            className="mx-auto mt-2 flex w-7 cursor-pointer flex-col gap-[5px]"
            role="button"
            aria-label="menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span
              className={`relative inline-block h-[3px] w-full rounded-sm bg-stone-700 transition-all ${
                isMenuOpen ? 'left-1 origin-top-left rotate-45' : ''
              }`}
            />
            <span
              className={`relative inline-block h-[3px] w-full rounded-sm bg-stone-700 transition-all ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`relative inline-block h-[3px] w-full rounded-sm bg-stone-700 transition-all ${
                isMenuOpen ? 'top-[2px] left-1 origin-bottom-left -rotate-45' : ''
              }`}
            />
          </div>
          <nav className="mt-16">
            <ul className="flex flex-col gap-10">
              {pages.map((page) => {
                return (
                  <li key={page.label}>
                    <Link href={page.link}>
                      <Image src={page.icon} alt={page.label} width={32} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`absolute top-0 -z-10 h-full overflow-x-hidden bg-tertiary transition-all duration-500 ${
          isMenuOpen ? 'w-[360px] drop-shadow-xl' : 'w-20'
        }`}
      >
        <nav
          className={`mt-[124px] ml-20 px-6 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          } duration-100`}
        >
          <ul className="flex flex-col gap-10">
            {pages.map((page) => {
              return (
                <li
                  key={page.label}
                  className="h-8 text-xl font-medium whitespace-nowrap"
                >
                  <Link href={page.link}>{page.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
