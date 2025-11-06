import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="banner-image"
          className="rounded-full w-32"
        />
      </div>

      <h3 className="flex item-end gap-2 text-xl md:text-2xl mb-3">
        Hi! I am Ashraf Ohi{" "}
        <Image
          src={assets.hand_icon}
          alt="banner-image"
          className="rounded-full w-6"
        />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px]">
        Frontend $ Backend Developer
      </h1>
      <p className="max-w-2xl mx-auto">
        I am a Frontend & Backend developer, worked with various projects like
        portfolios,businesses, e-commerce, SaaS, wordpress, store, school
        management, figma, e-learning, otp platforms{" "}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="banner-image"
            className="w-4"
          />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-grey-500 flex items-center gap-2"
        >
          My resume{" "}
          <Image
            src={assets.download_icon}
            alt="banner-image"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
