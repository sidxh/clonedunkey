// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
        <footer className="mx-auto max-w-7xl px-6 lg:px-8 w-full mt-24 sm:mt-32 lg:mt-40">
        <div className="max-w-2xl mx-auto lg:max-w-none">
            <div style={{ opacity: 1, transform: 'none' }}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                <nav>
                <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                    <li>
                    <div className="text-sm font-semibold tracking-wider font-display text-gray-950">Company</div>
                    <ul className="mt-4 text-sm text-gray-700">
                        <li className="mt-[1.3rem]"><a className="transition hover:text-gray-950" href="/about">About</a></li>
                        <li className="mt-[1.3rem]"><a className="transition hover:text-gray-950" href="/blog">Blog</a></li>
                        <li className="mt-[1.3rem]"><a className="transition hover:text-gray-950" href="/careers">Careers</a></li>
                        <li className="mt-[1.3rem]"><a className="transition hover:text-gray-950" href="/changelog">Changelog</a></li>
                        <li className="mt-[1.3rem]"><a className="transition hover:text-gray-950" href="https://plausible.io/unkey.dev">Analytics</a></li>
                        <li className="mt-[1.3rem]"><a className="transition hover:text-gray-950" href="https://github.com/unkeyed/unkey">Source Code</a></li>
                        <li className="mt-[1.3rem]"><a className="transition hover:text-gray-950" href="/docs">Documentation</a></li>
                    </ul>
                    </li>
                    <li>
                    <div className="text-sm font-semibold tracking-wider font-display text-gray-950">Legal</div>
                    <ul className="mt-4 text-sm text-gray-700">
                        <li className="mt-[1.3rem]"><a className="transition hover:text-gray-950" href="/policies/privacy">Privacy Policy</a></li>
                        <li className="mt-[1.3rem]"><a className="transition hover:text-gray-950" href="/policies/terms">Terms</a></li>
                    </ul>
                    </li>
                    <li>
                    <div className="text-sm font-semibold tracking-wider font-display text-gray-950">Connect</div>
                    <ul className="mt-4 text-sm text-gray-700">
                        <li className="mt-[1.3rem]"><a className="transition hover:text-gray-950" href="https://twitter.com/unkeydev">X</a></li>
                        <li className="mt-[1.3rem]"><a className="transition hover:text-gray-950" href="https://github.com/unkeyed">GitHub</a></li>
                        <li className="mt-[1.3rem]"><a className="transition hover:text-gray-950" href="/oss-friends">OSS Friends</a></li>
                        <li className="mt-[1.3rem]"><a className="transition hover:text-gray-950" href="https://cal.com/team/unkey/unkey-chat??utm_source=banner&amp;utm_campaign=oss"><img alt="Book us with Cal.com" src="https://cal.com/book-with-cal-dark.svg" /></a></li>
                    </ul>
                    </li>
                </ul>
                </nav>
                <div className="flex lg:justify-end">
                <form className="max-w-md" action="javascript:throw new Error('A React form was unexpectedly submitted.')">
                    <h2 className="text-sm font-semibold tracking-wider font-display text-gray-950">Sign up for our newsletter</h2>
                    <p className="mt-4 text-sm text-gray-700">Subscribe to get the latest Unkey news</p>
                    <div className="relative mt-6">
                    <input type="email" id="email" placeholder="Email address" autoComplete="email" aria-label="Email address" required={true} className="block w-full py-4 pl-6 pr-20 transition bg-transparent border border-gray-300 rounded-2xl text-base/6 text-gray-950 ring-4 ring-transparent placeholder:text-gray-500 focus:border-gray-950 focus:outline-none focus:ring-gray-950/5" name="email" />
                    <div className="absolute flex justify-end inset-y-1 right-1">
                        <button className="font-medium text-sm focus-visible:outline-none disabled:pointer-events-none duration-200 hover:text-secondary-foreground border border-primary w-8 flex items-center justify-center h-full text-white transition aspect-square rounded-xl bg-gray-950 hover:bg-gray-800 disabled:bg-gray-500">
                        <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16 3 10 .5v2H0v1h10v2L16 3Z"></path>
                        </svg>
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            <div className="flex flex-wrap items-end justify-between pt-12 mt-24 mb-20 border-t gap-x-6 gap-y-4 border-gray-950/10">
                <a aria-label="Home" href="/">
                <svg width="32" height="32" viewBox="0 0 276 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_101_3)">
                    <path d="M160.206 70H197V156.749C197 167.064 194.529 175.99 189.588 183.528C184.691 191.021 177.853 196.818 169.074 200.917C160.294 204.972 150.103 207 138.5 207C126.809 207 116.574 204.972 107.794 200.917C99.0147 196.818 92.1765 191.021 87.2794 183.528C82.4265 175.99 80 167.064 80 156.749V70H116.794V153.575C116.794 157.763 117.721 161.51 119.574 164.816C121.426 168.078 123.985 170.634 127.25 172.486C130.559 174.337 134.309 175.263 138.5 175.263C142.735 175.263 146.485 174.337 149.75 172.486C153.015 170.634 155.574 168.078 157.426 164.816C159.279 161.51 160.206 157.763 160.206 153.575V70Z" fill="url(#paint0_linear_101_3)" shape-rendering="crispEdges"></path>
                    <path d="M160.206 69.5H159.706V70V153.575C159.706 157.686 158.797 161.346 156.991 164.57C155.183 167.753 152.689 170.244 149.503 172.051C146.323 173.854 142.66 174.763 138.5 174.763C134.386 174.763 130.722 173.855 127.496 172.05C124.311 170.244 121.817 167.753 120.009 164.57C118.203 161.346 117.294 157.686 117.294 153.575V70V69.5H116.794H80H79.5V70V156.749C79.5 167.145 81.9466 176.168 86.859 183.798L86.8609 183.801C91.813 191.379 98.726 197.235 107.583 201.37L107.584 201.371C116.442 205.462 126.751 207.5 138.5 207.5C150.161 207.5 160.426 205.462 169.283 201.371L169.285 201.37C178.141 197.235 185.054 191.379 190.006 183.802C195.008 176.171 197.5 167.147 197.5 156.749V70V69.5H197H160.206Z" stroke="url(#paint1_linear_101_3)" shape-rendering="crispEdges"></path>
                    </g>
                    <defs>
                    <filter id="filter0_d_101_3" x="75" y="69" width="127" height="147" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_3"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_3" result="shape"></feBlend>
                    </filter>
                    <linearGradient id="paint0_linear_101_3" x1="80" y1="70" x2="176.419" y2="207.057" gradientUnits="userSpaceOnUse">
                        <stop offset="0.161458"></stop>
                        <stop offset="1" stop-color="#B6B6B6" stop-opacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_101_3" x1="47.5" y1="168.5" x2="212.999" y2="167.862" gradientUnits="userSpaceOnUse">
                        <stop offset="0.194498"></stop>
                        <stop offset="0.411458" stop-color="white" stop-opacity="0"></stop>
                    </linearGradient>
                    </defs>
                </svg>
                </a>
                <p className="text-sm text-gray-700">© Unkeyed, Inc. {/* */}2023</p>
            </div>
            </div>
        </div>
        </footer>
  );
};

export default Footer;
