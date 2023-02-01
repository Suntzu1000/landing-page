import React from "react";

import { featuresData } from "../data";

import {BsArrowRight} from "react-icons/bs"

const Features = () => {

  const {title, subtitle, list, } = featuresData

  return <section className="my-[70px] xl:my-[150px]">
    <div className="container mx-auto" >
      <div className="text-center" >
        <h2 className="h2 mb-6 xl:mb-12" >{title}</h2>
        <p className="lead max-w-[585px] mx-auto mb-16 xl:mb-24" >{subtitle}</p>
      </div>

      <div>
        {list.map((feature, index) => {

          const {image, bgImage, title, description, linkText, delay} = feature

          return (
            <div></div>
          )
        })}
      </div>
    </div>
  </section>;
};

export default Features;
