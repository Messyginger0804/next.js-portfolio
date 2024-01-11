import React from 'react'
import { projects } from 'data/projects'
import Image from 'next/image'
import {
    button, heading
} from 'data/utilities'


function Projects() {
    return (
        <div className='flex justify-center flex-wrap lg:flex gap-5'>
            {projects.map((proj) => (
                <div className='text-center p-10 rounded-xl w-[280px] h-[500px] my-6 max-w-sm relative shadow-sky-400 shadow-xl hover:shadow-sky-300'>
                    {heading(proj.inProgress)}
                    <h3 className='text-lg font-medium pt-2 pb-2'>{proj.title}</h3>
                    <div className='flex justify-center'>
                        <Image
                            className='flex justify-center fit object-center rounded'
                            src={proj.image}
                            width={100}
                            height={100}
                            alt={proj.title}
                        />
                    </div>
                    <h3 className='text-lg font-medium pt-2 pb-2'>{proj.descTitle}</h3>
                    <p className='pb-4 text-xs'>{proj.desc}</p>

                    {/* Buttons container */}
                    <div className='flex justify-evenly absolute bottom-0 left-0 w-full p-4'>
                        <a href={proj.rep} className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>github</a>
                        {button(proj.isPublished, proj.live)}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects