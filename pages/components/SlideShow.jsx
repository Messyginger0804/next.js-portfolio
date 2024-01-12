import React from 'react';
import Carousel from 'material-ui-carousel';
import Projects from 'pages/components/Projects';
import { projects } from 'data/projects';

function ProjectsCarousel(projects) {

    return (
        <Carousel>
            {projects.map((project) => (
                <Projects key={projects.title} {...project} />
            ))}
        </Carousel>
    );
}

export default ProjectsCarousel;
