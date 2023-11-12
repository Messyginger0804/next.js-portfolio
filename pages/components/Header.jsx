import React from 'react'
import MyTitles from './MyTitles';
import Image from 'next/image';
import JC from '../../public/jc-as-a-sentare.png'




function Header() {
    return (
        <header className='text-center p-10 py-10'>
            <h1 className="text-xl text-sky-100">Hello I'm</h1>
            <h2 className='text-2xl py-2 text-sky-300 font-medium md:text-6xl'>Jeremy "JC" Ashley</h2>
            <MyTitles />

            {/* CTA buttons */}
            <div className='flex justify-center gap-2 md:gap-4 text-xs md:text-sm'>
                <a href='https://drive.google.com/file/d/1rp7fh3JPqZrIEaAeRySZkE4FO82GM1wb/view?usp=sharing' target='_blank' className='hover:bg-white p-1 md:p-2 text-sky-400 border-2 border-sky-400'>
                    Resume</a>
                <a className='hover:bg-white bg-sky-300 p-1 md:p-2 text-gray-800 border-2 border-sky-400' href="#contact">Contact Me</a>
                <a className='hover:bg-white  p-1 md:p-2 text-sky-400 border-2 border-sky-400' target='_blank' href="https://blogsbyjc.vercel.app/">
                    My Blog</a>
            </div>

            <div className='mx-auto p-4 w-100 h-80 mt-5 mb:5 md:mb-20
       md:h-96 md:w-96 lg:md-80 lg:80'>
                <Image
                    src={JC}
                    // height={300}
                    // width={300}
                    priority
                />
            </div>

        </header >
    )
}

export default Header