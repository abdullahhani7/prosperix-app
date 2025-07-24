import { SiComma } from "react-icons/si";

const Testimonial = () => {
  return (
    <div className="md:space-y-0 space-y-10 pb-20  px-20">
      <div className="section_header max-w-[679px] w-full mb-10">
        <div className="flex items-center gap-6 mb-8">
          <h4 className="px-2 py-1 bg-[#20cfc6] rounded text-lg text-[#008080] font-inter font-semibold uppercase ">
            testimonial
          </h4>
          <span className="w-[180px] h-[3px] bg-[#008080] rounded"></span>
        </div>
        <h3 className="text-4xl text-[#1e1e1e] font-inter font-bold capitalize leading-12 mb-8">
          what our customers say
        </h3>

        <p className="text-xl text-[#575757] font-inter font-medium mb-8">
          Discover the Success Stories and Satisfaction of Clients Who Have
          Benefited from Our Expertise and Personalized Financial Guidance
        </p>
      </div>

      <div className="md:grid lg:grid-cols-2 xl:grid-cols-3 gap-8 md:space-y-0 space-y-10">
        {/* testimonial card  */}
        <div className="min-w-[420px] w-full min-h-[403px] bg-white border-[#d5dddd] border-2 rounded-l-4xl rounded-br-4xl p-6 space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-8">
            <div className="p-1 bg-[#e8e8e6] rounded-full flex items-center justify-center">
              <img
                className="w-[75px] h-[75px] object-cover rounded-full"
                src="/avatar_1.png"
                alt="grace turner"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-2xl text-[#1e1e1e] font-inter font-bold capitalize">
                grace turner
              </h4>
              <span className="text-2xl text-[#b0b0b0] font-inter font-medium capitalize">
                director
              </span>
            </div>
          </div>
          <p className="text-xl text-[#575757] font-inter font-medium">
            Financial expertise has made a significant impact on our nonprofit
            financial stability, allowing us to better serve our community
          </p>
          <div className="flex items-center justify-end">
            <button className="flex items-center gap-1">
              <SiComma size={"3rem"} color="#008080" />{" "}
              <SiComma size={"3rem"} color="#008080" />
            </button>
          </div>
        </div>

        {/* testimonial card  */}
        <div className="min-w-[420px] w-full min-h-[403px] bg-[#008080] border-0 rounded-l-4xl rounded-br-4xl p-6 space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-8">
            <div className="p-1 bg-[#e8e8e6] rounded-full flex items-center justify-center">
              <img
                className="w-[75px] h-[75px] object-cover rounded-full"
                src="/public/avatar_2.png"
                alt="linda carter"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-2xl text-white font-inter font-bold capitalize">
                linda carter
              </h4>
              <span className="text-2xl text-white font-inter font-medium capitalize">
                analyst
              </span>
            </div>
          </div>
          <p className="text-xl text-white font-inter font-medium">
            Financial expertise has made a significant impact on our nonprofit
            financial stability, allowing us to better serve our community
          </p>
          <div className="flex items-center justify-end">
            <button className="flex items-center gap-1">
              <SiComma size={"3rem"} color="white" />{" "}
              <SiComma size={"3rem"} color="white" />
            </button>
          </div>
        </div>

        {/* testimonial card  */}
        <div className="min-w-[420px] w-full min-h-[403px] bg-white border-[#d5dddd] border-2 rounded-l-4xl rounded-br-4xl p-6 space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-8">
            <div className="p-1 bg-[#e8e8e6] rounded-full flex items-center justify-center">
              <img
                className="w-[75px] h-[75px] object-cover rounded-full"
                src="/avatar_3.png"
                alt="alex walker"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-2xl text-[#1e1e1e] font-inter font-bold capitalize">
                alex walker
              </h4>
              <span className="text-2xl text-[#b0b0b0] font-inter font-medium capitalize">
                attorney
              </span>
            </div>
          </div>
          <p className="text-xl text-[#575757] font-inter font-medium">
            Financial expertise has made a significant impact on our nonprofit
            financial stability, allowing us to better serve our community
          </p>
          <div className="flex items-center justify-end">
            <button className="flex items-center gap-1">
              <SiComma size={"3rem"} color="#008080" />{" "}
              <SiComma size={"3rem"} color="#008080" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
