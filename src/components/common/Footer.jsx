import React from "react";

const Footer = () => {
  return (
    <section className="">
      <div className="pt-24 text-center flex flex-col items-center justify-center">
        <h1 className="text-6xl  text-white font-bold uppercase">
          Ready to get things done?
        </h1>
        <p className="text-2xl text-gray-300 py-3 max-w-3xl">
          Our experts are here to help you out with everything that you need.
          All you need to do is click the button below
        </p>
      </div>
      <div className="flex items-center justify-center text-white py-12 space-x-8">
        <div>
          <a
            href="mailto:hello@kulthemedia.com"
            className="text-xl underline underline-offset-8"
          >
            hello@kulthemedia.com
          </a>
        </div>
        <a
          href="/contact"
          className="focus:ring-4 focus:outline-none  font-medium rounded-full text-lg px-8 py-3 text-center mr-3 md:mr-0 text-black bg-gray-100 hover:bg-gray-900 hover:text-white transition duration-300"
        >
          Contact us &rarr;
        </a>
      </div>
      <div className="flex justify-around items-start pt-8 pb-10 mx-4">
        <div>
          <h1 className="text-5xl text-white font-medium">KM.</h1>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h2 class="mb-3 text-sm font-semibold uppercase text-white">
              Links
            </h2>
            <ul class="text-gray-300 font-medium">
              <li class="mb-1">
                <a href="/" class=" hover:underline">
                  Services
                </a>
              </li>
              <li class="mb-1">
                <a href="/" class="hover:underline">
                  Case Study
                </a>
              </li>
              <li class="mb-1">
                <a href="/" class="hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-3 text-sm font-semibold uppercase text-white">
              Company
            </h2>
            <ul class="text-gray-300 font-medium">
              <li class="mb-1">
                <a href="/" class=" hover:underline">
                  About
                </a>
              </li>
              <li class="mb-1">
                <a href="/" class="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-3 text-sm font-semibold uppercase text-white">
              Legal
            </h2>
            <ul class="text-gray-300 font-medium">
              <li class="mb-1">
                <a href="/" class=" hover:underline">
                  Terms
                </a>
              </li>
              <li class="mb-1">
                <a href="/" class="hover:underline">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-white text-center mx-5 pb-8">
        <hr class="h-px mx-24 my-8 bg-gray-200 border-1" />
        <h1>
          &copy; Copyright 2023. Kulthe Media, Limited. All rights reserved.
        </h1>
      </div>
    </section>
  );
};

export default Footer;