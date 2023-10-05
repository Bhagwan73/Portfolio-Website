import React, { useState } from "react";
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow';
import { ProjectCard, ProjectSlideContent } from "./ProjectCard";
import { projects } from './constant';
import '../css/Projects.css'

export default function Projects() {
    const [selectedCard, setSelectedCard] = useState(1)
    const [swiped, setSwiped] = useState(null)

    const handleClick = (event) => {
        if (event === "next" && swiped) {
            setSelectedCard(selectedCard <= 5 ? selectedCard + 1 : 0)
        }
        if (event === "back" && swiped) {
            setSelectedCard(selectedCard > 0 ? selectedCard - 1 : 6)
        }
        setSwiped(false)
    }

    return (
        <section id="projects" className="project_section" >
        <div>
          <p className="heading-subtext">My works </p>
          <h2 className="heading">Projects</h2>
          <p className="discription">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
          </p>
        </div>

            <div className="project_bg" style={{ backgroundImage: `url(${projects[selectedCard].background})` }}>
                <ProjectSlideContent project={projects[selectedCard]} />
                <div className="project_slider">
                    <Swiper
                        modules={[Navigation, Pagination, A11y, EffectCoverflow]}
                        spaceBetween={50}
                        slidesPerView={3}
                        loop={true}
                        
                        centeredSlides={false}
                        navigation={{
                            nextEl: ".next_button",
                            prevEl: ".pre_button",
                            clickable: true
                        }}
                        pagination={{ el: ".pagination" }}
                        onSlideChange={() => setSwiped(true)}
                        effect="coverflow"
                        allowTouchMove={false}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 3
                        }}
                        className='slider'
                        preloadImages={false} 
                        lazy={false} 
                    >
                         <SwiperSlide> <ProjectCard key={0} {...projects[0]} /> </SwiperSlide>
                         <SwiperSlide> <ProjectCard key={1} {...projects[1]} /> </SwiperSlide>
                         <SwiperSlide> <ProjectCard key={2} {...projects[2]} /> </SwiperSlide>
                         <SwiperSlide> <ProjectCard key={3} {...projects[3]} /> </SwiperSlide>
                         <SwiperSlide> <ProjectCard key={4} {...projects[4]} /> </SwiperSlide>
                         <SwiperSlide> <ProjectCard key={5} {...projects[5]} /> </SwiperSlide>
                         <SwiperSlide> <ProjectCard key={6} {...projects[6]} /> </SwiperSlide>

                    </Swiper>

                    <div className='buttons'>
                    <div className='pre_button' onClick={() => handleClick("back")} ><i className='bx bx-left-arrow-circle' ></i> </div>
                    <div className='pagination'></div>
                    <div className='next_button' onClick={() => handleClick("next")}>  <i className='bx bx-right-arrow-circle'></i> </div>
                </div>
            </div>

                </div>
        </section>
    )
}

