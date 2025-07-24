import React from "react";
import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";
import Expertise from "../../components/Expertise/Expertise";
import OurService from "../../components/OurService/OurService";
import Testimonial from "../../components/Testimonial/Testimonial ";
import Team from "../../components/Team/Team";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className="w-full bg-white">
      <div className="lg:container mx-auto">
        <div>
          <Banner />
        </div>
        <div>
          <Brand />
        </div>
        <div>
          <Expertise />
        </div>
        <div id="service">
          <OurService />
        </div>
        <div>
          <Testimonial />
        </div>
        <div>
          <Team />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
