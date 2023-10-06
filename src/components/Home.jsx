import ComputersCanvas from "./canvas/Computer";
import "../css/Home.css"
import leetcode from '../assets/tech_stacks/leetcode.png'

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-heading">
          <h1 className="home-head-text"> Hi, I'm <span>{process.env.REACT_APP_MY_NAME}</span> </h1>
          <p className="home-sub-text"> I am a skilled web developer</p>
        </div>

        <div class="social-media">
          <a href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noopener noreferrer"> <i class='bx bxl-linkedin'></i> </a>
          <a href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noopener noreferrer"> <i class='bx bxl-github'></i> </a>
          <a href={process.env.REACT_APP_GMAIL_URL} target="_blank" rel="noopener noreferrer"> <i class='bx bxl-gmail'></i> </a>
          <a href={process.env.REACT_APP_LEETCODE_URL} target="_blank" rel="noopener noreferrer"><img src={leetcode} alt="" width={'20px'} height={'20px'} /></a>
         
        </div>

        <div className="home_buttons">
          <a href={process.env.REACT_APP_LATEST_PROJECT} target="_blank" rel="noopener noreferrer"> <i className='bx bx-link-external'></i> &ensp; Latest Project</a>
          <a href={process.env.REACT_APP_RESUME_LINK} target="_blank" rel="noopener noreferrer"><i className='bx bxs-file-png'></i> &ensp; Resume</a>
        </div>
      </div>
     <div className="computer_canvas">
     <ComputersCanvas />
     </div>
      
    </section>
  );
};


