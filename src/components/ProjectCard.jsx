
import '../css/Projects.css'
import redis from '../assets/tech_stacks/redis.png'

function ProjectCard({ name ,background , githubLink ,liveLink}) {
    return (
        <div className="project-card"  style={{backgroundImage:`url(${background})`}}>
            <div className="project_card_content">
                <h3 className="project-name">{name}</h3>
                <div className="social-media" style={{borderBottom:"1px solid yellow",marginBottom:"2px",width:"100%",display:"flex",justifyContent:"center"}}>
                <a href={githubLink} target='blank' rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                <a href={liveLink} target='blank' rel="noopener noreferrer" onClick={()=>liveLink?"":alert("This is a backend project.")}><i className='bx bx-link'></i></a>
            </div>
            </div>
        </div>
    );
}


function ProjectSlideContent({project}) {
    const { name, description, tags , githubLink ,liveLink}=project
    return (
        <div className="project_content">
            <h2 className="heading">{name}</h2>
            <p className="discription">
                {description}
            </p>
            <div className="project_slide_buttons">
                <a href={githubLink} target='blank' rel="noopener noreferrer"><i className='bx bxl-github'></i>GitHub</a>
                <a href={liveLink} target='blank' rel="noopener noreferrer" onClick={()=>liveLink?"":alert("This is a backend project.")}><i className='bx bx-link'></i>Live</a>
            </div>

            <section className="project_slide_tech_stacks">
                  {tags.map((tag,index)=>{
                      return (
                        tag ==="express" ? <div style={{fontSize:"19px"}} key={index}>ex</div>
                        : tag ==="redis" ? <div><img src={redis} alt="redis" width={'25px'} height={'25px'} /> </div>
                        : tag ==="microphone"  ?  <div key={index}> <i className="bx bxs-microphone"></i> </div>
                        : <div key={index}> <i className={`bx bxl-${tag}`}></i> </div>
                      )
                  })}
            </section>

        </div>
    )
}



export { ProjectCard, ProjectSlideContent }
