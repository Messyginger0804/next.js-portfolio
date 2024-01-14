import React from 'react'
import {
    frontTech,
    backTech,

} from '../data/tech';

function TechStack() {
    return (
        <>
            <h5 className='text-center'>Tools I Use</h5>
            <h3 className='text-center text-3xl py-1 text-sky-300'>My Tech Stack</h3>

            <div className='my-10 flex flex-wrap justify-evenly gap-6'>

                <div className='text-center w-full md:w-1/2 shadow-xl shadow-sky-400 p-10 rounded-xl my-10 hover:shadow-sky-300'>
                    <h3 className='text-lg font-medium pb-2 text-sky-300'>FRONT-END</h3>
                    <div className='flex flex-wrap gap-5 hover:ease-out'>
                        {frontTech.map((tech) =>
                            <article className='text-center flex justify-center gap-1 text-xs md:text-base
                            transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 hover:bg-sky-500 hover:shadow-sky-50 hover:rounded duration-300
                            '>
                                <h4>{tech.icon}</h4><h4>{tech.name}</h4>
                            </article>
                        )}
                    </div>
                </div>
                <div className='text-center p-10 rounded-xl my-10 w-full md:w-1/2 shadow-sky-400 shadow-xl hover:shadow-sky-300'>
                    <h3 className='text-center text-lg font-medium pb-2 text-sky-300'>BACK-END</h3>

                    <div className='flex flex-wrap gap-5 hover:ease-out'>
                        {backTech.map((back) => (
                            <article className='text-center flex justify-center gap-1 text-xs md:text-base
                            transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 hover:bg-sky-500 hover:shadow-sky-50 hover:rounded duration-300
                            '>
                                <h4>{back.icon}</h4><h4>{back.name}</h4>
                            </article>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default TechStack