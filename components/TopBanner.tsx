import Image from "next/image";
import Link from "next/link";
import React from "react";

// bg-[#252525]

const TopBanner = () => {
  return (
    <div>
      <div className="relative z-[500]">
        <div className="bg-[#252525] text-[#fffef2] h-auto w-full overflow-visible flex justify-center px-5 pt-3 pb-2 ">
          <div className="flex items-center  w-max over ">
            <button className="flex items-center cursor-pointer justify-between w-full gap-6 border-b-2 border-transparent hover:border-b-2 hover:border-current">
              <p className="text-[14px] font-suisse-regular text-center  ">
                Enjoy complimentary shipping on orders over $400. Click and
                Collect is now available in Hong Kong.
              </p>
              <Image
                src="/icons/plus-math-colored.png"
                width={15}
                height={15}
                alt="icon"
              ></Image>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
