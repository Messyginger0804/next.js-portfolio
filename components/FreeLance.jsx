import React from 'react'
import FreelanceCard from './FreelanceCard';


function FreeLance({ contractedJobs }) {
    return (

        <div className=' flex justify-center flex-wrap lg:flex gap-10'>
            {contractedJobs?.map((job) => (
                <div className='flex justify-center gap-3'>
                    <FreelanceCard
                        key={job.title}
                        job={job}
                    />
                </div>
            ))}
        </div>
    )
}

export default FreeLance