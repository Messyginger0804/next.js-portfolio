"use client"

import Head from 'next/head';

import { projects } from 'data/projects';

// -----Components imported
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { AboutMe } from './components/AboutMe';
import Profile from './components/Profile';
import TechStack from './components/TechStack';
import FreeLance from './components/FreeLance';
import ProjectCard from './components/ProjectCard';
import SlideShow from './components/SlideShow';


function Home() {
  return (
    <div className='text-white'>
      <Head>
        <link rel="shortcut icon" href="../favicon.ico" />
        <title>Jeremy's Portfolio</title>
        <meta name="description" content="JC's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='bg-[#19184a] px-5 md:px-20 lg:px-40'>

        {/* HOMEPAGE */}
        <section id='/' className='md:min-h-screen'>
          <Header />
          <Profile />
          <Navbar />
        </section>

        {/* SECTION 2 ---- ABOUT ME----*/}
        <section id='about' className='min-h-screen m-2'>
          <AboutMe />
        </section>

        {/* THE TECH STACK I USE */}
        <section id='tech stack' className='min-h-screen'>
          <TechStack />
        </section>

        <section id='experience' className='min-h-screen'>
          {/* -------------Contracted Work===================== */}
          <FreeLance />
          {/* ----------PROJECTS---------- */}
          <h5 className='text-center'>My Experience</h5>
          <h3 className='text-center text-3xl py-1 text-sky-300'>Projects</h3>

          <div className='hidden md:block'>
            {/* This div is visible on tablets and computers */}
            <Projects projects={projects} />
          </div>

          <div className="md:hidden">
            {/* This div is visible on phones */}
            <SlideShow projects={projects} />
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
