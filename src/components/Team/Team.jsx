import React from "react";
import { RiGuideLine } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const Team = () => {
  return (
    <div className="md:space-y-0 space-y-10 pb-20 px-20">
      <div className="section_header max-w-[679px] w-full mb-12">
        <div className="flex items-center gap-6 mb-8">
          <h4 className="px-2 py-1 bg-[#20cfc6] rounded text-lg text-[#008080] font-inter font-semibold uppercase ">
            team
          </h4>
          <span className="w-[180px] h-[3px] bg-[#008080] rounded"></span>
        </div>
        <h3 className="text-4xl text-[#1e1e1e] font-inter font-bold capitalize leading-12 mb-8">
          our team provides valuable services at any time in any situation
        </h3>
      </div>

      <div className="md:grid lg:grid-cols-2 xl:grid-cols-3 gap-8 md:space-y-0 space-y-10">
        {/* team wrapper  */}
        <div>
          <div className="mb-8">
            <button className="w-[75px] h-[75px] rounded-full bg-[#dafafc] flex items-center justify-center">
              <RiGuideLine size={"2.5rem"} color="#008080" />
            </button>
          </div>
          <h4 className="text-2xl text-[#1e1e1e] font-inter font-bold capitalize">
            expert guidance
          </h4>
          <p className="max-w-[407px] w-full text-xl text-[#575757] font-inter font-medium mt-5">
            Rely on seasoned professional for tailored financial advice and
            strategic planning aligned with you unique goals
          </p>

          <button className="mt-8 text-xl text-[#008080] font-inter font-medium capitalize cursor-pointer">
            read more
          </button>
        </div>
        {/* team wrapper  */}
        <div>
          <div className="mb-8">
            <button className="w-[75px] h-[75px] rounded-full bg-[#fde4e4] flex items-center justify-center">
              <RiSecurePaymentLine size={"2.5rem"} color="#ff6b6b" />
            </button>
          </div>
          <h4 className="text-2xl text-[#1e1e1e] font-inter font-bold capitalize">
            risk management
          </h4>
          <p className="max-w-[407px] w-full text-xl text-[#575757] font-inter font-medium mt-5">
            Rely on seasoned professional for tailored financial advice and
            strategic planning aligned with you unique goals
          </p>

          <button className="mt-8 text-xl text-[#008080] font-inter font-medium capitalize cursor-pointer">
            read more
          </button>
        </div>
        {/* team wrapper  */}
        <div>
          <div className="mb-8">
            <button className="w-[75px] h-[75px] rounded-full bg-[#dafcdf] flex items-center justify-center">
              <MdOutlineDashboardCustomize size={"2.5rem"} color="#25ba6a" />
            </button>
          </div>
          <h4 className="text-2xl text-[#1e1e1e] font-inter font-bold capitalize">
            customized solutions
          </h4>
          <p className="max-w-[407px] w-full text-xl text-[#575757] font-inter font-medium mt-5">
            Rely on seasoned professional for tailored financial advice and
            strategic planning aligned with you unique goals
          </p>

          <button className="mt-8 text-xl text-[#008080] font-inter font-medium capitalize cursor-pointer">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
