module.exports = {
  siteMetadata: {
    title: `Ashutosh`,
    description: `Full-stack javascript developer. Love building web application using Reactjs and Nodejs`,
    author: `@BhardwajAshu96`,
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "UA-158048207-1",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
}
