import React from 'react'
import MyTitles from './MyTitles';


function Header() {
    return (
        <header className='text-center p-10 py-10'>
            <h1 className="text-xl text-sky-100">Hello I'm</h1>
            <h2 className='text-2xl py-2 text-sky-300 font-medium md:text-6xl'>Jeremy "JC" Ashley</h2>
            <MyTitles />

            {/* CTA buttons */}
            <div className='flex justify-center gap-2 md:gap-4 text-xs md:text-sm'>
                <a href='https://docs.google.com/document/d/1RKXHEvojNWQrJNanXaVbimYQfSzfR9mi8xg2iCCneJo/edit?usp=drive_link' target='_blank' className='btn-primary'>
                    Resume</a>
                <a className='hover:bg-white bg-sky-300 p-1 md:p-2 text-gray-800 border-2 border-sky-400 rounded-lg' href="#contact">Contact Me</a>
                <a
                    className='btn-primary'
                    target='_blank' href="https://blogsbyjc.vercel.app/">
                    My Blog</a>
            </div>
        </header >
    )

}


export default Header