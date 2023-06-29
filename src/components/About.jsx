import { Tilt } from "react-tilt";
import web from "../assets/service_cards/web.png"
import backend from "../assets/service_cards/backend.png"


function ServiceCard({ props }) {
  return (
    <Tilt className='card'>
      <div className="card-content">
        <div className='card-options'>
          <img src={props.icon} alt='web-development' className='card-logo' />
          <h3 className='card-title'> {props.title} </h3>
        </div>
      </div>
    </Tilt>
  )
}

export default function About() {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        <div>
          <p className="heading-subtext">Introduction</p>
          <h2 className="heading">Overview.</h2>
        </div>
        <p className="discription">
          Hello, I'm a skilled software developer with a strong focus on Node.js. I have extensive experience
          in building web applications, and I'm proficient in other technologies like MongoDB, Express.js,
          JavaScript, and ReactJS, which complement my Node.js expertise.I'm a quick learner and  create efficient,
          scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
        </p>
      </div>

      <div className="service-card-container">
        <ServiceCard props={{ title: "web developer", icon: web}} />
        <ServiceCard props={{ title: "backend developer", icon: backend}} />
      </div>
    </section>
  );
};
