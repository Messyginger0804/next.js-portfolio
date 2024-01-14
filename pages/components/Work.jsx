// Your main component
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JLD from '../../public/JLD.png'
import TFLS from '../../public/TFLS.jpg'
import Carousel from 'react-material-ui-carousel';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';

const contractedJobs = [
    {
        title: 'Top Flight Lawn Service',
        client: 'Rene Guillen',
        phoneNumber: '214-779-4259',
        link: 'https://topflightlawnservice.vercel.app/',
        image: TFLS,
        description: 'DFW Landscaping Company',
    },
    {
        title: 'JLD Counseling',
        client: 'Jason Daughtery',
        phoneNumber: '214-785-7426',
        link: 'https://jldcounseling.netlify.com/',
        image: JLD,
        description: 'DFW Therapy and Counseling Clinic',
    },
    // Add more contracted jobs as needed
];

function ContractedJobCard({ title, client, phoneNumber, link, image, description }) {
    return (
        <div className='text-center p-10 w-[280px] rounded-xl my-10 shadow-sky-400 shadow-xl hover:shadow-sky-300'>
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
                    <Image className='flex justify-center fit object-center rounded' src={image} width={100} height={100} alt={`${title} Logo`} />
                </div>
            </Link>
            <h4 className='py-4 text-sky-200'>{description}</h4>
        </div>
    );
}

function ContractedJobsSlideShow() {
    return (
        <Carousel
            NextIcon={<BiArrowToRight className="text-4xl text-white " />}
            PrevIcon={<BiArrowToLeft className="text-4xl text-white" />}
        >
            {contractedJobs.map((job) => (
                <ContractedJobCard key={job.title} {...job} />
            ))}
        </Carousel>
    );
}

export default ContractedJobsSlideShow;
