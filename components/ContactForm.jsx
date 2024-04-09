import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { css } from '@emotion/react';
import ContactSection from './ContactSection';

function ContactForm() {
    const form = useRef();

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
                        <ContactSection />
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

export default ContactForm;
