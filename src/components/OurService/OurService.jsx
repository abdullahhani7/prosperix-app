import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaBuildingColumns } from "react-icons/fa6";

const OurService = () => {
  return (
    <div className="md:flex items-center justify-between md:space-y-0 space-y-10 pb-20  px-20">
      {/* services left wrapper  */}
      <div className="max-w-[659px] w-full min-h-[644px] bg-[#e0f8f8] rounded-l-4xl rounded-br-4xl flex items-center justify-center">
        <img
          src="/service_image.png"
          className="max-w-[558px] w-full min-h-[561px] h-full object-cover"
          alt="services image"
        />
        {/* <img src="/public/service_image.png" className='max-w-[558px] w-full min-h-[561px] h-full object-cover' alt="services image" /> */}
      </div>

      {/* services right wrapper  */}
      <div className="max-w-[659px] w-full h-auto">
        <div className="flex items-center gap-6 mb-8">
          <h4 className="px-2 py-1 bg-[#20cfc6] rounded text-lg text-[#008080] font-inter font-semibold uppercase ">
            our services
          </h4>
          <span className="w-[180px] h-[3px] bg-[#008080] rounded"></span>
        </div>

        <h3 className="text-4xl text-[#1e1e1e] font-inter font-bold capitalize leading-12 mb-8">
          our services can help you grw your investments and wealth
        </h3>

        <p className="text-xl text-[#575757] font-inter font-medium mb-8">
          Embark on a journey to unlock a word of financial opportunities grow
          your investment with our comprehensive and expert services
        </p>

        <div className="grid grid-cols-2 gap-6 mb-10">
          {/* financial planning  */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded bg-[#33df58]">
              <FaDollarSign size={"1.5rem"} color="#caffd2" />
            </button>
            <h4 className="text-2xl text-[#323232] font-inter font-semibold capitalize">
              financial Planning
            </h4>
          </div>
          {/* investment advisory  */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded bg-[#cf4141]">
              <FaDollarSign size={"1.5rem"} color="#ffabab" />
            </button>
            <h4 className="text-2xl text-[#323232] font-inter font-semibold capitalize">
              investment advisory{" "}
            </h4>
          </div>
          {/* estate planning */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded bg-[#27b4ac]">
              <IoMdHome size={"1.5rem"} color="#70f1ea" />
            </button>
            <h4 className="text-2xl text-[#323232] font-inter font-semibold capitalize">
              estate planning{" "}
            </h4>
          </div>
          {/* wealth management */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded bg-[#b59f28]">
              <FaBuildingColumns size={"1.5rem"} color="#ffee90" />
            </button>
            <h4 className="text-2xl text-[#323232] font-inter font-semibold capitalize">
              wealth management{" "}
            </h4>
          </div>
        </div>

        <button className="max-w-[239px] w-full h-[55px] border-2 border-[#d5dddd] rounded cursor-pointer text-xl text-[#1e1e1e] font-semibold font-inter capitalize flex items-center justify-center">
          explore services
        </button>
      </div>
    </div>
  );
};

export default OurService;
