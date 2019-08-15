/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'My blog',
    titleTemplate: '%s · Warmeta',
    description: `Warmeta's personal web.`,
    url: 'https://www.warmeta.netlify.com',
    image: 'https://secure.gravatar.com/avatar/56ec1452bd2d591ee755926b61b6df28',
    twitterUsername: '@JAGarcia_7',
    githubUrl: 'https://github.com/warmeta',
    linkedinUrl: 'https://www.linkedin.com/in/jose-garc%C3%ADa-ar%C3%A9valo-0b783a156/'
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
