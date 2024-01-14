import React from 'react';
// import { projects } from 'data/projects';
import ProjectCard from './ProjectCard';

function Projects({ projects }) {
    return (
        <>
            {projects?.map((proj) => (
                <div className='flex justify-center gap-3'>
                    <ProjectCard
                        key={proj.title}
                        proj={proj}
                    />
                </div>
            ))}
        </>
    );
}

export default Projects;
