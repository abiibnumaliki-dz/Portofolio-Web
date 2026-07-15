import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaFigma,
    FaHtml5,
    FaCss3Alt,
    FaPhp,
} from "react-icons/fa"

import {
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiMysql,
    SiPostgresql,
    SiCodeigniter,
    SiSolidity,
    SiWeb3Dotjs,
    SiEthers,
    SiJavascript,
    SiVite,
} from "react-icons/si"

export const skillCategories = [
    {
        title : "Frontend",
        skills : [
            {
                name : "React",
                icon : FaReact,
            },
            {
                name : "TypeScript",
                icon : SiTypescript,
            },
            {
                name : "JavaScript",
                icon : SiJavascript,
            },
            {
                name : "Tailwind",
                icon : SiTailwindcss,
            },
            {
                name : "HTML",
                icon : FaHtml5,
            },
            {
                name : "CSS",
                icon : FaCss3Alt,
            },
            {
                name : "Vite",
                icon : SiVite,
            },
        ],
    },

    {
        title : "Backend",
        skills : [
            {
                name : "Node.js",
                icon : FaNodeJs,
            },
            {
                name : "PHP",
                icon : FaPhp,
            },
            {
                name : "Express",
                icon : SiExpress,
            },
            {
                name : "CodeIgniter",
                icon : SiCodeigniter,
            },
        ],
    },
    {
        title : "Database",
        skills : [
            {
                name : "MySql",
                icon : SiMysql,
            },
            {
                name : "Postgresql",
                icon : SiPostgresql,
            },
        ],
    },
    {
        title : "Blockchain",
        skills : [
            {
                name : "Solidity",
                icon : SiSolidity,
            },
            {
                name : "Ether.js",
                icon : SiEthers,
            },
            {
                name : "Web3.js",
                icon : SiWeb3Dotjs,
            },
        ],
    },
     {
        title : "Tools",
        skills : [
            {
                name : "Git",
                icon : FaGitAlt,
            },
            {
                name : "Github",
                icon : FaGithub,
            },
            {
                name : "Vscode",
                icon : SiVite,
            },
            {
                name : "Figma",
                icon : FaFigma,
            },
        ],
    }, 
]