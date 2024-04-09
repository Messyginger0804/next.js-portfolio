import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { css } from '@emotion/react';

function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (values, actions) => {
        const formElement = form.current;
        if (!formElement) {
            console.error('Form element is not defined.');
            return;
        }

        setLoading(true);

        emailjs.sendForm('service_0fdj2mx', 'template_s2t184g', formElement, '_0eJeVE_0upDw61qU')
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Thank you for your message, I will get back to you ASAP!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error sending your message. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            })
            .finally(() => {
                setLoading(false);
                actions.setSubmitting(false);
            });
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    const override = css`
        display: block;
        margin: 0 auto;
    `;

    return (
        <section id='contact' className='min-h-screen py-10'>
            <h5 className='text-center'>Get In Touch</h5>
            <h3 className='text-center text-3xl py-1 text-sky-300'>Contact Me</h3>
            <div className='grid-cols-2'>
                <div className=''>
                    <div>
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
                        <Formik
                            initialValues={{ name: '', email: '', message: '' }}
                            validationSchema={validationSchema}
                            onSubmit={(values, actions) => {
                                sendEmail(values, actions);
                                actions.resetForm();
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form ref={form} className='flex-col gap-11 px-15 md:px-20 lg:mx-32'>
                                    <div className='shadow-lg shadow-blue-50'>
                                        <Field
                                            className='resize-none w-full p-1 border-2 border-blue-700 bg-transparent'
                                            type='text'
                                            name='name'
                                            placeholder='Full Name'
                                        />
                                        <ErrorMessage name="name" component="div" className="text-red-500" />

                                        <Field
                                            className='resize-none w-full p-1 border-2 bg-transparent border-blue-700'
                                            type='email'
                                            name='email'
                                            placeholder='Your Email'
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500" />

                                        <Field
                                            as='textarea'
                                            className='resize-none w-full p-1 border-2 border-blue-700 bg-transparent'
                                            name='message'
                                            rows='7'
                                            placeholder='Your Message'
                                        />
                                        <ErrorMessage name="message" component="div" className="text-red-500" />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className='hover:bg-white bg-sky-300 p-2 text-gray-800 border-2 border-sky-400'
                                    >
                                        {isSubmitting ? (
                                            'Sending...'
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Contact;
