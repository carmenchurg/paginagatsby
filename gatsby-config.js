/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    // Otras propiedades de metadata...
    siteUrl: 'https://misitio.com', // Reemplaza esto con la URL de tu sitio web
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mi Sitio Web',
        short_name: 'SitioWeb',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/icon.jpg', // Ruta a tu icono
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    // Otros plugins aquí...
  ],
};

