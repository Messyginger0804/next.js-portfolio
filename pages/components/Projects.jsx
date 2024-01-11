import React from 'react';
import { projects } from 'data/projects';
import Image from 'next/image';
import { button, heading, truncateText } from 'data/utilities'; // Import the truncateText function

function Projects() {
    const maxDescLength = 150; // Set your desired maximum length for the project description

    return (
        <div className='flex justify-center flex-wrap lg:flex gap-5 '>
            {projects.map((proj) => (
                <div className='text-center p-10 rounded-xl w-[280px] h-[400px] my-6 max-w-sm relative shadow-sky-400 shadow-xl hover:shadow-sky-300 '>
                    <div className='flex flex-col justify-center h-[400px] relative top-1/2 transform -translate-y-1/2'>
                        <h3 className='text-lg font-medium'>{proj.title}</h3>

                        <div className='flex justify-center mb-0'>
                            <Image
                                className='fit object-center rounded'
                                src={proj.image}
                                width={100}
                                height={100}
                                alt={proj.title}
                            />
                            {heading(proj.inProgress)}
                        </div>

                        {/* Description container */}
                        <div className='h-[150px] my-2'>
                            <h3 className='text-lg font-medium pt-1 pb-1'>{proj.descTitle}</h3>
                            <p className='text-xs custom-scrollbar'>{truncateText(proj.desc, maxDescLength)}</p>
                        </div>
                    </div>

                    {/* Buttons container */}
                    <div className='flex justify-evenly absolute bottom-0 left-0 w-full p-2'>
                        <a href={proj.rep} className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>github</a>
                        {button(proj.isPublished, proj.live)}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
