import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'


function Footer() {
    return (
        <footer className='bg-sky-300 text-center pt-10 pb-20'>
            <a href='#' className='text-black'>JC Ashley</a>
            <h5>Fullstack Developer</h5>

            <ul className='flex justify-center gap-6 md:gap-11 text-xl text-black'>
                <li> <a href='#'>Home</a> </li>
                <li> <a href='#about'>About</a> </li>
                <li> <a href='#experience'>Experience</a> </li>
                <li> <a href='#projects'>Projects</a> </li>
                <li> <a href='#contact'>Contact Me</a> </li>
            </ul>


            <div className='flex justify-center mt-6 mb-6 gap-11 text-3xl text-black'>
                <a className='hover:text-white' href='https://www.linkedin.com/in/jeremy-ashley-webdev/'><AiFillLinkedin /></a>
                <a className='hover:text-white' href='https://github.com/Messyginger0804'><AiFillGithub /></a>
                <a className='hover:text-white' href='https://twitter.com/Messyginger0804'><AiFillTwitterCircle /></a>
            </div>
            <a className='underline' href='https://blogsbyjc.vercel.app/' target='_blank'>Check out my Blog site</a>

        </footer>
    )
}

export default Footer