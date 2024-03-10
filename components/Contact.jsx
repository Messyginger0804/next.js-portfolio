'use client'

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';




function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0fdj2mx', 'template_s2t184g', form.current, '_0eJeVE_0upDw61qU')
            // .then(toast('Thank you for your message, I will get back to you ASAP!'))
            .then(toast(
                <h3 className='text-center text-4xl'>Thank you for your message, I will get back to you ASAP!</h3>
            ))
        // .then(toast(''))
        e.target.reset();

    };
    return (
        <section id='contact' className='min-h-screen py-10'>
            <h5 className='text-center'>Get In Touch</h5>
            <h3 className='text-center text-3xl py-1 text-sky-300'>Contact Me</h3>
            <div className='grid-cols-2'>
                <div className=''>

                    <div>
                        <div className='lg:flex justify-center gap-10 p-10'>
                            <a href='mailto:j.c.ashley4363@gmail.com' target='_blank'>
                                <article className='text-center shadow-xl shadow-sky-400 p-10 rounded-xl my-10 hover:shadow-sky-300'>
                                    <AiOutlineMail className='text-4xl' />
                                    <h4 className='text-2xl font-bold'>Email</h4>
                                    <h5>j.c.ashley4363@gmail.com</h5>
                                    <a>Send A Message</a>
                                </article>
                            </a>
                            <a href='https://www.linkedin.com/in/jeremy-ashley-webdev/' target='_blank'>
                                <article className='text-center shadow-xl shadow-sky-400 p-10 rounded-xl my-10 hover:shadow-sky-300'>
                                    <AiFillLinkedin className='text-4xl' />
                                    <h4 className='text-2xl font-bold'>Linkedin</h4>
                                    <h5>Checkout My Profile</h5>
                                    <a>Send A Message</a>
                                </article>
                            </a>

                        </div>
                        <form
                            ref={form} onSubmit={sendEmail}
                            className='flex-col gap-11 px-15 md:px-20 lg:mx-32'
                        // ref={form} onSubmit={sendEmail(e)}
                        >
                            <div className='shadow-lg shadow-blue-50'>

                                <input className='resize-none w-full p-1 border-2 border-blue-700 bg-transparent' type='text' name='name' placeholder='full name' required />
                                <input className='resize-none w-full p-1 border-2 bg-transparent border-blue-700' type='email' name='email' placeholder='youremail@email.com' required />
                                <textarea className='resize-none w-full p-1 border-2 border-blue-700 bg-transparent' name='message' rows='7' placeholder='your message' required></textarea>
                            </div>
                            <button type="submit" className='hover:bg-white bg-sky-300 p-2 text-gray-800 border-2 border-sky-400'>Send Message</button>
                        </form>
                    </div>
                </div>
                <ToastContainer
                    lt
                    position="top-left"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    draggable
                    pauseOnHover
                    theme="dark" />
            </div>
        </section >
    )
}

export default Contact;