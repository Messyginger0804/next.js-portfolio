"use client"

import Head from 'next/head';
// data
import { projects } from 'data/projects';
import { contractedJobs } from 'data/jobs';
// -----Components imported
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import { AboutMe } from '../components/AboutMe';
import Profile from '../components/Profile';
import TechStack from '../components/TechStack';
import FreeLance from '../components/FreeLance';
import ProjectSlideShow from '../components/ProjectSlideShow';
import FreelanceSlideShow from '../components/FreelanceSlideShow';


function Home() {
  return (
    <div className='text-white'>
      {/* <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

<meta property="og:type" content="website">
<meta property="og:title" content="Erik Karlsson">
<meta property="og:description" content="Portfolio page made by Erik in React.">
<meta property="og:image" content="https://erikkarlsson.dev/assets/prev.png">
<meta property="og:url" content="https://erikkarlsson.dev"></meta> */}
      <Head>
        <link rel="shortcut icon" href="../favicon.ico" />
        <title>Jeremy's Portfolio</title>
        <meta name="description" content="JC's Portfolio" />
        <meta property="og:image" content="../justme.png" />
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

          <h5 className='text-center mt-3'>My Recent Work</h5>
          <h3 className='text-center text-3xl py-1 text-sky-300'>Contracted Jobs</h3>
          {/* -------------Contracted Work===================== */}
          <div className='hidden md:block'>
            <FreeLance contractedJobs={contractedJobs} />
          </div>

          <div className="md:hidden">
            <FreelanceSlideShow contractedJobs={contractedJobs} />
          </div>
          {/* ----------PROJECTS---------- */}
          <h5 className='text-center mt-4'>My Experience</h5>
          <h3 className='text-center text-3xl py-1 text-sky-300'>Projects</h3>

          <div className='hidden md:block'>
            <Projects projects={projects} />
          </div>

          <div className="md:hidden">
            <ProjectSlideShow projects={projects} />
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
