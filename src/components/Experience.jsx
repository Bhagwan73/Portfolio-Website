

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../css/Experiences.css'
import { experiences } from './constant';

function ExperienceCard({experience}){
    return(
        <VerticalTimelineElement
        contentStyle={{  background: 'rgba(5, 174, 124, 0.29)', color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={experience.date}
        iconStyle={{ background: 'rgb(7, 4, 18)' }}
        icon={
          <div className='experience_icon'>
            <img src={experience.icon} alt="experience_icon" className='icon_image' />
          </div>
        }
      >
        <div>
          <h3 className='experience_title'>{experience.title}</h3>
        </div>
  
        <ul className='experince_points_list'>
          {experience.points.map((point, index) => (
            <li  key={`experience-${index}`} className='experience_point' >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    )
}



export default function Experience() {
    return (

      <div className='experience_section' id="experience">
        <div>
          <p className="heading-subtext">What I have done so far</p>
          <h2 className="heading" style={{paddingBottom:'30px'}}>Work Experience.</h2>
        </div>
     
        <VerticalTimeline>
           {
            experiences.map((experience,index)=>{
                return(
                   <ExperienceCard experience={experience} key={index}/> 
                )
            })
           }
        </VerticalTimeline>
        </div>
    )
}