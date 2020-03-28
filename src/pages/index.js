import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"
import CourseCard from "../components/CourseCard"

const PROJECTS = [
  {
    id: 0,
    name: "Uprise",
    description:
      "Uprise is a proactive and science-based Employee Assistance Program (EAP) provider in Australia.",
    tags: ["Gatsby", "Reactjs", "Storyblok", "Styled-components"],
    imageName: "uprise",
    link: "https://uprise.co",
  },
  {
    id: 1,
    name: "Nykaa TV",
    description:
      "Buy cosmetics & beauty products online from Nykaa, the online shopping beauty store. Browse makeup, health products & more from top beauty brands. ✔ free shipping* ✔ Cash on Delivery",
    tags: ["Reactjs", "scss"],
    imageName: "nykaa",
    link: "https://www.nykaa.com/nykaatv/",
  },
]

const COURSES = [
  {
    id: 0,
    title: "React 101 in 60 minutes",
    subTitle: "Getting started with React fundamentals",
    imageName: "react101",
    link:
      "https://www.udemy.com/course/react-101-in-60-minutes/?referralCode=400AF08B8ED27F85F29F",
  },
  {
    id: 1,
    title: "Learn Gatsby and build website",
    subTitle: "Build your own blazing fast blog website with Gatsby",
    imageName: "learnGatsby",
    link:
      "https://www.udemy.com/course/draft/2897800/?referralCode=8B143CA46C642232250F",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="w-full min-h-screen mb-10 p-10 md:px-20 md:pt-16">
      <div className="font-body">
        <h3 className="mb-12 text-2xl text-green-400 font-display">Ashutosh</h3>
        <h1 className="mb-12 text-5xl font-display">
          I build <br /> <span className="text-purple-400">applications</span>{" "}
          <br /> for web
        </h1>
        <div className="border-b-2 border-purple-400"></div>
      </div>
      {/* Introduction start */}
      <div className="my-12 md:flex font-body">
        <div className="w-full md:w-1/2 py-2 md:px-4">
          <p className=" text-xl font-display">
            A software engineer based in India who enjoys building websites and
            applications.
          </p>
        </div>
        <div className="w-full md:w-1/2 py-2 md:px-4">
          <p className="mb-4">
            See bits and pieces on GitHub, packages on npm, thoughts on Medium,
            and a full resume on LinkedIn
          </p>
          <div>
            <ul className="mb-0 flex ml-0">
              <li className="pr-4">
                <a
                  className="hover:text-purple-600 border-b border-white hover:border-purple-600"
                  href="https://github.com/ashu96"
                >
                  Github
                </a>
              </li>
              <li className="px-4">
                <a
                  className="hover:text-purple-600 border-b border-white hover:border-purple-600"
                  href="https://www.linkedin.com/in/iamashutoshbhardwaj/"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Introduction end */}
      <div className="border-b-2 border-purple-400"></div>
      <section class="my-12">
        <h2 className="mb-4 text-green-400 text-2xl lg:text-3xl font-display">Projects</h2>
        <p className="mb-8 text-lg font-body">
          Take a look at the projects that I worked on
        </p>
        {PROJECTS.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </section>
      <div className="border-b-2 border-purple-400"></div>
      {/* Courses */}
      <section className="my-12 py-6">
        <h2 className="mb-4 text-green-400 text-2xl lg:text-3xl font-display">Courses</h2>
        <p className="mb-8 text-lg font-body">
          I love to share my knowledge with others.
        </p>

        <div className="flex flex-col lg:flex-row items-center">
          {COURSES.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
