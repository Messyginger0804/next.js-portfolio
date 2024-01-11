

export const link = {
    resume: 'https://drive.google.com/file/d/1rp7fh3JPqZrIEaAeRySZkE4FO82GM1wb/view?usp=drive_link',


    linkedin: 'https://www.linkedin.com/in/jeremy-ashley-webdev/',
    github: 'https://github.com/messyginger0804',
    twitter: 'https://twitter.com/messyginger0804',

    blog: 'https://blogsbyjc.vercel.app/',

}

// utilities.js or your utilities file
export function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }

    // Truncate the text and append ellipsis
    return text.slice(0, maxLength) + '...';
}


export const heading = (x) => {
    if (x) {
        // return <h2 className={css}>Work in progress</h2>
        return <b className='notFinished'>Work in progress</b>
    }
}
export const button = (a, link, css1, css2) => {
    if (a) {
        return <a href={link} className='btn-primary' target='_blank'>Live Site</a>
    } else {
        return (
            <div className='btn-disabled' target='_blank'>Live Site</div>)
    }
}

