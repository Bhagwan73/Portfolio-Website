import React from "react";
import { Tilt } from "react-tilt";
import { techs } from "./constant";


export default function Experience(){
  return (
    <section className="experience-container" id="experience">
      <div className="experience-content">
        <div>
          <p className="heading-subtext">Tech Stack Proficiency</p>
          <h2 className="heading">Experience</h2>
          <p className="discription">These are the technologies I've worked with</p>
        </div>

        <div className="tech-grid">
          {techs.map(({ id, src, title,style }) => (
            <Tilt key={id} className={style}>
              <img src={src} alt="" />
              <p className="mt-4">{title}</p>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};


