import React from "react";

import * as styles from "./index.module.scss";

const Hero = ({ data }) => {
  return (
    <section className={` ${styles.heroSection} relative`}>
      <div
        className={`absolute top-0 right-0 left-0 bottom-0 ${styles.overlay} `}
        // style={{
        //   backgroundImage: url(path),
        // }}
      ></div>
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="absolute left-0 ml-24">
          <h1 className="text-primary text-5xl ">{data.title}</h1>
          <h1 className="text-white text-4xl font-thin">{data.subtitle}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
