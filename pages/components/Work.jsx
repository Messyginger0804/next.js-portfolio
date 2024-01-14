// Your main component
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-material-ui-carousel';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';

import { contractedJobs } from 'data/jobs';

function ContractedJobCard({ title, client, phoneNumber, link, image, description }) {
    return (
        <div className='text-center p-10 rounded-xl w-[280px] h-[400px] my-6 max-w-sm relative shadow-sky-400 shadow-xl hover:shadow-sky-300'>
            <div className='flex flex-col justify-center h-[400px] relative top-1/2 transform -translate-y-1/2'>
                <h3 className='text-lg font-medium pt-8 pb-2'>{title}</h3>
                <p>
                    <span className='px-2'>client:</span>
                    {client}
                </p>
                <a href={`tel:${phoneNumber}`} className='hover:underline'>
                    {phoneNumber}
                </a>
                <Link href={link}>
                    <div className='flex justify-center'>
                        <Image
                            className='flex justify-center fit object-center rounded'
                            src={image}
                            width={100}
                            height={100}
                            alt={`${title} Logo`} />
                    </div>
                </Link>
                <h4 className='py-4 text-sky-200'>{description}</h4>
            </div>  </div>
    );
}
// Your existing ContractedJobsSlideShow component

// ContractedJobsSlideShow.jsx

// ... (other imports)

function ContractedJobsSlideShow() {
    return (
        <div className='flex justify-center items-center h-full m-auto'>
            <div className='m-auto'>

                <h5 className='text-center'>My Recent Work</h5>
                <h3 className='text-center text-3xl py-1 text-sky-300'>Contracted Jobs</h3>

                {/* Adjusted the wrapping div to ensure centering */}
                <div className="w-full flex justify-center">
                    <Carousel
                        NextIcon={<BiArrowToRight className="text-4xl text-white " />}
                        PrevIcon={<BiArrowToLeft className="text-4xl text-white" />}
                    >
                        {contractedJobs.map((job) => (
                            <ContractedJobCard key={job.title} {...job} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default ContractedJobsSlideShow;

