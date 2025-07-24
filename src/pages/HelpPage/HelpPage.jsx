import React from "react";

const HelpPage = () => {
  return (
    <div className="w-full bg-white pb-20">
      <div className="lg:container mx-auto lg:px-0 px-4">
        <div className="md:space-y-0 space-y-10 py-16 px-12 bg-[#008080] rounded-tl-4xl rounded-br-4xl">
          <div className="md:space-y-0 space-y-10">
            {/* contact wrapper  */}
            <div className="max-w-[626px] w-full h-auto">
              <div className="flex items-center gap-6 mb-8">
                <h4 className="px-2 py-1 rounded text-lg text-[#20cfc6] font-inter font-semibold uppercase ">
                  help
                </h4>
                <span className="w-[180px] h-[3px] bg-[#20cfc6] rounded"></span>
              </div>
              <h3 className="text-4xl text-white font-inter font-bold capitalize leading-12 mb-8">
                help
              </h3>

              <form
                action="#"
                className="w-full md:flex items-center justify-between md:space-y-0 space-y-4"
              >
                <input
                  type="text"
                  className="max-w-[404px] w-full h-[55px] pl-2.5 shadow-2xl text-xl text-[#2b2b2b] bg-white font-bold font-inter rounded outline-none"
                  placeholder="Write..."
                />
                <button
                  type="submit"
                  className="max-w-[192px] w-full h-[55px] rounded bg-[#20cfc6] text-white font-semibold capitalize cursor-pointer text-xl"
                >
                  Help
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
