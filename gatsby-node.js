const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, rej) => {
    const PostTemplate = path.resolve('./src/templates/PostTemplate.js');

    resolve(
      graphql(`
        query loadPagesQuery {
          allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `)
        .then(result => {
          if (result.errors) {
            throw result.errors;
          }
          // process mdx files
          result.data.allMdx.edges.forEach(({ node }) => {
            createPage({
              path: node.frontmatter.path,
              component: PostTemplate,
              context: {
                // Add optional context data to be inserted
                // as props into the page component..
                //
                // The context data can also be used as
                // arguments to the page GraphQL query.
                //
                // The page "path" is always available as a GraphQL
                // argument.
                pathSlug: node.frontmatter.path
              }
            });
          });
        })
        .catch(error => {
          console.warn(error);
          rej();
        })
    );
  });
};
