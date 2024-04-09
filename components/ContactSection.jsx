import React from 'react'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';


const ContactSection = () => {
    return (
        <>
            <div className='lg:flex justify-center gap-10 p-10'>
                <a href='mailto:j.c.ashley4363@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <article className='text-center shadow-xl shadow-sky-400 p-10 rounded-xl my-10 hover:shadow-sky-300'>
                        <AiOutlineMail className='text-4xl' />
                        <h4 className='text-2xl font-bold'>Email</h4>
                        <h5>j.c.ashley4363@gmail.com</h5>
                        <a>Send A Message</a>
                    </article>
                </a>
                <a href='https://www.linkedin.com/in/jeremy-ashley-webdev/' target='_blank' rel='noopener noreferrer'>
                    <article className='text-center shadow-xl shadow-sky-400 p-10 rounded-xl my-10 hover:shadow-sky-300'>
                        <AiFillLinkedin className='text-4xl' />
                        <h4 className='text-2xl font-bold'>Linkedin</h4>
                        <h5>Checkout My Profile</h5>
                        <a>Send A Message</a>
                    </article>
                </a>
            </div>
        </>
    )
}

export default ContactSection