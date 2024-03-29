/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        // For "Framer-motion"
        {
          include: /node_modules/,
          test: /\.mjs$/,
          type: "javascript/auto",
        },
      ],
    },
  })
}
