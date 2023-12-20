import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiTwotoneFolderOpen } from 'react-icons/ai';
import { MdComputer, MdMessage } from 'react-icons/md';


function Navbar() {
    return (
        <div className='bg-blue-300 rounded-full flex justify-center w-ful'>
            <nav className='flex justify-center inset-x-2/4 bottom-2 gap-8 p-2 fixed content-center'>
                <a href='#' className='bg-transparent shadow-lg shadow-sky-400 hover:shadow-sky-500 hover:bg-sky-300 hover:text-blue-900'
                ><AiOutlineHome className='text-4xl' /></a>
                <a href='#about' className='bg-transparent shadow-lg shadow-sky-400 hover:shadow-sky-500 hover:bg-sky-300 hover:text-blue-900'
                ><AiOutlineUser className='text-4xl' /></a>
                <a href='#tech stack' className='bg-transparent shadow-lg shadow-sky-400 hover:shadow-sky-500 hover:bg-sky-300 hover:text-blue-900'
                ><MdComputer className='text-4xl' /></a>
                <a href='#experience' className='bg-transparent shadow-lg shadow-sky-400 hover:shadow-sky-500 hover:bg-sky-300 hover:text-blue-900'
                ><AiTwotoneFolderOpen className='text-4xl' /></a>

                <a href='#contact' className='bg-transparent shadow-lg shadow-sky-400 hover:shadow-sky-500 hover:bg-sky-300 hover:text-blue-900'
                ><MdMessage className='text-4xl' />
                </a>
            </nav >
        </div>
    )
}

export default Navbar