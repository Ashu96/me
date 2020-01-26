import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="w-full h-screen p-10 md:px-16">
      <div className="font-body">
        <h3 className="text-2xl text-green-400 font-display">Ashutosh</h3>
        <h1 className="text-5xl font-display">
          I build <br /> <span className="text-purple-400">applications</span>{" "}
          <br /> for web
        </h1>
        <div className="border-b-2 border-purple-400"></div>
      </div>

      <div className="mt-10 md:flex font-body">
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
              <li className="px-4">
                <a
                  className=" hover:text-purple-400 border-b border-white hover:border-purple-700"
                  href="https://github.com/ashu96"
                >
                  Github
                </a>
              </li>
              <li className="px-4">
                <a
                  className=" hover:text-purple-400 border-b border-white hover:border-purple-700"
                  href="https://github.com/ashu96"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
