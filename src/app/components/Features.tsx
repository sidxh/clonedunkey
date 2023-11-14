import React from 'react';
import Image from 'next/image';
import HeroImage from './hero.jpg';


const Features = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl mt-24 sm:mt-32 lg:mt-32 px-6 sm:px-0">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="max-w-2xl" style={{ opacity: 1, transform: 'none' }}>
            <h2><span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-[40px] text-gray-950">Features for any use case</span></h2>
            <div className="mt-6 text-xl text-gray-600">
              <p>Whether you are working on your latest side project or building the next big thing, Unkey has you covered.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 overflow-x-hidden">
          <div className="max-w-2xl mx-auto lg:max-w-none">
            <div className="lg:flex lg:items-center lg:justify-end">
              <div className="flex justify-center flex-col sm:flex-row lg:w-1/2 lg:justify-end lg:pr-12">
                <div className="w-[33.75rem] flex-none lg:w-[45rem] lg:pr-8 pr-36" style={{ opacity: 1, transform: 'none' }}>
                  <div className="justify-center w-full lg:justify-end relative flex aspect-[719/680] grayscale">
                    <svg viewBox="0 0 655 680" fill="none" className="h-full">
                      <g clipPath="url(#:S1:-clip)" className="group">
                        <g className="transition duration-500 origin-center scale-100 motion-safe:group-hover:scale-105">
                          <foreignObject width="655" height="680">
                            <Image
                              alt=""
                              loading="lazy"
                              width={3888}
                              height={5184}
                              decoding="async"
                              data-nimg="1"
                              style={{ color: 'transparent', aspectRatio: '655 / 680' }}
                              className="object-cover w-full bg-gray-100"
                              src={HeroImage}
                            />
                          </foreignObject>
                        </g>
                        <use href="#:S1:-shape" strokeWidth="2" className="stroke-gray-950/10"></use>
                      </g>
                      <defs>
                        <clipPath id=":S1:-clip">
                          <path
                            id=":S1:-shape"
                            d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

              <div>
                <ul role="list" className="text-base text-gray-600 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                  <li className="group mt-10 first:mt-0">
                    <div style={{ opacity: 1, transform: 'none' }}>
                      <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-gray-950 after:bg-gray-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                        <strong className="font-semibold text-gray-950">Keys where your users are. </strong>
                        Your users are everywhere and so is Unkey. Unkey stores keys globally, making each request as fast as possible regardless of your location.
                      </div>
                    </div>
                  </li>
                  <li className="group mt-10 first:mt-0">
                    <div style={{ opacity: 1, transform: 'none' }}>
                      <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-gray-950 after:bg-gray-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                        <strong className="font-semibold text-gray-950">Per-key rate limiting. </strong>
                        We understand that each user is different, so Unkey gives you the ability to decide the rate limits as you issue each key. Giving you complete control while protecting your application.
                      </div>
                    </div>
                  </li>
                  <li className="group mt-10 first:mt-0">
                    <div style={{ opacity: 1, transform: 'none' }}>
                      <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-gray-950 after:bg-gray-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                        <strong className="font-semibold text-gray-950">Temporary Keys. </strong>
                        Want to add a free trial to your API? Unkey allows you to issue temporary keys, once the key expires we delete it for you.
                      </div>
                    </div>
                  </li>
                  <li className="group mt-10 first:mt-0">
                    <div style={{ opacity: 1, transform: 'none' }}>
                      <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-gray-950 after:bg-gray-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                        <strong className="font-semibold text-gray-950">Limited Keys. </strong>
                        Want to limit the number of requests a user can make? Unkey allows you to issue limited keys, once the key reaches the limit we delete it for you.
                      </div>
                    </div>
                  </li>
                  <li className="group mt-10 first:mt-0">
                    <div style={{ opacity: 1, transform: 'none' }}>
                      <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-gray-950 after:bg-gray-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                        <strong className="font-semibold text-gray-950">Realtime Analytics. </strong>
                        Every key and API has analytics to see how users use your product and drive your business decisions.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
        
  );
};

export default Features;
