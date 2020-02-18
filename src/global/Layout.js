import React from 'react';
import { graphql } from 'gatsby';

import Header from './header/Header';

const Layout = ({ children }) => (
   <>
      <Header />

      {children}
   </>
);

export default Layout;
