import React from 'react';
import { projects } from 'data/projects';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <div className=''>
            <div className='flex justify-center flex-wrap lg:flex gap-5'>
                <ProjectCard projects={projects} />
            </div >
        </div >
    );
}

export default Projects;
