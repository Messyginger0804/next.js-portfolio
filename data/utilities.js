

export const link = {
    resume: 'https://drive.google.com/file/d/1rp7fh3JPqZrIEaAeRySZkE4FO82GM1wb/view?usp=drive_link',


    linkedin: 'https://github.com/Messyginger0804',
    github: 'https://github.com/messyginger0804',
    twitter: 'https://twitter.com/messyginger0804',

    blog: 'https://blogsbyjc.vercel.app/',

}

export const heading = (x) => {
    if (x) {
        return <h2 className='text-xl font-medium p-0 m-0 text-red-300 hover:text-red-700'>Work in progress</h2>
    }
}
export const button = (y, z) => {
    if (y) {
        return <a href={z} className='hover:bg-white p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Live Site</a>
    } else {
        return (
            <div className='hover:cursor-not-allowed hover:bg-red-200 hover:text-red-600 p-2 text-sky-400 border-2 border-sky-400 rounded-lg' target='_blank'>Live Site</div>)
    }
}

