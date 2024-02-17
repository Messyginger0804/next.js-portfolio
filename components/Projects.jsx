import React from 'react';
import ProjectCard from './ProjectCard';

function Projects({ projects }) {
    return (
        <div className='relative z-10'>
            <div className='flex justify-center flex-wrap lg:flex gap-5'>
                {projects?.map((proj) => (
                    <div className='flex justify-center gap-3'>
                        <ProjectCard
                            key={proj.title}
                            proj={proj}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
