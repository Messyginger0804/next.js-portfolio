// SlideShow.jsx

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';
import ProjectCard from './ProjectCard';
// import { projects } from 'data/projects';

function SlideShow({ projects }) {
    return (
        <div className="w-3/4 m-auto">
            <Carousel
                // key={projects.title}
                NextIcon={<BiArrowToRight className="text-4xl text-white " />}
                PrevIcon={<BiArrowToLeft className="text-4xl text-white" />}
            >
                {projects.map((proj) => (
                    <div className='flex justify-center gap-3'>
                        <ProjectCard key={proj.title} proj={proj} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default SlideShow;
