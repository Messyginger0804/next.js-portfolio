import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiTwotoneFolderOpen } from 'react-icons/ai';
import { MdComputer, MdMessage } from 'react-icons/md';


function Navbar() {
    return (
        <nav class="bg-white bg-opacity-75 rounded-full flex justify-center w-fit border border-white border-solid fixed bottom-0 transform -translate-x-1/2 -translate-y-1/2 left-1/2 p-2">
            <a href='#' class='text-blue-900 p-2 
        hover:bg-sky-300 hover:text-blue-900 hover:rounded-full hover:shadow'><AiOutlineHome class='text-4xl' /></a>
            <a href='#about' class='text-blue-900 p-2 
        hover:bg-sky-300 hover:text-blue-900 hover:rounded-full hover:shadow'><AiOutlineUser class='text-4xl' /></a>
            <a href='#tech stack' class='text-blue-900 p-2 
        hover:bg-sky-300 hover:text-blue-900 hover:rounded-full hover:shadow'><MdComputer class='text-4xl' /></a>
            <a href='#experience' class='text-blue-900 p-2 
        hover:bg-sky-300 hover:text-blue-900 hover:rounded-full hover:shadow'><AiTwotoneFolderOpen class='text-4xl' /></a>
            <a href='#contact' class='text-blue-900 p-2 
        hover:bg-sky-300 hover:text-blue-900 hover:rounded-full hover:shadow'><MdMessage class='text-4xl' /></a>
        </nav>
    )
}

export default Navbar