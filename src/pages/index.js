import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"

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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="w-full min-h-screen mb-10 p-10 md:px-20 md:pt-16">
      <div className="font-body">
        <h3 className="text-2xl text-green-400 font-display">Ashutosh</h3>
        <h1 className="text-5xl font-display">
          I build <br /> <span className="text-purple-400">applications</span>{" "}
          <br /> for web
        </h1>
        <div className="border-b-2 border-purple-400"></div>
      </div>
      {/* Introduction start */}
      <div className="my-10 md:flex font-body">
        <div className="w-full md:w-1/2 py-2 md:px-4">
          <p className=" text-xl font-display">
            A software engineer based in India who enjoys building websites and
            applications.
          </p>
        </div>
        <div className="w-full md:w-1/2 py-2 md:px-4">
          <p className="">
            See bits and pieces on GitHub, packages on npm, thoughts on Medium,
            and a full resume on LinkedIn
          </p>
          <div>
            <ul className="flex ml-0">
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
      {PROJECTS.map(project => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  </Layout>
)

export default IndexPage
