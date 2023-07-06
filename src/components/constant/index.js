
//TECH_STACK_LOGO

import javascript from '../../assets/tech_stacks/javascript.png'
import node from '../../assets/tech_stacks/node.png'
import react from '../../assets/tech_stacks/react.png'
import mongodb from '../../assets/tech_stacks/mongodb.png'
import express from '../../assets/tech_stacks/express.png'
import mysql from '../../assets/tech_stacks/mysql.png'
import redis from '../../assets/tech_stacks/redis.png'
import git from '../../assets/tech_stacks/git.png'   
import github from '../../assets/tech_stacks/github.png'
import aws from '../../assets/tech_stacks/aws.png'
import html from '../../assets/tech_stacks/html.png'
import css from '../../assets/tech_stacks/css.png'

// PROJECT COVER IMAGES
import blogging_site from '../../assets/project_images/blogging_website.webp'
import url_shortner from '../../assets/project_images/url_shortner.webp'
import internship from '../../assets/project_images/internship.webp'
import book_management from '../../assets/project_images/book_management.webp'
import shoppingCart  from '../../assets/project_images/shoppingCart.webp'
import spiderman from '../../assets/project_images/spiderman.webp'

const techs = [
  {
    id: 1,
    src: node,
    title: "Node.js",
    style: "green-shadow",
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
    src: mysql,
    title: "MySQL",
    style: "sky-shadow",
  },
  {
    id: 7,
    src: aws,
    title: "AWS_S3",
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
  }
];

const projects = [
  {
    name: "Blogging Site",
    description: `The Blogging Site project is a dynamic web application that allows users to
     create, read, update, and delete blog posts. It provides a user-friendly interface for
      managing blog content efficiently.Users can easily create new blog posts by providing a title, content, and optional tags or categories. `,
    tags: [
      {
        name: "nodejs",
        color: "primary",
      },
      {
        name: "mongodb",
        color: "secondary",
      },
      {
        name: "react",
        color: "tertiary",
      },
      {
        name: "express",
        color: "primary",
      },
    ],
    image: blogging_site,
    source_code_link: process.env.REACT_APP_PROJECT_1
  },
  {
    name: "URL Shortener",
    description: `The URL Shortener project is a web application that enables users to shorten
     long URLs into concise and manageable links. Inspired by services like Bitly, it provides
      a simple and efficient way to generate shortened URLs for easy sharing and tracking.`,
    tags: [
      {
        name: "nodejs",
        color: "primary",
      },
      {
        name: "mongodb",
        color: "secondary",
      },
      {
        name: "redis",
        color: "tertiary",
      },
      {
        name: "express",
        color: "primary",
      },
    ],
    image: url_shortner,
    source_code_link: process.env.REACT_APP_PROJECT_2
  },
  {
    name: "SpiderSenseAI",
    description: `SpiderSenseAI is a voice-enabled chatbot assistant named Spiderman, designed 
    to interact with users and provide information or assistance based on their queries. The 
    chatbot features a visually appealing 3D Spiderman model and utilizes advanced AI 
    capabilities from the OpenAI API. `,
    tags: [
      {
        name: "nodejs",
        color: "primary",
      },
      {
        name: "react",
        color: "secondary",
      },
      {
        name: "redux",
        color: "tertiary",
      },
      {
        name: "express",
        color: "primary",
      },
      {
        name: "css",
        color: "primary",
      },
      {
        name: "open_ai_api",
        color: "secondary",
      },
      {
        name: "threejs",
        color: "tertiary",
      },
      {
        name: "speech_recognition",
        color: "tertiary",
      }
      
    ],
    image: spiderman,
    source_code_link: process.env.REACT_APP_PROJECT_6
  },
  {
    name: "Internship",
    description: `
    The Internship Website project aims to bridge the gap between aspiring students and valuable
     internship opportunities by providing a user-friendly platform for internship exploration
      and application. It offers comprehensive information about available internships and enables users to easily apply for them
`,
    tags: [
      {
        name: "nodejs",
        color: "primary",
      },
      {
        name: "mongodb",
        color: "secondary",
      },
      {
        name: "awsS3",
        color: "tertiary",
      },
      {
        name: "express",
        color: "primary",
      },
    ],
    image: internship,
    source_code_link: process.env.REACT_APP_PROJECT_3
  },
  {
    name: "Books_ Management",
    description: `The Book Management Website project is a feature-rich web app designed
     for efficient book management. It allows users to store and manage book information along 
     with secure user authentication and authorization mechanisms.`,
    tags: [
      {
        name: "nodejs",
        color: "primary",
      },
      {
        name: "mongodb",
        color: "secondary",
      },
      {
        name: "awsS3",
        color: "tertiary",
      },
      {
        name: "express",
        color: "primary",
      },
      {
        name: "jsonwebtoken",
        color: "tertiary",
      },
    ],
    image: book_management,
    source_code_link: process.env.REACT_APP_PROJECT_4
  },
  {
    name: "E-Commerce Website",
    description: `The E-Commerce Website project is a robust and user-friendly online shopping
     platform. With its shopping cart features and functionalities, users can enjoy a seamless 
     shopping experience.`,
    tags: [
      {
        name: "nodejs",
        color: "primary",
      },
      {
        name: "mongodb",
        color: "secondary",
      },
      {
        name: "awsS3",
        color: "tertiary",
      },
      {
        name: "express",
        color: "primary",
      },
      {
        name: "bcrypt",
        color: "secondary",
      },
      {
        name: "jsonwebtoken",
        color: "tertiary",
      },
    ],
    image: shoppingCart,
    source_code_link: process.env.REACT_APP_PROJECT_5
  }
]

export { techs, projects }
