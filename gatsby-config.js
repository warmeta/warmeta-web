/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'My website',
    titleTemplate: '%s · Warmeta',
    description: `Warmeta personal web.`,
    url: 'https://www.warmeta.netlify.com',
    image: 'https://secure.gravatar.com/avatar/56ec1452bd2d591ee755926b61b6df28',
    twitterUsername: '@JAGarcia_7',
    githubUrl: 'https://github.com/warmeta',
    linkedinUrl: 'https://www.linkedin.com/in/jose-garc%C3%ADa-ar%C3%A9valo-0b783a156/'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve('./src/templates/PostTemplate.js'),
          default: require.resolve('./src/templates/PageTemplate.js')
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
        ignore: [`**/.*`] // ignore files starting with a dot
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
        ignore: [`**/.*`] // ignore files starting with a dot
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    }
  ]
};
