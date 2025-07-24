import React from "react";

const Expertise = () => {
  return (
    <div className="md:flex items-center justify-between md:space-y-0 space-y-10 pb-20  px-20">
      {/* expertise left wrapper  */}
      <div className="max-w-[659px] w-full h-auto">
        <div className="flex items-center gap-6 mb-8">
          <h4 className="px-2 py-1 bg-[#20cfc6] rounded text-lg text-[#008080] font-inter font-semibold uppercase ">
            our expertise
          </h4>
          <span className="w-[180px] h-[3px] bg-[#008080] rounded"></span>
        </div>
        <h3 className="text-4xl text-[#1e1e1e] font-inter font-bold capitalize leading-12 mb-8">
          transforming finances with strategic wealth management
        </h3>

        <p className="text-xl text-[#575757] font-inter font-medium mb-8">
          Guiding ou on your global financial success journey through customized
          & personalized financial consulting services. Achieve you goals with
          data-driven expertise and secure your financial future, successfully
          navigating the ever-changing finance
        </p>

        <p className="text-xl text-[#575757] font-inter font-medium mb-10">
          we're committed to providing you with expert guidance, proven
          strategies & personalized approach to ensure financial prosperity
        </p>

        <button className="max-w-[239px] w-full h-[55px] border-2 border-[#d5dddd] rounded cursor-pointer text-xl text-[#1e1e1e] font-semibold font-inter capitalize flex items-center justify-center">
          explore services
        </button>
      </div>

      {/* expertise right wrapper  */}
      <div className="max-w-[659px] w-full min-h-[644px] bg-[#e0f8f8] rounded-l-4xl rounded-br-4xl flex items-center justify-center">
        <img
          src="/expertise_image.png"
          className="max-w-[558px] w-full min-h-[561px] h-full object-cover"
          alt="expertise image"
        />
        {/* <img src="/public/expertise_image.png" className='max-w-[558px] w-full min-h-[561px] h-full object-cover' alt="expertise image" /> */}
      </div>
    </div>
  );
};

export default Expertise;
