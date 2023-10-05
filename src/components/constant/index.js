
//TECH_STACK_LOGO

import javascript from '../../assets/tech_stacks/javascript.png'
import node from '../../assets/tech_stacks/nodejs.png'
import react from '../../assets/tech_stacks/react.png'
import mongodb from '../../assets/tech_stacks/mongodb.png'
import express from '../../assets/tech_stacks/express.png'
import redis from '../../assets/tech_stacks/redis.png'
import git from '../../assets/tech_stacks/git.png'
import github from '../../assets/tech_stacks/github.png'
import aws from '../../assets/tech_stacks/aws.png'
import html from '../../assets/tech_stacks/html.png'
import css from '../../assets/tech_stacks/css.png'
import tailwind_css from '../../assets/tech_stacks/tailwind-css.png'
import typescript from '../../assets/tech_stacks/typescript.png'
import postgresql from '../../assets/tech_stacks/postgresql.png'
import typeORM from '../../assets/tech_stacks/typeORM.png'

// PROJECT BACKGROUND IMAGES
import project_1 from '../../assets/project_bg/project_1.jpg'
import project_2 from '../../assets/project_bg/project_2.jpg'
import project_3 from '../../assets/project_bg/project_3.jpg'
import project_4 from '../../assets/project_bg/project_4.jpg'
import project_5 from '../../assets/project_bg/urlShortner.jpg'
import project_6 from '../../assets/project_bg/project_6.jpg'

// EXPERIENCE LOGO 
import functionup from '../../assets/service_cards/functionup.png'
import dsa from '../../assets/service_cards/web.png'

// PROJECT BACKGROUND IMAGES
import bloggingSite from '../../assets/project_bg/bloggingSite.jpg'
import urlShortner from '../../assets/project_bg/urlShortner.jpg'
import spidersenseAI from '../../assets/project_bg/spidersenseAI.jpg'

const techs = [
  {
    id: 1,
    src: node,
    title: "Node.js",
    style: "yellow-shadow",
  },
  {
    id: 2,
    src: mongodb,
    title: "Mongo_DB",
    style: "green-shadow",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "yellow-shadow",
  },
  {
    id: 4,
    src: express,
    title: "Express.js",
    style: "green-shadow",
  },
  {
    id: 5,
    src: react,
    title: "React",
    style: "blue-light-shadow",
  },
  {
    id: 6,
    src: postgresql,
    title: "Postgresql",
    style: "green-shadow"
  },
  {
    id: 7,
    src: aws,
    title: "AWS-S3",
    style: "voilet-shadow",
  },
  {
    id: 8,
    src: redis,
    title: "Redis",
    style: "orange-shadow",
  },
  {
    id: 9,
    src: git,
    title: "Git",
    style: "orange-shadow",
  },
  {
    id: 10,
    src: github,
    title: "GitHub",
    style: "gray-shadow",
  },
  {
    id: 11,
    src: html,
    title: "HTML",
    style: "orange-shadow",
  },
  {
    id: 12,
    src: css,
    title: "CSS",
    style: "blue-light-shadow",
  },
  {
    id: 13,
    src: tailwind_css,
    title: "Tailwind-css",
    style: "green-shadow"
  },
  {
    id: 14,
    src: typescript,
    title: "Typescript",
    style: "blue-light-shadow"
  },
  {
    id: 15,
    src: typeORM,
    title: "TypeORM",
    style: "orange-shadow"
  }
];


const projects = [
  // Blogging Site
  {
    name: "Blogging Site",
    description: `The MERN Blogging Site is a dynamic web application that allows users to create, read,
    update, and delete blog posts. It provides a user-friendly interface for efficiently managing blog
    content. Users can easily create new blog posts by providing a title, summary, blogImage and content.
    This project is built using the MERN stack and utilizes AWS S3 for image storage.`,
    tags: ["nodejs", "mongodb", "react", "express", "aws","css3"],
    background: bloggingSite,
    githubLink:process.env.REACT_APP_BLOGGING_SITE_GITHUB,
    liveLink:process.env.REACT_APP_BLOGGING_SITE_LIVE
  },
  // LinkMagic URL Shortener
  {
    name: "LinkMagic URL Shortener",
    description: `LinkMagic URL Shortener is a comprehensive web application that allows users to shorten
    long URLs into concise and manageable links. Inspired by services like Bitly, it provides a simple
    and efficient way to generate shortened URLs for easy sharing and tracking. The project is built using
    the MERN stack.`,
    tags: ["nodejs", "mongodb", "redis", "express", "react", "tailwind-css"],
    background: urlShortner,
    githubLink:process.env.REACT_APP_LINKMAGIC_URL_SHORTENER_GITHUB,
    liveLink:process.env.REACT_APP_LINKMAGIC_URL_SHORTENER_LIVE
  },
  // SpiderSenseAI
  {
    name: "SpiderSenseAI",
    description: `SpiderSenseAI is a voice-enabled chatbot assistant named Spiderman, designed 
    to interact with users and provide information or assistance based on their queries. The 
    chatbot features a visually appealing 3D Spiderman model and utilizes advanced AI 
    capabilities from the OpenAI API. `,
    tags: ["nodejs", "mongodb", "react", "express", "redux", "css3", "threejs", "microphone"],
    background: spidersenseAI,
    githubLink:process.env.REACT_APP_LINKMAGIC_SPIDERSENSEAI_GITHUB,
    liveLink:process.env.REACT_APP_LINKMAGIC_SPIDERSENSEAI_LIVE
  },
  // Internship
  {
    name: "Internship",
    description: `
    The Internship Website project aims to bridge the gap between aspiring students and valuable
     internship opportunities by providing a user-friendly platform for internship exploration
      and application. It offers comprehensive information about available internships and enables users to easily apply for them`,
    tags: ["nodejs", "mongodb", "express","javascript"],
    background: project_1,
    githubLink:process.env.REACT_APP_LINKMAGIC_INTERNSHIP_GITHUB,
    liveLink:false
  },
  // Book Management
  {
    name: "Book Management",
    description: `The Book Management Website project is a feature-rich web app designed
     for efficient book management. It allows users to store and manage book information along 
     with secure user authentication and authorization mechanisms.`,
    tags: ["nodejs", "mongodb", "javascript", "express"],
    background: project_5,
    githubLink:process.env.REACT_APP_LINKMAGIC_BOOK_MANAGEMENT_GITHUB,
    liveLink:false
  },
  // Shopping Cart
  {
    name: "Shopping Cart",
    description: `The Shopping Cart project is an e-commerce solution that offers a robust and user-friendly online shopping experience.
      With its shopping cart functionality, users can easily browse and add products to their cart, making online shopping a breeze.
      Built using Node.js, MongoDB, AWS, and Express, this project provides essential e-commerce features for both customers and sellers.`,
    tags: ["nodejs", "mongodb", "aws", "express"],
    background: project_6,
    githubLink:process.env.REACT_APP_LINKMAGIC_BOOK_MANAGEMENT_GITHUB,
    liveLink:false
  },
  // Task Manager
  {
    name: "Task Manager",
    description: `The Task Manager project is a powerful task management application built with the PERN (PostgreSQL, Express, React, Node.js) stack and TypeScript.
     It provides a robust platform for users to efficiently organize and manage tasks.
      Features include task creation, tracking, prioritization, and more.`,
    tags: ["nodejs", "express", "postgresql","typescript","react", "tailwind-css"],
    background: project_2,
    githubLink: process.env.REACT_APP_LINKMAGIC_TASK_MANAGER_GITHUB,
    liveLink: process.env.REACT_APP_LINKMAGIC_TASK_MANAGER_LIVE
  }

]


const experiences = [
  {
    title: "Backend Developer Trainee",
    icon: functionup,
    date: "Joined Function Up in September 2022",
    points: [
      "Joined Function Up as a Backend Developer Trainee in September 2022.",
      "Received comprehensive training in Backend Development utilizing Node.js, Express.js, and MongoDB.",
      "Developed proficiency in building RESTful APIs and handling data storage and retrieval operations.",
      "Applied AWS S3 for secure and scalable file storage and retrieval.",
      "Utilized Redis for efficient caching, improving application performance.",
      "Utilized strong problem-solving skills to troubleshoot and resolve backend development challenges.",
      "Implemented JSON Web Tokens (JWT) for secure authentication and authorization.",
      "Collaborated effectively with team members using Git for version control and code collaboration.",
      "Developed backend projects by utilizing backend technology."
    ],
  },
  {
    title: "Frontend Developer Trainee",
    icon: react,
    date: "Focused on frontend technologies",
    points: [
      "Focused on learning frontend technologies, including React.js, HTML, CSS, and Tailwind-css.",
      "Started building responsive and user-friendly web interfaces.",
      "Began integrating frontend components with backend RESTful APIs to create full-fledged applications.",
      "Collaborated closely with the team to ensure seamless integration of frontend and backend components.",
      "Continuously improved skills in frontend development, creating impactful and efficient solutions.",
    ],
  },
  {
    title: "Fullstack/MERN Developer Trainee",
    icon: express,
    date: "Learned Fullstack Development and Developed Projects",
    points: [
      "Developed end-to-end web applications using MongoDB, Express.js, ReactJS, and Node.js.",
      "Implemented secure authentication and authorization mechanisms.",
      "Collaborated with cross-functional teams to deliver scalable and high-performance solutions.",
      "Continued to refine skills in both frontend and backend technologies.",
    ]
  },
  {
    title: "Data Structures and Algorithms",
    icon: dsa,
    date: "Dedicated time to Data Structures and Algorithms",
    points: [
      "Dedicated time to learn and apply fundamental Data Structures and Algorithms (DSA) concepts.",
      "Enhanced problem-solving skills and algorithmic thinking.",
      "Applied DSA knowledge to optimize code and solve complex challenges.",
      "Practiced DSA by solving questions on LeetCode and GeeksforGeeks.",
      "Engaged in CodeZinger, a platform provided by FunctionUp, to further hone DSA skills.",
    ],
  },
];


export { techs, projects, experiences }
