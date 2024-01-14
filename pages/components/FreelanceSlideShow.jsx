import React from 'react'

function FreelanceSlideShow() {
    return (
        <div className="h-[390px] m-auto">
            <Carousel
                NextIcon={<BiArrowToRight className="text-4xl text-white " />}
                PrevIcon={<BiArrowToLeft className="text-4xl text-white" />}
            >
                {contractedJobs.map((job) => (
                    <FreelanceCard key={job.title} job={job} />
                ))}
            </Carousel>
        </div>)
}

export default FreelanceSlideShow