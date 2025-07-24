import React from "react";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#008080] py-[70px]  px-20">
      <div className="lg:container mx-auto lg:px-0 px-4">
        <div className="md:grid lg:grid-cols-2 xl:grid-cols-4 gap-6 md:space-y-0 space-y-10">
          {/* footer wrapper  */}
          <div className="space-y-6">
            {/* logo wrapper  */}
            <div>
              <Link
                to={"/"}
                className="text-3xl text-white font-bold font-inter capitalize"
              >
                prosperix
              </Link>
            </div>
            <p className="text-xl text-[#f3f3f3] font-inter font-medium leading-8">
              our expert financial consultants provide solutions to help you
              achieve financial wealth. Trust us to guide you toward a brighter
              financial future
            </p>

            {/* social media  */}
            <div className="flex items-center gap-3">
              <Link
                to={"#"}
                className="flex items-center gap-3 text-lg text-white font-inter font-medium capitalize"
              >
                <FaFacebookF size={"1.5rem"} color="white" />
                facebook
              </Link>
              <Link
                to={"#"}
                className="flex items-center gap-3 text-lg text-white font-inter font-medium capitalize"
              >
                <CiTwitter size={"1.5rem"} color="white" />
                twitter
              </Link>
              <Link
                to={"#"}
                className="flex items-center gap-3 text-lg text-white font-inter font-medium capitalize"
              >
                <FaInstagram size={"1.5rem"} color="white" />
                instagram
              </Link>
            </div>
          </div>

          {/* footer wrapper  */}
          <div className="space-y-6">
            <h4 className="text-2xl text-white font-bold font-inter capitalize">
              our services
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="text-xl text-[#e7e7e7ee] font-medium font-inter capitalize">
                insurance planning
              </li>
              <li className="text-xl text-[#e7e7e7ee] font-medium font-inter capitalize">
                estate planning
              </li>
              <li className="text-xl text-[#e7e7e7ee] font-medium font-inter capitalize">
                tax optimization
              </li>
              <li className="text-xl text-[#e7e7e7ee] font-medium font-inter capitalize">
                debt management
              </li>
            </ul>
          </div>

          {/* footer wrapper  */}
          <div className="space-y-6">
            <h4 className="text-2xl text-white font-bold font-inter capitalize">
              explore more
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="text-xl text-[#e7e7e7ee] font-medium font-inter capitalize">
                about us
              </li>
              <li className="text-xl text-[#e7e7e7ee] font-medium font-inter capitalize">
                blog
              </li>
              <li className="text-xl text-[#e7e7e7ee] font-medium font-inter capitalize">
                site map
              </li>
              <li className="text-xl text-[#e7e7e7ee] font-medium font-inter capitalize">
                privacy
              </li>
            </ul>
          </div>

          {/* footer wrapper  */}
          <div className="space-y-6">
            <h4 className="text-2xl text-white font-bold font-inter capitalize">
              contact details
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="text-xl text-[#e7e7e7ee] font-medium font-inter capitalize">
                contact@gmail.com
              </li>
              <li className="text-xl text-[#e7e7e7ee] font-medium font-inter capitalize">
                +1(555)123-4567
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
