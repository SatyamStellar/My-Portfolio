import {
    todo,
    mobile,
    techg,
    brut,
    pass,
    backend,
    creator,
    web,

    dmarketing,



    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
} from "../assets";

// Navigation links for the website
export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

// Services offered with relevant icons
const services = [
    {
        title: "Web Designer",
        icon: web,
    },
    {
        title: "Web Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "NeoVim User",
        icon: creator,
    },
];

// Work experience entries
const experiences = [
    {
        title: "Video Editor",
        company_name: "DMarketingGuru",
        icon: dmarketing,
        iconBg: "#383E56",
        date: "February 2022 - April 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

// Testimonials section (currently empty, could be populated later)
const testimonials = [
    {
        testimonial: "Happy to take your feedback positively.",
        name: "",
        designation: "",
        company: "",
        image: "",
    }
];

// Projects section with relevant tags, source code, and live links
const projects = [
    {
        name: "Todo WebApp",
        description: "A web-based platform that allows users to create and manage their todos.",
        tags: [
            { name: "html/js", color: "blue-text-gradient" },
            { name: "localstorage", color: "green-text-gradient" },
            { name: "tailwind", color: "pink-text-gradient" },
        ],
        image: todo,
        source_code_link: "https://github.com/SatyamStellar/My-To-do",
        live_link: "https://my-todo-stellar.netlify.app/",
    },
    {
        name: "Tech.Gear",
        description: "A web application for searching job openings, viewing estimated salaries, and locating jobs based on the user's location.",
        tags: [
            { name: "html/js", color: "blue-text-gradient" },
            { name: "tailwind", color: "green-text-gradient" },
            { name: "scrollreveal", color: "pink-text-gradient" },
        ],
        image: techg,
        source_code_link: "https://github.com/SatyamStellar/Tech.Gear",
        live_link: "https://tech-gear11.netlify.app/",
    },
    {
        name: "Random Password Gen",
        description: "A tool to generate random passwords for secure accounts and applications.",
        tags: [
            { name: "html/js", color: "blue-text-gradient" },
            { name: "tailwind", color: "green-text-gradient" },
            { name: "css", color: "pink-text-gradient" },
        ],
        image: pass,
        source_code_link: "https://github.com/SatyamStellar/Random-Password-Gen",
        live_link: "https://randompasswordgen11.netlify.app/",
    },
    {
        name: "BrutForce",
        description: "A tool to demonstrate brute force techniques for password cracking (for educational purposes).",
        tags: [
            { name: "html/js", color: "blue-text-gradient" },
            { name: "tailwind", color: "green-text-gradient" },
            { name: "css", color: "pink-text-gradient" },
        ],
        image: brut,
        source_code_link: "https://github.com/SatyamStellar/Brute-Force",
        live_link: "https://bruteforcev2.netlify.app/",
    },
];

// Technologies used in the projects with relevant icons
const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    //{
    //    name: "TypeScript",
    //    icon: typescript,
    //},
    {
        name: "React JS",
        icon: reactjs,
    },
    //{
    //    name: "Redux Toolkit",
    //    icon: redux,
    //},
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    //{
    //    name: "docker",
    //    icon: docker,
    //},
]; export { services, experiences, testimonials, projects, technologies };

