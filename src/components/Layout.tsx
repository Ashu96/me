/**
 * Layout component that queries htmlFor data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./layout.css";

const Layout: React.FC = ({ children }) => {
    // @ts-ignore
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
            <div className={"bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"}>
                <main className={"overflow-x-hidden"}>{children}</main>
                <footer
                    className={`hidden pt-8 pb-4 text-center font-body bg-gray-50 dark:bg-gray-800`}
                >
                    <p className="mb-2">
                        © {new Date().getFullYear()}, Built with Love using
                        {` `}
                        <a
                            className="text-purple-400 hover:text-purple-700"
                            href="https://www.gatsbyjs.org"
                        >
                            Gatsby
                        </a>
                    </p>
                    <p className="mb-2">
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
    );
};

export default Layout;
