import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
// import { BsFillMoonStarsFill } from 'react-icons/bs'
import JC from '../public/jc-as-a-sentare.jpg'
import collage from '../public/collage.jpg'
import Image from 'next/image';
import pro1 from '../public/catco-logo.jpg'
import pro2 from '../public/port.jpg'
import pro3 from '../public/Tic_tac_toe.svg.png'
import pro4 from '../public/google.jpg'
// import { resume } from '../public/resume.pdf'
import { FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { MdComputer, MdMessage } from 'react-icons/md';
import { DiJavascript, DiCss3 } from 'react-icons/di';
import { AiFillHtml5, AiOutlineMail, AiOutlineWhatsApp, AiOutlineHome, AiOutlineUser, AiTwotoneFolderOpen } from 'react-icons/ai';
import { SiPostgresql, SiExpress, SiTailwindcss, SiAcademia } from 'react-icons/si';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




function Home() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yykgw9e', 'template_s2t184g', form.current, '_0eJeVE_0upDw61qU')

  };



  return (
    <div className='text-white'>
      <Head>
        <title>Jeremy's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-[#19184a] px-5 md:px-20 lg:px-40 overflow-x-hidden'>

        {/* HOMEPAGE */}
        <section id='/' className='min-h-screen'>

          {/* home page */}
          <div className='text-center p-10 py-10'>
            <h1 className="text-xl text-sky-100">Hello I'm</h1>
            <h2 className='text-5xl py-2 text-sky-300 font-medium md:text-6xl'>Jeremy "JC" Ashley</h2>
            <h3 className='text-2xl py-2 text-blue-50 md:text-3xl'>Fullstack Developer</h3>

            {/* CTA buttons */}
            <div className='flex justify-center gap-4'>
              <a href='https://drive.google.com/file/d/1PTs2p8KC8KkG0dCMQwpoOxJr26c4Qgw4/view?usp=share_link' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400'>
                Resume</a>
              <a className='hover:bg-white bg-sky-300 p-2 text-gray-800 border-2 border-sky-400' href="#contact">Contact Me</a>
            </div>

            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-100 h-80 mt-5 mb-40 md:h-96 md:w-96 lg:md-80 lg:80'>
              <Image src={JC}
              />
            </div>

          </div >
          <div className=' text-5xl flex justify-center gap-16 py-3 text-white '>
            <a href='https://www.linkedin.com/in/jeremy-ashley-webdev/'> <AiFillLinkedin className='shadow-lg shadow-sky-300 rounded-full hover:text-sky-500 hover:cursor-pointer' /> </a>
            <a href='https://github.com/Messyginger0804'><AiFillGithub className='shadow-lg shadow-sky-300 rounded-full hover:text-sky-500 hover:cursor-pointer' /></a>
            <a href='https://twitter.com/Messyginger0804'><AiFillTwitterCircle className='shadow-lg shadow-sky-300 rounded-full hover:text-sky-500 hover:cursor-pointer' /></a>
          </div>

          <nav className='bg-[rgba(0, 0, 100, 0.3)] flex justify-center inset-x-2/4 bottom-2 gap-8 p-2 rounded-full fixed'>
            <a href='#' className='bg-transparent shadow-lg shadow-sky-400 hover:shadow-sky-500 hover:bg-sky-300 hover:text-blue-900'
            ><AiOutlineHome className='text-4xl' /></a>
            <a href='#about' className='bg-transparent shadow-lg shadow-sky-400 hover:shadow-sky-500 hover:bg-sky-300 hover:text-blue-900'
            ><AiOutlineUser className='text-4xl' /></a>
            <a href='#experience' className='bg-transparent shadow-lg shadow-sky-400 hover:shadow-sky-500 hover:bg-sky-300 hover:text-blue-900'
            ><MdComputer className='text-4xl' /></a>
            <a href='#projects' className='bg-transparent shadow-lg shadow-sky-400 hover:shadow-sky-500 hover:bg-sky-300 hover:text-blue-900'
            ><AiTwotoneFolderOpen className='text-4xl' /></a>

            <a href='#contact' className='bg-transparent shadow-lg shadow-sky-400 hover:shadow-sky-500 hover:bg-sky-300 hover:text-blue-900'
            ><MdMessage className='text-4xl' />
            </a>
          </nav >

        </section>

        {/* SECTION 2 ---- ABOUT ME----*/}
        <section id='about' className='min-h-screen mt-60 my-8'>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 mb-4 md:h-96 md:w-96 hover:rotate-12 hover:duration-1000'>
            <Image src={collage} />
          </div>

          <h5 className='text-center'>Get To Know Me</h5>
          <h3 className='text-center text-3xl py-1 text-sky-300'>About Me</h3>
          <div className='lg:mx-40'>
            <div className='flex text-center shadow-lg rounded-xl my-10'>
              <div className='p-2 m-auto border-2 text-center rounded-xl shadow-sky-400 shadow-xl hover:shadow-sky-300 cursor-none'>
                <h3 className='text-lg font-medium'>Famiy Man</h3>
                <h4 className=' text-sky-200'>Loving Husband and Father of Three</h4>
              </div>
              <div className='p-2 m-auto border-2 text-center rounded-xl shadow-sky-400 shadow-xl hover:shadow-sky-300 cursor-none'>
                <h3 className='text-lg font-medium'>Experience</h3>
                <h4 className=' text-sky-200'>15+ years Employee Management Experience</h4>
              </div>
              <div className='p-2 m-auto border-2 text-center rounded-xl shadow-sky-400 shadow-xl hover:shadow-sky-300 cursor-none'>
                <h3 className='text-lg font-medium'>Fast Learner</h3>
                <h4 className=' text-sky-200'>Always Learning New Tech & Skills</h4>
              </div>
            </div>

            <p className='text-medium py-5 leading-8 lg:mx-20'>

              I'm a trained Software Engineer and father of 3 that embraces values of dedication and commitment. I always find ways to bring fun and buoyancy into stressful situations.

              I aggressively and effectively seek out ways to improve both myself and those around me. My desire for consuming documentation and acquiring new skills is quenchless. Through my experience, the completed project doesn't bring nearly as much satisfaction as the process itself. I am eager to continue gaining knowledge and utilizing new skills in the tech field.</p>
          </div >
        </section>


        {/* THE TECH STACK I USE */}
        <section id='experience' className='min-h-screen'>

          <h5 className='text-center'>Tools I Use</h5>
          <h3 className='text-center text-3xl py-1 text-sky-300'>My Current Tech Stack</h3>
          <div className='my-20 lg:flex justify-center gap-10'>
            <div className='text-center shadow-xl shadow-sky-400 p-10 rounded-xl my-10 hover:shadow-sky-300 cursor-none'>
              <h3 className='text-lg font-medium pb-2 text-sky-300'>FRONT-END</h3>
              <div className='flex flex-wrap gap-5 hover:ease-out'>
                <article >
                  <h4> <AiFillHtml5 className='text-4xl' />HTML</h4>
                </article>
                <article className='flex'>
                  <h4> <DiCss3 className='text-4xl' />CSS</h4>
                </article>
                <article>
                  <h4 ><DiJavascript className='text-4xl' />JAVASCRIPT</h4>
                </article>
                <article>
                  <h4> <FaBootstrap className='text-4xl' />BOOTSTRAP</h4>
                </article>
                <article>
                  <h4> <SiTailwindcss className='text-4xl' />TAILWIND</h4>
                </article>
                <article>
                  <h4> <FaReact className='text-4xl' />REACT</h4>
                </article>
                <article>
                  <h4> <TbBrandNextjs className='text-4xl' />NEXT.JS</h4>
                </article>

              </div>
            </div>
            <div className='text-center p-10 rounded-xl my-10 shadow-sky-400 shadow-xl hover:shadow-sky-300 cursor-none'>
              <h3 className='text-lg font-medium pb-2 text-sky-300'>BACK-END</h3>

              <div className='flex flex-wrap gap-5'>
                <article>
                  <h4> <FaNodeJs />NODE.JS</h4>
                </article>
                <article>
                  <h4> <SiPostgresql />POSTGRESQL</h4>
                </article>
                <article>
                  <h4> <SiExpress />EXPRESS</h4>
                </article>
                <article>
                  <h4><SiAcademia /> AXIOS</h4>
                </article>

              </div>
            </div>

          </div>
        </section>




        {/* ----------PROJECTS---------- */}
        <section id='projects' className='min-h-screen'>

          <h5 className='text-center'>My Recent Work</h5>
          <h3 className='text-center text-3xl py-1 text-sky-300'>Projects</h3>
          <div className=' flex justify-center flex-wrap lg:flex gap-10'>
            <div className='text-center p-10 rounded-xl my-10 shadow-sky-400 shadow-xl hover:shadow-sky-300'>
              <h3 className='text-lg font-medium pt-8 pb-2'>Catco.com</h3>
              <Image src={pro1} width={300} height={300} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Fullstack e-comerce site</h3>

              <h4 className='py-4 text-teal-600'>This project is in progress</h4>
              <div className='flex justify-center gap-5'>
                <a href='https://github.com/Messyginger0804/catco2.0.git' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400' target='_blank'>Github</a>
                <a href='' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 hover:cursor-not-allowed' target='_blank'>Live Demo</a>
              </div>

            </div>
            <div className='text-center p-10 rounded-xl my-10 shadow-sky-400 shadow-xl hover:shadow-sky-300'>
              <h3 className='text-lg font-medium pt-8 pb-2'>Google-Clone</h3>
              <Image src={pro4} width={300} height={300} />
              <h4 className='py-4 text-sky-200'>A Clone of Google.com using Google's API</h4>
              <div className='flex justify-center gap-5'>
                <a href='https://github.com/Messyginger0804/gugal.git' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400' target='_blank'>Github</a>
                <a href='https://jcsgoogle.netlify.app' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400' target='_blank'>Live Demo</a>
              </div>

            </div>
            <div className='text-center p-10 rounded-xl my-10 shadow-sky-400 shadow-xl hover:shadow-sky-300'>
              <h3 className='text-lg font-medium pt-8 pb-2'>This Portfolio Site</h3>
              <Image src={pro2} width={300} height={300} />
              <h4 className='py-4 text-sky-200'>Developed Using Next.js & Tailwindcss</h4>
              <div className='flex justify-center gap-5'>
                <a href='https://github.com/Messyginger0804/next.js-portfolio.git' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400' target='_blank'>Github</a>
                <a href='https://jcsgoogle.netlify.app' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400' target='_blank'>Live Demo</a>
              </div>

            </div>

            <div className='text-center p-10 rounded-xl my-10 shadow-sky-400 shadow-xl hover:shadow-sky-300'>
              <h3 className='text-lg font-medium pt-8 pb-2'>Tic-Tac-Toe</h3>
              <Image src={pro3} width={300} height={300} />
              <h4 className='py-4 text-sky-200'>Tic-Tac-Toe game using DOM manipulation</h4>
              <div className='flex justify-center gap-5'>
                <a href='https://github.com/Messyginger0804/Arcade.git' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400' target='_blank'>Github</a>
                <a href='https://tictactoebyjc.netlify.app' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400' target='_blank'>Live Demo</a>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3 -----contact-------*/}
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
                  <a href='https://api.whatsapp.com/send?phone=12149493126' target='_blank'>
                    <article className='text-center shadow-xl shadow-sky-400 p-10 rounded-xl my-10 hover:shadow-sky-300'>
                      <AiFillLinkedin className='text-4xl' />
                      <h4 className='text-2xl font-bold'>Linkedin</h4>
                      <h5>Checkout My Profile</h5>
                      <a>Send A Message</a>
                    </article>
                  </a>

                </div>
                {/* <form onSubmit={sendEmail} className='flex-col gap-11 '
                // ref={form} onSubmit={sendEmail}
                >
                  <div className='shadow-lg shadow-blue-50'>

                    <input className='resize-none w-full p-1 border-2 border-blue-700 bg-transparent' type='text' name='name' placeholder='full name' required />
                    <input className='resize-none w-full p-1 border-2 bg-transparent border-blue-700' type='email' name='email' placeholder='youremail@email.com' required />
                    <textarea className='resize-none w-full p-1 border-2 border-blue-700 bg-transparent' name='message' rows='7' placeholder='your message' required></textarea>
                  </div>
                  <button type="submit" className='hover:bg-white bg-sky-300 p-2 text-gray-800 border-2 border-sky-400'>Send Message</button>
                </form> */}
              </div>
            </div>

          </div>
        </section >


      </main >
      <footer className='bg-sky-300 text-center py-20'>
        <a href='#' className='text-black'>JC Ashley</a>
        <h5>Fullstack Developer</h5>

        <ul className='flex flex-wrap justify-center gap-11 text-xl text-black'>
          <li> <a href='#'>Home</a> </li>
          <li> <a href='#about'>About</a> </li>
          <li> <a href='#experience'>Experience</a> </li>
          <li> <a href='#projects'>Projects</a> </li>
          <li> <a href='#contact'>Contact Me</a> </li>
        </ul>


        <div className='flex justify-center gap-11 text-3xl text-black'>
          <a className='hover:text-white' href='https://www.linkedin.com/in/jeremy-ashley-webdev/'><AiFillLinkedin /></a>
          <a className='hover:text-white' href='https://github.com/Messyginger0804'><AiFillGithub /></a>
          <a className='hover:text-white' href='https://twitter.com/Messyginger0804'><AiFillTwitterCircle /></a>
        </div>

      </footer>
    </div >
  )
}

export default Home;
