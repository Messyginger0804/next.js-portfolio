import React from 'react'

import Carousel from 'react-material-ui-carousel';
import FreelanceCard from './FreelanceCard';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';

function FreeLance({ contractedJobs }) {
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
        </div>
    )
}

export default FreeLance