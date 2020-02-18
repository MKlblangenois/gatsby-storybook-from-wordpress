import React from 'react';
import { Link } from 'gatsby';
import { removeDomaine } from '../../helpers/link.helpers';

const Nav = (props) => {
   return (
      <nav>
         <ul>
            {props.menuItems.map((menuItem, index) => (
               <li key={`mainMenuItem-${index}`}>
                  <Link to={removeDomaine(menuItem.node.url)}>{menuItem.node.label}</Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Nav;
