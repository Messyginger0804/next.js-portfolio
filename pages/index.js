"use client"
import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import collage from '../public/collage.jpg'
import Image from 'next/image';
import tias from '../public/tias-logo.png'
import port from '../public/port.jpg'
import tic from '../public/Tic_tac_toe.svg.png'
import google from '../public/google.jpg'
import dinfin from '../public/dinerfinder.png'
import movieReview from '../public/movieReview.jpg'
import TFLS from '../public/TFLS.jpg'
import JLD from '../public/JLD.png'
import blog from '../public/profile.png'
import { FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { DiJavascript, DiCss3, DiJava } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiPostgresql, SiExpress, SiTailwindcss, SiAcademia } from 'react-icons/si';
import Link from 'next/link';
import Footer from './components/Footer';
import Header from './components/Header';
// import JC from '../public/jc-as-a-sentare.png'
import JC from '../public/justme.png'
import Navbar from './components/Navbar';
import Contact from './components/Contact';



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
        <section id='/' className='min-h-screen'>

          {/* home page */}
          <Header />
          {/* <div className='mx-auto p-4 w-100 h-80 mt-5 mb:5 md:mb-20 md:h-96 md:w-96 lg:md-80 lg:80'> */}
          <div className="mx-auto bg-gradient-to-b from-sky-500 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
            <Image
              src={JC}
              // height={300}
              // width={300}
              priority
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-white '>
            <a href='https://www.linkedin.com/in/jeremy-ashley-webdev/' target='_blank'>
              <AiFillLinkedin className='shadow-lg shadow-sky-300 rounded-full hover:text-sky-500 hover:cursor-pointer' /> </a>
            <a href='https://github.com/Messyginger0804' target='_blank'><AiFillGithub className='shadow-lg shadow-sky-300 rounded-full hover:text-sky-500 hover:cursor-pointer' /></a>
            <a href='https://twitter.com/Messyginger0804' target='_blank'><AiFillTwitterCircle className='shadow-lg shadow-sky-300 rounded-full hover:text-sky-500 hover:cursor-pointer' /></a>
            {/* <a href='https://blogsbyjc.vercel.app/' target='_blank'><FaBlogger className='shadow-lg shadow-sky-300 rounded-full hover:text-sky-500 hover:cursor-pointer' /></a> */}
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
            <div className='text-center p-10 rounded-xl my-10 w-full md:w-1/2 shadow-sky-400 shadow-xl hover:shadow-sky-300 cursor-none'>
              <h3 className='text-center text-lg font-medium pb-2 text-sky-300'>BACK-END</h3>

              <div className='text-center flex flex-wrap gap-5'>
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
                <article className='flex text-center'>
                  <h4 ><DiJava className='text-4xl' />JAVA</h4>
                </article>
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

          <div className=' flex justify-center flex-wrap lg:flex gap-5'>


            {/*----------PROJECT----------*/}
            <div className='text-center p-10 rounded-xl  my-10 max-w-sm shadow-sky-400 shadow-xl hover:shadow-sky-300'>
              <h3 className='text-lg font-medium pt-8 pb-2'>Poopie Review</h3>
              <div className='flex justify-center'>
                <Image
                  className='flex justify-center fit object-center rounded'
                  src={movieReview}
                  width={100}
                  height={100}
                  alt=''
                />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Movie Review Site</h3>
              {/* <p className='pb-4'>Developed using Next.js | Contentlayer</p> */}
              <p className='pb-4 text-xs'>"Blogs by JC" was created using Next.js, Tailwind CSS, and Contentlayer, offering an engaging user experience with MDX blog posts. The project represents my first experience with MDX, Next.js dynam…</p>

              {/* <h4 className='py-4 text-teal-600'>This project is in progress</h4> */}
              <div className='flex justify-center gap-5'>
                <a href='https://github.com/Messyginger0804/Braylee-RubyPoopyMovies' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>FrontRepo</a>
                <a href='https://github.com/Messyginger0804/movies' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>BackRep</a>
                <a href='https://poopiereviews.netlify.app/' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Live Site</a>
              </div>
            </div>
            {/*----------PROJECT----------*/}
            <div className='text-center p-10 rounded-xl  my-10 max-w-sm shadow-sky-400 shadow-xl hover:shadow-sky-300'>
              <h3 className='text-lg font-medium pt-8 pb-2'>Blogs by JC</h3>
              <div className='flex justify-center'>
                <Image
                  className='flex justify-center fit object-center rounded'
                  src={blog}
                  width={100}
                  height={100}
                  alt=''
                />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Blog Site</h3>
              {/* <p className='pb-4'>Developed using Next.js | Contentlayer</p> */}
              <p className='pb-4 text-xs'>"Blogs by JC" was created using Next.js, Tailwind CSS, and Contentlayer, offering an engaging user experience with MDX blog posts. The project represents my first experience with MDX, Next.js dynam…</p>

              {/* <h4 className='py-4 text-teal-600'>This project is in progress</h4> */}
              <div className='flex justify-center gap-5'>
                <a href='https://github.com/Messyginger0804/blogs-by-jc-focontent' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Github</a>
                <a href='https://blogs-by-jc-focontent.vercel.app' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Demo</a>
                <a href='https://blogsbyjc.vercel.app/' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Live Site</a>
              </div>
            </div>
            {/*----------PROJECT----------*/}
            <div className='text-center p-10 rounded-xl  my-10 max-w-sm shadow-sky-400 shadow-xl hover:shadow-sky-300'>
              <h3 className='text-lg font-medium pt-8 pb-2'>Diner Finder</h3>
              <div className='flex justify-center'>
                <Image
                  className='flex justify-center fit object-center rounded'
                  src={dinfin}
                  width={100}
                  height={100}
                  alt=''
                />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Restaurant Review Site</h3>
              {/* <p className='pb-4'>Developed using PERN | custom Databse | hosted using AWS</p> */}
              <p className='pb-4 text-xs'>DinerFinder: Review and rate restaurants with Vite, React, Tailwind CSS (Frontend) and Node.js, PostgreSQL (Backend). Expanding this is currently an MVP</p>

              {/* <h4 className='py-4 text-teal-600'>This project is in progress</h4> */}
              <div className='flex justify-center gap-5'>
                <a href='https://github.com/Messyginger0804/dinerAudit.git' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Github</a>
                <a href='http://3.144.102.215/' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Live Demo</a>
              </div>
            </div>


            {/*----------PROJECT----------*/}
            <div className=' text-center p-10 rounded-xl my-10 max-w-sm shadow-sky-400 shadow-xl hover:shadow-sky-300'>
              <h3 className='text-lg font-medium pt-8 pb-2'>Tias.com</h3>
              <div className='flex justify-center'>
                <Image
                  className='flex justify-center fit object-center'
                  src={tias}
                  width={100}
                  height={100}
                  alt='TIAS Logo'
                />
              </div>
              <h4 className='py-2 text-sky-200'>Fullstack e-comerce site</h4>

              {/* <p className='pb-4'>Developed using fakestoreapi.com</p> */}
              <p className='pb-4 text-xs'>Tias, e-commerce hub built using Next.js, Stripe for payments, and featuring my inaugural experience with Redux and Redux Toolkit. Toastify handles notifications, axios manages API r…</p>

              {/* <h4 className='py-4 text-teal-600'>This project is in progress</h4> */}
              <div className='flex justify-center gap-5'>
                <a href='https://github.com/Messyginger0804/catco2.0.git' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Github</a>
                <a href='https://tias.netlify.app/' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Live Demo</a>
              </div>
            </div>

            {/*----------PROJECT----------*/}
            <div className=' text-center p-10 rounded-xl my-10 max-w-sm shadow-sky-400 shadow-xl hover:shadow-sky-300'>
              <h3 className='text-lg font-medium pt-8 pb-2'>Google-Clone</h3>
              <div className='flex justify-center'>
                <Image
                  className='flex justify-center fit object-center rounded'
                  src={google}
                  width={100}
                  height={100}
                  alt='google Logo'
                />
              </div>
              <h4 className='py-4 text-sky-200'>A Clone of Google.com</h4>
              <p className='py-4 text-white-200 text-xs'>Introducing Gugal: My first project with Next.js, Tailwind CSS, and Firebase! A Google clone that fetches and displays search results from Google's API. Explore how to work with APIs and JSON data …</p>
              <div className='flex justify-center gap-5'>
                <a href='https://github.com/Messyginger0804/gugal.git' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Github</a>
                <a href='https://jcsgoogle.netlify.app/' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Live Demo</a>
              </div>
            </div>

            {/*----------PROJECT----------*/}
            <div className=' text-center p-10 rounded-xl my-10 max-w-sm shadow-sky-400 shadow-xl hover:shadow-sky-300'>
              <h3 className='text-lg font-medium pt-8 pb-2'>This Portfolio Site</h3>
              <div className='flex justify-center'>
                <Image
                  className='flex justify-center fit object-center rounded'
                  src={port}
                  width={100}
                  height={100}
                  alt='JLD Logo'
                />
              </div>
              <p className='py-4 text-sky-200'>Developed Using Next.js & Tailwindcss</p>
              <p className='py-4 text-white-200'>Next.js portfolio website. It's my project using Next.js.</p>
              <div className='flex justify-center gap-5'>
                <a href='https://github.com/Messyginger0804/next.js-portfolio.git' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Github</a>
                <a href='https://jcashleyportfolio.netlify.app' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Live Demo</a>
              </div>
            </div>

            {/*----------PROJECT----------*/}
            <div className=' text-center p-10 rounded-xl my-10 max-w-sm shadow-sky-400 shadow-xl hover:shadow-sky-300'>
              <h3 className='text-lg font-medium pt-8 pb-2'>Tic-Tac-Toe</h3>
              <div className='flex justify-center'>
                <Image
                  className='flex justify-center fit object-center rounded'
                  src={tic}
                  width={100}
                  height={100}
                  alt='tic-tac-toe'
                />
              </div>
              <h4 className='py-4 text-sky-200'>Classic Tic-Tac-Toe 🎮</h4>
              <p className='py-4 text-white-200 text-xs'>Tic-Tac-Toe game crafted with vanilla JavaScript to dynamically manipulate the Document Object Model (DOM). This creation signifies a significant milestone in my coding journey…</p>
              <div className='flex justify-center gap-5'>
                <a href='https://github.com/Messyginger0804/Arcade.git' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Github</a>
                <a href='https://tictactoebyjc.netlify.app' className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Live Demo</a>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3 -----contact-------*/}


        <Contact />

      </main >
      <Footer />
    </div >
  )
}

export default Home;
