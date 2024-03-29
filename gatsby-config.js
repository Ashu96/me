module.exports = {
  siteMetadata: {
    title: `Ashutosh | Software Engineer`,
    description: `Hey there, My name is Ashutosh and I'm a Software Engineer who loves building web application using Typescript, Reactjs and Nodejs`,
    author: `@bhardwajAshu96`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ashutosh Bhardwaj`,
        short_name: `Ashutosh`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#805ad5`,
        display: `minimal-ui`,
        icon: `src/images/Letter-A-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
}
