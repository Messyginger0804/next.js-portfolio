<section id='experience' className='min-h-screen'>
    {/* -------------Contracted Work===================== */}
    <FreeLance />
    {/* ----------PROJECTS---------- */}
    <h5 className='text-center'>My Experience</h5>
    <h3 className='text-center text-3xl py-1 text-sky-300'>Projects</h3>

    <div className='hidden'>

        <Projects projects={projects} />
    </div>

    <div className="md:hidden">"

        <SlideShow projects={projects} />
    </div>

</section>