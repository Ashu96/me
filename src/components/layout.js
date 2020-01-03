/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
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
      <div className='bg-black'>
        <main>{children}</main>
        <footer className="py-4 bg-gray-900 text-gray-100 text-center font-body">
          © {new Date().getFullYear()}, Built with Love using
          {` `}
          <a className='text-purple-400 hover:text-purple-700' href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
