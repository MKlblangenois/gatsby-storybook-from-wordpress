import React from 'react';

// Components
import Layout from '../../global/Layout';

const Page = ({ data }) => {
   return (
      <Layout>
         <h1>{data.wpgraphql.page.title}</h1>
      </Layout>
   );
};

export const query = graphql`
   query($databaseId: ID!) {
      wpgraphql {
         page(id: $databaseId, idType: DATABASE_ID) {
            title
            content
         }
      }
   }
`;

export default Page;
