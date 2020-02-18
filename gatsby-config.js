require('dotenv').config({
   path: '.env.${process.env.NODE_ENV}'
});

module.exports = {
   siteMetadata: {
      title: 'Site title'
   },
   plugins: [
      {
         resolve: 'gatsby-plugin-manifest',
         options: {
            name: process.env.GATSBY_SITE_TITLE,
            short_name: process.env.GATSBY_SITE_TITLE,
            start_url: '/',
            background_color: process.env.GATSBY_THEME_COLOR_BG,
            theme_color: process.env.GATSBY_THEME_COLOR_THEME,
            display: 'standalone',
            icon: 'src/assets/logos/icon.png'
         }
      },
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            path: `${__dirname}/src/`,
            name: 'src'
         }
      },
      {
         resolve: 'gatsby-source-graphql',
         options: {
            // This type will contain remote schema Query type
            typeName: 'WPGraphQL',
            // This is field under which it's accessible
            fieldName: 'wpgraphql',
            // Url to query from
            url: 'https://mediakodstag.wpengine.com/graphql'
         }
      },
      'gatsby-plugin-root-import',
      'gatsby-plugin-react-helmet',
      // 'gatsby-plugin-offline',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      'gatsby-plugin-sass',
      'gatsby-plugin-styled-components'
   ]
};
