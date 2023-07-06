import { motion } from "framer-motion";
import ComputersCanvas from "./canvas/Computer";

export default function Home() {
  return (
    <section id="home" className="home-container">
      <div className="home-content">
        <div className="home-shape">
          <div className="dot" />
          <div className="line" />
        </div>
        <div className="home-text">
          <h1 className="home-head-text">
            Hi, I'm <span>{process.env.REACT_APP_MY_NAME}</span>
          </h1>
          <p className="home-sub-text"> I am a skilled web developer</p>
          <div class="social-media">
            <a href={process.env.REACT_APP_LINKEDIN_URL}> <i
              class='bx bxl-linkedin'></i> </a>
            <a href={process.env.REACT_APP_GITHUB_URL}> <i class='bx bxl-github'></i> </a>
            <a href={process.env.REACT_APP_GMAIL_URL}> <i class='bx bxl-gmail'></i> </a>
          </div>

          <div className="home_buttons">
            <a href={process.env.REACT_APP_LATEST_PROJECT}>Latest Project</a>
            <a href={process.env.REACT_APP_RESUME_LINK}>See Resume</a>
          </div>
        </div>
      </div>
      <ComputersCanvas />
      <div className="home-navigation">
        <a href="#about">
          <div className="home-navigation-link">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="dot-animation"
            />
          </div>
        </a>
      </div>
    </section>
  );
};


