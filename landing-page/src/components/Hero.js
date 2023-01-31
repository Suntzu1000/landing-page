import React from "react";

import { heroData } from "../data";

const Hero = () => {
  const { title, subtitle, btnText, image } = heroData;

  return (
    <section className="lg:h-[900px] py-12">
      <div className="container mx-auto h-full relative">
        <div>
          <div>
            <h1 className="h1 xl:max-w-[700px] mb-6 lg:mb-12 ">{title}</h1>
            <p className="xl:max-w-[380px] mb-6 lg:mb-12"> {subtitle} </p>
            <button className="btn btn-primary mb-8 xl:mb-0" >{btnText}</button>
          </div>

          <div className="xl:absolute xl:right-12 xl:bottom-16" >
            <img src={image} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
