import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <section
      className="mx-5 md:mx-8 lg:mx-10 bg-no-repeat"
      style={{ backgroundImage: `url("${banner}")` }}
    >
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-36 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
            Buy/Sell Your Favourite Phones Today!
          </h1>
          <p class="max-w-2xl mb-6  text-gray-900  lg:mb-8 md:text-lg lg:text-xl dark:text-white">
            Buy or Sell is now much easier in our platform.
          </p>
          <Link class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white  btn btn-outline">
            Get started
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
