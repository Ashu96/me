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

export const ThemeContext = React.createContext({ isThemeDark: true });

const Layout = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = useState(true)
  const bgColor = isThemeDark ? "bg-gray-900" : "bg-gray-100"
  const textColor = isThemeDark ? "text-gray-100" : "text-gray-800"
  // const borderColor = isThemeDark ? "border-gray-100" : "border-gray-800"
  const footerBgColor = isThemeDark ? "bg-gray-800" : "bg-gray-200"

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeContext.Provider value={{ isThemeDark }}>
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
        <main className='container mx-auto'>{children}</main>
        <footer className={`pt-8 pb-4 text-center font-body ${footerBgColor}`}>
          <p className='mb-2'>
            © {new Date().getFullYear()}, Built with Love using
            {` `}
            <a
              className="text-purple-400 hover:text-purple-700"
              href="https://www.gatsbyjs.org"
            >
              Gatsby
            </a>
          </p>
          <p className='mb-2'>
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
    </ThemeContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
