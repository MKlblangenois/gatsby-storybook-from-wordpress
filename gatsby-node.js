const path = require(`path`);

exports.createPages = ({ graphql, actions, reporter }) => {
   const { createPage } = actions;

   // Define our template here
   const templatePage = path.resolve(`src/templates/Pages/Page.js`);

   // GraphQL allPages
   return graphql(`
      {
         wpgraphql {
            pages {
               nodes {
                  slug
                  databaseId
                  isFrontPage
               }
            }
         }
      }
   `).then((result) => {
      // Handle errors
      if (result.errors) {
         reporter.panicOnBuild(`Error while running GraphQL query.`);
         return;
      }

      // Create pages for each page found in graphql
      result.data.wpgraphql.pages.nodes.forEach((pageData) => {
         let path = pageData.isFrontPage ? '/' : pageData.slug;

         createPage({
            path,
            component: templatePage,
            context: {
               databaseId: pageData.databaseId
            }
         });
      });
   });
};
