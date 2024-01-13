// SlideShow.jsx

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';
import ProjectCard from './ProjectCard';
import { projects } from 'data/projects';

function SlideShow() {
    return (
        <div className="flex justify-center items-center h-screen relative w-fit">
            <Carousel
                className=''
                // height={500}
                // width={500}
                NextIcon={<BiArrowToRight className="text-4xl text-white" />}
                PrevIcon={<BiArrowToLeft className="text-4xl text-white" />}
            >
                {projects.map((proj) => (
                    <ProjectCard key={proj.title} project={proj} />
                ))}
            </Carousel>
        </div>
    );
}

export default SlideShow;
