import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function FreelanceCard({ job }) {

    console.log("--------->", job);
    return (
        <div className=' flex justify-center flex-wrap lg:flex gap-10'>
            <div className='text-center p-10 w-[280px] h-[390px] rounded-xl my-10 shadow-sky-400 shadow-xl hover:shadow-sky-300'>
                <h3 className='text-lg font-medium pt-8 pb-2'>{job.title}</h3>
                <p><span className='px-2'>client:</span>{job.client}</p>
                <a href='tel:2147794259' className='hover:underline'>{job.phoneNumber}</a>
                <Link href={job.link}>
                    <div className='flex justify-center'>
                        <Image
                            className='flex justify-center fit object-center rounded'
                            src={job.image}
                            width={100}
                            height={100}
                            alt={`${job.title} 'logo'`}
                        />
                    </div>
                </Link>
                <h4 className='py-4 text-sky-200'>{job.description}</h4>
            </div>
        </div>
    );
}

export default FreelanceCard