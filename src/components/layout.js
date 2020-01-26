/**
 * Layout component that queries htmlFor data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import "./toggle.css"

const nightIcon = require("../images/moon.svg")
const lightIcon = require("../images/contrast.svg")

const Layout = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = useState(true)
  const bgColor = isThemeDark ? "bg-gray-900" : "bg-gray-100"
  const textColor = isThemeDark ? "text-gray-100" : "text-gray-900"

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log({ data })

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className={`${bgColor} ${textColor}`}>
        <div className="absolute top-0 right-0 flex items-center mt-4 mr-4 py-2">
          <div className="relative">
            <input
              className="tgl tgl-ios"
              id="toggle-theme"
              type="checkbox"
              checked={isThemeDark}
              onChange={() => setIsThemeDark(!isThemeDark)}
            />
            <label
              className="tgl-btn bg-gray-700"
              htmlFor="toggle-theme"
            ></label>
            <img
              className={`absolute top-0 ${
                isThemeDark ? "left-0 ml-2" : "right-0 mr-2"
              } w-5 mt-1`}
              src={isThemeDark ? nightIcon : lightIcon}
              alt="toggle-icon"
            />
          </div>
        </div>
        <main>{children}</main>
        <footer className="py-4 text-center font-body">
          © {new Date().getFullYear()}, Built with Love using
          {` `}
          <a
            className="text-purple-400 hover:text-purple-700"
            href="https://www.gatsbyjs.org"
          >
            Gatsby
          </a>
          <p>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
