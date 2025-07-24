import React from "react";

const Banner = () => {
  return (
    <div className="w-full md:flex items-center justify-center md:space-y-0 space-y-10 pb-20">
      {/* banner left wrapper  */}
      <div className="max-w-[742px] w-full h-auto">
        <h3 className="text-6xl text-[#2b2b2b] font-inter font-semibold capitalize leading-16 mb-8">
          Navigating the <span className="text-[#008080]">global</span>{" "}
          financial landscape
        </h3>
        <p className="text-2xl text-[#575757] font-medium font-inter max-w-[600px] w-full mb-12">
          Empowering your journey to global financial success through customized
          and personalized financial consulting for every client
        </p>

        <div className="max-w-[617px] w-full">
          <form
            action="#"
            className="w-full md:flex items-center justify-between md:space-y-0 space-y-4"
          >
            <input
              type="email"
              className="max-w-[404px] w-full h-[55px] pl-2.5 shadow-2xl text-xl text-[#2b2b2b] font-bold font-inter rounded outline-none"
              placeholder="your email address"
            />
            <button
              type="submit"
              className="max-w-[192px] w-full h-[55px] rounded bg-[#008080] text-white font-semibold capitalize cursor-pointer text-xl"
            >
              get started
            </button>
          </form>
        </div>
      </div>
      {/* banner right wrapper  */}
      <div className="max-w-[628px] w-full min-h-[663px] h-full">
        <img
          src="/banner_image.png"
          className="w-full h-full object-cover"
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default Banner;
