import { link } from 'data/utilities'
import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'


function Footer() {
    return (
        <footer className='bg-sky-300 text-center pt-10 pb-20'>
            <a href='#' className='text-black'>JC Ashley</a>
            <h5>Fullstack Developer</h5>

            <ul className='flex justify-center gap-6 md:gap-11 text-base md:text-lg text-black'>
                <li> <a href='#'>Home</a> </li>
                <li> <a href='#about'>About</a> </li>
                <li> <a href='#experience'>Experience</a> </li>
                <li> <a href='#projects'>Projects</a> </li>
                <li> <a href='#contact'>Contact Me</a> </li>
            </ul>

            <div className='flex justify-center mt-6 mb-6 gap-11 text-3xl text-black'>
                <a target='_blank' className='hover:text-white' href={link.linkedin}><AiFillLinkedin /></a>
                <a target='_blank' className='hover:text-white' href={link.github}><AiFillGithub /></a>
                <a target='_blank' className='hover:text-white' href={link.twitter}><AiFillTwitterCircle /></a>
            </div>
            <a className='underline' href={link.blog} target='_blank'>Check out my Blog site</a>

        </footer>
    )
}

export default Footer