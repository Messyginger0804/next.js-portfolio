import React from 'react'

import { projects } from 'data/projects'
import Image from 'next/image'

const heading = (x) => {
    if (x) {
        return <h2 className='text-xl font-medium p-0 m-0 text-red-300 hover:text-red-700'>Work in progress</h2>
    }
}
// const button = (x, y) => {
//     if (x) {
//         return <div className='hover:bg-white p-2 hover:cursor-not-allowed text-sky-400 border-2 border-sky-400 rounded-lg' >Live Site</div>
//     } else {
//         // return
//         <a href={y} className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Live Site</a>
//     }
// }


function Projects() {
    return (
        <div className=' flex justify-center flex-wrap lg:flex gap-5'>
            {projects.map((proj) => (
                <div className='text-center p-10 rounded-xl  my-10 max-w-sm shadow-sky-400 shadow-xl hover:shadow-sky-300'>

                    {
                        heading(proj.inProgress)
                    }
                    <h3 className='text-lg font-medium pt-8 pb-2'>{proj.title}</h3>
                    <div className='flex justify-center'>
                        <Image
                            className='flex justify-center fit object-center rounded'
                            src={proj.image}
                            width={100}
                            height={100}
                            alt={proj.title}
                        />
                    </div>
                    <h3 className='text-lg font-medium pt-8 pb-2'>{proj.descTitle}</h3>
                    <p className='pb-4 text-xs'>{proj.desc}</p>
                    <div className='flex justify-center gap-5'>
                        <a href={proj.rep} className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>github</a>
                        <a href={proj.live} className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Live Site</a>
                        {/* {
                            button(proj.inProgress, proj.live)
                        } */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects