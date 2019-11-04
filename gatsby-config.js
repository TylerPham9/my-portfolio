const config = require('./src/config')
module.exports = {
  siteMetadata: {
    title: "Tyler's Portfolio!",
    description: `
      This is Tyler Pham's portfolio page!
    `,
    author: "Tyler Pham",
    siteUrl: "https://tylerpham.me",

  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
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
        name: "tyler-pham",
        short_name: "tp",
        start_url: "/",
        background_color: "#FFFFFF",
        display: "minimal-ui",
      },
    },
  ]
}
