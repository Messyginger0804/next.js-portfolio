import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiTwotoneFolderOpen } from 'react-icons/ai';
import { MdComputer, MdMessage } from 'react-icons/md';

function Navbar() {
    return (
        <nav className="bg-white bg-opacity-75 rounded-full flex justify-center w-fit border border-white border-solid fixed bottom-0 transform -translate-x-1/2 -translate-y-1/2 left-1/2 p-2 z-50">
            <a href='#' className='text-blue-900 p-2 
                hover:bg-sky-300 hover:text-blue-900 hover:rounded-full hover:shadow'><AiOutlineHome className='text-4xl' /></a>
            <a href='#about' className='text-blue-900 p-2 
                hover:bg-sky-300 hover:text-blue-900 hover:rounded-full hover:shadow'><AiOutlineUser className='text-4xl' /></a>
            <a href='#tech stack' className='text-blue-900 p-2 
                hover:bg-sky-300 hover:text-blue-900 hover:rounded-full hover:shadow'><MdComputer className='text-4xl' /></a>
            <a href='#experience' className='text-blue-900 p-2 
                hover:bg-sky-300 hover:text-blue-900 hover:rounded-full hover:shadow'><AiTwotoneFolderOpen className='text-4xl' /></a>
            <a href='#contact' className='text-blue-900 p-2 
                hover:bg-sky-300 hover:text-blue-900 hover:rounded-full hover:shadow'><MdMessage className='text-4xl' /></a>
        </nav>
    );
}

export default Navbar;
