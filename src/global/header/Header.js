import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Nav from './Nav';

const Header = () => (
   <StaticQuery
      query={graphql`
         query GetMenuMain {
            wpgraphql {
               menuItems(where: { location: MENU_MAIN }) {
                  edges {
                     node {
                        label
                        url
                     }
                  }
               }
            }
         }
      `}
      render={(data) => (
         <header>
            <Nav menuItems={data.wpgraphql.menuItems.edges} />
         </header>
      )}
   />
);

export default Header;
