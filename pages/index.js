"use client"

// ---imported from NEXT---
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// -----imported from reacticons
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'


// -----Components imported
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';


// Freelance Images imported
import JLD from '../public/JLD.png'
import TFLS from '../public/TFLS.jpg'


//====Profile images imported==============================
import JC from '../public/personal/justme.png'
import collage from '../public/personal/collage.jpg'

// ======== data imported from project =================================

import {
  frontTech,
  backTech
} from '../data/tech';

function Home() {
  return (
    <div className='text-white'>
      <Head>
        <link rel="shortcut icon" href="../favicon.ico" />
        <title>Jeremy's Portfolio</title>
        <meta name="description" content="JC's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='bg-[#19184a] px-5 md:px-20 lg:px-40 overflow-x-hidden'>

        {/* HOMEPAGE */}
        <section id='/' className='md:min-h-screen'>

          {/* home page */}
          <Header />
          <div className="mx-auto bg-gradient-to-b from-sky-500 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
            <Image
              src={JC}
              // height={300}
              // width={300}
              priority
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-white '>
            <a href='https://www.linkedin.com/in/jeremy-ashley-webdev/' target='_blank'>
              <AiFillLinkedin className='shadow-lg shadow-sky-300 rounded-full hover:text-sky-500 hover:cursor-pointer' /> </a>
            <a href='https://github.com/Messyginger0804' target='_blank'><AiFillGithub className='shadow-lg shadow-sky-300 rounded-full hover:text-sky-500 hover:cursor-pointer' /></a>
            <a href='https://twitter.com/Messyginger0804' target='_blank'><AiFillTwitterCircle className='shadow-lg shadow-sky-300 rounded-full hover:text-sky-500 hover:cursor-pointer' /></a>
          </div>

          <Navbar />

        </section>

        {/* SECTION 2 ---- ABOUT ME----*/}
        <section id='about' className='min-h-screen m-2'>
          <div className='mx-auto bg-gradient-to-b from-sky-300 rounded-full w-80 h-80 mt-5 mb-4 md:h-96 md:w-96 hover:rotate-12 hover:duration-1000'>
            <Image src={collage} alt='collage' />
          </div>

          <h5 className='text-center'>Get To Know Me</h5>
          <h3 className='text-center text-3xl py-1 text-sky-300'>About Me</h3>
          <div className='lg:mx-40'>
            <div className='flex gap-3 text-center shadow-lg rounded-xl my-10'>
              <div className='p-2 m-auto border-2 text-center rounded-xl shadow-sky-400 shadow-xl hover:shadow-sky-300 cursor-pointer '>
                <h3 className='text-lg font-medium'>Blogger</h3>
                <h4 className=' text-sky-200 hover:underline'>
                  <Link href='https://blogsbyjc.vercel.app/'>
                    Checkout my blog site: Blogs by JC
                  </Link>
                </h4>
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
        <section id='tech stack' className='min-h-screen'>

          <h5 className='text-center'>Tools I Use</h5>
          <h3 className='text-center text-3xl py-1 text-sky-300'>My Tech Stack</h3>


          <div className='md:my-20 flex flex-wrap justify-center gap-6'>

            <div className='text-center w-full md:w-1/2 shadow-xl shadow-sky-400 p-10 rounded-xl my-10 hover:shadow-sky-300 cursor-none'>
              <h3 className='text-lg font-medium pb-2 text-sky-300'>FRONT-END</h3>
              <div className='flex flex-wrap gap-5 hover:ease-out'>
                {frontTech.map((tech) => (
                  <article>
                    <h4>{tech.icon}{tech.name}</h4>
                  </article>
                ))}
              </div>
            </div>
            <div className='text-center p-10 rounded-xl my-10 w-full md:w-1/2 shadow-sky-400 shadow-xl hover:shadow-sky-300 cursor-none'>
              <h3 className='text-center text-lg font-medium pb-2 text-sky-300'>BACK-END</h3>

              <div className='flex flex-wrap gap-5 hover:ease-out'>
                {backTech.map((back) => (
                  <article className=''>
                    <h4>{back.icon}{back.name}</h4>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </section>


        <section id='experience' className='min-h-screen'>

          {/* -------------Contracted Work===================== */}

          <h5 className='text-center'>My Recent Work</h5>
          <h3 className='text-center text-3xl py-1 text-sky-300'>Contracted Jobs</h3>

          <div className=' flex justify-center flex-wrap lg:flex gap-10'>
            <div className='text-center p-10 rounded-xl my-10 shadow-sky-400 shadow-xl hover:shadow-sky-300'>
              <h3 className='text-lg font-medium pt-8 pb-2'>Top Flight Lawn Service</h3>
              <p><span className='px-2'>client:</span>Rene Guillen</p>
              <a href='tel:2147794259' className='hover:underline'>214-779-4259</a>
              <Link href='https://topflightlawnservice.vercel.app/'>
                <div className='flex justify-center'>
                  <Image
                    className='flex justify-center fit object-center rounded'
                    src={TFLS}
                    width={100}
                    height={100}
                    alt='TFLS Logo'
                  />
                </div>
              </Link>
              <h4 className='py-4 text-sky-200'>DFW Landscaping Company</h4>
            </div>
            <div className='text-center p-10 rounded-xl my-10 shadow-sky-400 shadow-xl hover:shadow-sky-300'>
              <h3 className='text-lg font-medium pt-8 pb-2'>JLD Counseling</h3>
              <p><span className='px-2'>client:</span>Jason Daughtery</p>
              <a href='tel:2147794259' className='hover:underline'>214-785-7426</a>
              <Link href='https://jldcounseling.netlify.com/'>
                <div className='flex justify-center'>
                  <Image
                    className='flex justify-center fit object-center'
                    src={JLD}
                    width={200}
                    height={200}
                    alt='JLD Logo'
                  />
                </div>
              </Link>
              <h4 className='py-4 text-sky-200'>DFW Therapy and Counseling Clinic</h4>
            </div>
          </div>

          {/* ----------PROJECTS---------- */}
          <h5 className='text-center'>My Experience</h5>
          <h3 className='text-center text-3xl py-1 text-sky-300'>Projects</h3>
          <Projects />

        </section>

        {/* SECTION 3 -----contact-------*/}


        <Contact />

      </main >
      <Footer />
    </div >
  )
}

export default Home;
