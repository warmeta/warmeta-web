/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Test web',
    titleTemplate: '%s · The web',
    description: `Warmeta's personal web.`,
    url: 'https://www.warmeta.com',
    image: 'https://secure.gravatar.com/avatar/56ec1452bd2d591ee755926b61b6df28',
    twitterUsername: '@JAGarcia_7'
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    }
  ]
};
