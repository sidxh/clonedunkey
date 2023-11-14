// components/Header.tsx
import Link from 'next/link';
import React from 'react';
import UnikeySVG from '../utils/UnikeySVG';
import ToggleSVG from '../utils/ToggleSVG';

const Header: React.FC = () => {
  return (
    <header>
      <div className="absolute left-0 right-0 top-2 z-40 pt-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto lg:max-w-none">
            <div className="flex items-center justify-between">
              <Link aria-label="Home" href="/"><UnikeySVG /> </Link>
              <div className="flex items-center gap-x-2 md:gap-x-8">
                <Link className="whitespace-nowrap inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-gray-950 text-white hover:bg-gray-800" href="/careers"><span className="relative top-px">We're hiring</span></Link>
                <Link className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-gray-950 text-white hover:bg-gray-800" href="/app"><span className="relative top-px">Dashboard</span></Link>
                <button type="button" aria-expanded="false" aria-controls=":R6mla:" className="group -m-2.5 rounded-full p-2.5 transition hover:bg-gray-950/10" aria-label="Toggle navigation"><ToggleSVG /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
