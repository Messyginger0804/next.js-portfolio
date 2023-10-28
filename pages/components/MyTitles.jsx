import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function MyTitles() {
    return (
        <div>
            <TypeAnimation
                className='flex items center justify-center text-2xl py-2 text-blue-50 md:text-3xl'
                sequence={[
                    'Full-Stack Developer',
                    2000,
                    'Frontend Developer',
                    1000,
                    'Backend Developer',
                    1000,
                    'Web Developer',
                    1000,
                    'Software Engineer',
                    1000,
                    'React Developer',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', diplay: 'inline-block' }}
                repeat={Infinity}
            />
        </div>
    )
}

export default MyTitles