const config = require('./src/config')
module.exports = {
  siteMetadata: {
    title: "Tyler's Portfolio!",
    author: "Tyler Pham",
    siteTitle: config.siteTitle
  },
  plugins: [
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true
      }
    },

    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#FFFFFF",
        display: "minimal-ui",
      },
    },
  ]
}
