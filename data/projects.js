import tias from '../public/projectImages/tias-logo.png'
import port from '../public/projectImages/port.jpg'
import tic from '../public/projectImages/Tic_tac_toe.svg.png'
import dinfin from '../public/projectImages/dinerfinder.png'
import google from '../public/projectImages/google.jpg'
import movieReview from '../public/projectImages/movieReview.jpg'
import blog from '../public/projectImages/profile.png'



export const projects = [
    {
        isPublished: true,
        inProgress: true,
        title: "Diner Finder",
        image: dinfin,
        descTitle: 'Restaurant Review Site',
        desc: 'DinerFinder: Review and rate restaurants with Vite, React, Tailwind CSS (Frontend) and Node.js, PostgreSQL (Backend). Expanding this is currently an MVP',
        repo: 'https://github.com/Messyginger0804/dinerAudit',
        live: 'http://3.144.102.215/',
    },
    {
        isPublished: false,
        inProgress: true,
        title: "Tias2.0",
        image: tias,
        descTitle: 'Full Stack E-commerce',
        desc: 'This is the second version of the E-commerce site Tias. This is not just a new version but a completely rebuilt site. The code is rewritten the functionality will be different. sleek modern design, admin and a custom database...',
        repo: 'https://github.com/Messyginger0804/Tias2.0',
        live: 'n/a',
    },
    {
        isPublished: true,
        inProgress: false,
        title: "Poopie Review",
        image: movieReview,
        descTitle: 'Movie Review Site',
        desc: 'Dive into movie reviews on PoopieMovies, my inaugural Java project, blending React, Vite, and Tailwind CSS for frontend allure, and venturing into Java Spring Boot and MongoDB for the backend magic…',
        repo: 'https://github.com/Messyginger0804/poopiemovies',
        live: 'https://poopiereviews.netlify.app/',
    },
    {
        isPublished: true,
        inProgress: false,
        title: "Blogs by JC",
        image: blog,
        descTitle: 'Blog Site',
        desc: '"Blogs by JC" was created using Next.js, Tailwind CSS, and Contentlayer, offering an engaging user experience with MDX blog posts. The project represents my first experience with MDX, Next.js dynam…',
        repo: 'https://github.com/Messyginger0804/blogs-by-jc-focontent',
        live: 'https://blogsbyjc.vercel.app/',
    },
    {
        isPublished: true,
        inProgress: false,
        title: "Tias.com",
        image: tias,
        descTitle: 'Fullstack e-comerce site',
        desc: 'Tias, e-commerce hub built using Next.js, Stripe for payments, and featuring my inaugural experience with Redux and Redux Toolkit. Toastify handles notifications, axios manages API r…',
        repo: 'https://github.com/Messyginger0804/tias',
        live: 'https://tias.netlify.app/',
    },
    {
        isPublished: true,
        inProgress: false,
        title: "Google-Clone",
        image: google,
        descTitle: 'A Clone of Google.com',
        desc: "Introducing Gugal: My first project with Next.js, Tailwind CSS, and Firebase! A Google clone that fetches and displays search results from Google's API. Explore how to work with APIs and JSON data …",
        repo: 'https://github.com/Messyginger0804/gugal',
        live: 'https://jcsgoogle.netlify.app/',
    },
    {
        isPublished: true,
        inProgress: false,
        title: "Google-Clone",
        image: google,
        descTitle: 'A Clone of Google.com',
        desc: "Introducing Gugal: My first project with Next.js, Tailwind CSS, and Firebase! A Google clone that fetches and displays search results from Google's API. Explore how to work with APIs and JSON data …",
        repo: 'https://github.com/Messyginger0804/gugal',
        live: 'https://jcsgoogle.netlify.app/',
    },
    {
        isPublished: true,
        inProgress: false,
        title: "This Portfolio Site",
        image: port,
        descTitle: 'A Clone of Google.com',
        desc: `Developed Using Next.js & Tailwindcss
        Next.js portfolio website. It's my project using Next.js.`,
        repo: 'https://github.com/Messyginger0804/next.js-portfolio',
        live: 'https://jcashleyportfolio.netlify.app/',
    },
    {
        isPublished: true,
        inProgress: false,
        title: "Tic-Tac-Toe",
        image: tic,
        descTitle: 'Classic Tic-Tac-Toe 🎮',
        desc: `Tic-Tac-Toe game crafted with vanilla JavaScript to dynamically manipulate the Document Object Model (DOM). This creation signifies a significant milestone in my coding journey…`,
        repo: 'https://github.com/Messyginger0804/Arcade',
        live: 'https://tictactoebyjc.netlify.app/',
    },
]