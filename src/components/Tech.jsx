import React from "react";
import { Tilt } from "react-tilt";
import { techs } from "./constant";
import '../css/Tech.css'

export default function Tech(){
  return (
    <section className="tech-section" id="tech">
      <div className="tech-content">
        <div>
          <p className="heading-subtext">Tech Stack Proficiency</p>
          <h2 className="heading">Tech Stacks</h2>
          <p className="discription">These are the technologies I've worked with</p>
        </div>

        <div className="tech-grid">
          {techs.map(({ id, src, title,style }) => (
            <Tilt key={id} className={style}>
              <img src={src} alt="" />
              <p>{title}</p>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};


