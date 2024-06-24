import React from 'react'
import collage from '/public/personal/collage.jpg'
import Image from 'next/image'
import Link from 'next/link'


export const AboutMe = () => {
    return (
        <>
            <div className='mx-auto bg-gradient-to-b from-sky-300 rounded-full w-80 h-80 mt-5 mb-4 md:h-96 md:w-96 hover:rotate-12 hover:duration-1000'>
                <Image class='rounded-lg' src={collage} alt='collage of Me & Family' />
            </div>

            <h5 className='text-center'>Get To Know Me</h5>
            <h3 className='text-center text-3xl py-1 text-sky-300'>About Me</h3>
            <div className='lg:mx-40'>
                <div className='flex flex-col md:flex-row gap-1 text-center shadow-lg rounded-xl my-10 w-full'>                    <div className='p-4 m-auto border-2 text-center rounded-xl shadow-sky-400 shadow-xl hover:shadow-sky-300 cursor-pointer'>
                    <h3 className='text-base md:text-lg font-medium'>Blogger</h3>
                    <h4 className='text-sky-200 hover:underline'>
                        <Link href='https://blogsbyjc.vercel.app/'
                            className='text-xs md:tex-base'
                        >
                            Checkout my blog site: Blogs by JC
                        </Link>
                    </h4>
                </div>
                    <div className='p-4 m-auto border-2 text-center rounded-xl shadow-sky-400 shadow-xl hover:shadow-sky-300'>
                        <h3 className='text-base md:text-lg  font-medium'>Experience</h3>
                        <h4 className='text-xs md:tex-base text-sky-200'>15+ years Employee Management Experience</h4>
                    </div>
                    <div className='p-4 m-auto border-2 text-center rounded-xl shadow-sky-400 shadow-xl hover:shadow-sky-300'>
                        <h3 className='text-base md:text-lg font-medium'>Fast Learner</h3>
                        <h4 className='text-xs md:tex-base text-sky-200'>Always Learning New Tech & Skills</h4>
                    </div>
                </div>


                <p className='text-xs md:text-base py-5 tracking-widest leading-5 md:leading-8 lg:mx-20'>
                    I'm a dedicated and committed Software Engineer, passionate about delivering high-quality solutions. As a father of three, I believe in bringing fun and positivity into challenging situations. With a strong track record of success as a freelance developer and Lead Intern Engineer at <a className='underline' target="_blank" href='https://www.iservicewebsites.com/'>iServiceWeb</a>, I've developed a thirst for continuous learning and self-improvement. I aggressively seek out opportunities to enhance my skills and expertise, always looking for ways to improve myself and those around me. My passion lies in the process of creation, and I find joy in the journey of building innovative solutions. With a proven ability to lead teams and deliver results, I'm excited to continue growing as a professional and making meaningful contributions to the tech community.
                </p>
            </div >
        </>
    )
}

export default AboutMe;