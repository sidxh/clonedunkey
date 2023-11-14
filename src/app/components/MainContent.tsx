import React from 'react';
import GithubStarSVG from '../utils/GithubStarSVG';
import Link from 'next/link';

const MainContent = () => {
  return (
    <main className="w-full flex-auto pt-[6rem]">
      <div className="mx-auto max-w-7xl px-6 mt-24 md:mb-8 sm:mt-32 md:mt-56 lg:px-0">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="flex flex-col md:flex-row md:justify-stretch md:spacing-x-4" style={{ opacity: 1, transform: 'none' }}>
            <div className="w-full">
              <h1 className="font-display text-5xl leading-[1.2] font-medium tracking-tight text-gray-950 [text-wrap:balance] sm:text-[64px] sm:leading-[72px] font-sans">Seriously Fast API Authentication</h1>
              <p className="mt-6 text-xl leading-[1.8] text-[#57534E] [text-wrap:balance] sm:leading-[32px]">Unkey is an <span className="font-semibold">open source</span> API authentication and authorization platform for scaling user-facing APIs. Create, verify, and manage low latency API keys in seconds.</p>
              <div className="flex flex-col mt-8 space-y-4 md:flex-row md:space-x-8 md:space-y-0 sm:mt-4">
                <Link className="inline-flex items-center justify-center transition-colors focus-visible:outline-none disabled:pointer-events-none duration-200 bg-black text-[#DDDAD8] hover:bg-white hover:text-black border border-black h-12 px-8 text-sm font-semibold rounded-full flex-none" href="/app">Start for free</Link>
                <Link className="inline-flex items-center justify-center transition-colors focus-visible:outline-none disabled:pointer-events-none duration-200 text-black hover:bg-black hover:text-[#DDDAD8] border border-border h-12 px-8 text-sm font-semibold rounded-full flex-none" href="https://github.com/unkeyed/unkey" target="_blank" rel="noreferrer">
                  <GithubStarSVG />
                  Star us on GitHub
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:ml-12">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-gvpo4SWgG8?si=8n5wIAdTZA7PCgZb&amp;controls=0" title="Unkey in Five minutes - YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
            </div>
            <div className="mt-4 mx-auto aspect-w-16 aspect-h-9 lg:hidden">
              <iframe width="320" height="180"  src="https://www.youtube-nocookie.com/embed/-gvpo4SWgG8?si=8n5wIAdTZA7PCgZb" title="Unkey in Five minutes - YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
            </div>
          </div>
        </div>
      </div>
  </main>
);
};

export default MainContent;
