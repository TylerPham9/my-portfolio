/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Tyler's Portfolio!",
    author: "Tyler Pham"
  },
  plugins: [
    'gatsby-plugin-sass',
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
        name: 'src',
        path: `${__dirname}/src/`
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
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.3, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // // Advanced Options
          // selector: '[data-sal]', // Selector of the elements to be animated
          // animateClassName: 'sal-animate', // Class name which triggers animation
          // disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          // rootMargin: '0% 50%' // Corresponds to root's bounding box margin
          // enterEventName: 'sal:in' // Enter event name
          // exitEventName: 'sal:out' // Exit event name
      }
    }
  ]
}
