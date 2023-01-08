/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
// @ts-ignore
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SeoProps {
    title: string;
    description: string;
    lang?: string;
    meta?: any[];
}

function SEO(props: SeoProps) {
    const { description, lang = "en", meta = [], title } = props || {};

    const { site, allFile } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
                allFile(filter: {name: {eq: "ashutosh_profile_picture"}}) {
                    nodes {
                    publicURL
                    name
                    }
                }
            }
        `
    );
    const imageUrl = allFile?.nodes[0]?.publicURL;
    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: "google-site-verification",
                    content: "5vd7F6h0MJsY14D9mccWruT3GEj8_j6WU7vo9kmGFnw"
                },
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:image`,
                    content: imageUrl
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author
                },
                {
                    name: `twitter:title`,
                    content: title
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                },
                {
                    property: `twitter:image`,
                    content: imageUrl
                }
            ].concat(meta)}
        />
    );
}

export default SEO;
