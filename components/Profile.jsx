import Image from 'next/image'
import React from 'react'
import { link } from 'data/utilities'
import JC from '../public/projectImages/justme.png'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'


function Profile() {
    return (
        <>
            <div className="mx-auto bg-gradient-to-b from-sky-500 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
                <Image
                    src={JC}
                    alt="JC"
                    priority
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-white '>
                <a href={link.linkedin} target='_blank'>
                    <AiFillLinkedin className='shadow-lg shadow-sky-300 rounded-full hover:text-sky-500 hover:cursor-pointer' /> </a>
                <a href={link.github} target='_blank'><AiFillGithub className='shadow-lg shadow-sky-300 rounded-full hover:text-sky-500 hover:cursor-pointer' /></a>
                <a href={link.twitter} target='_blank'><AiFillTwitterCircle className='shadow-lg shadow-sky-300 rounded-full hover:text-sky-500 hover:cursor-pointer' /></a>
            </div>
        </>
    )
}

export default Profile