import React from 'react';
import { removeDomaine } from '../../helpers/link.helpers';

const Nav = (props) => {
   return (
      <nav>
         <ul>
            {props.menuItems.map((menuItem, index) => (
               <li key={`mainMenuItem-${index}`}>
                  <a href={removeDomaine(menuItem.node.url)}>{menuItem.node.label}</a>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Nav;
