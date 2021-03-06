const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.rkkcreative.xyz`,
    logo: `/images/logo.png`,
    defaultImage: `/images/ogImage.png`,
    seoImage: `/images/SEO.png`,
    webDesignImage: `/images/Graphics/Webdesign.png`,
    author: `RKK Creative`,
    email: 'info@rkkcreative.xyz',
    facebook: 'https://www.facebook.com/rkkcreative/',
    twitter: 'https://twitter.com/rkkcreative/',
    insta: 'https://www.instagram.com/rkkcreative/',
    pin: 'https://www.pinterest.com/rkkcreative/',
    linked: 'https://www.linkedin.com/in/rkkcreative/',
    menuLinks: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "Web Design",
        link: "/web-design"
      },
      {
        name: "Development",
        link: "/web-development"
      },
      {
        name: "Web Graphics",
        link: "/web-graphics"
      },
      {
        name: "SEO",
        link: "/seo"
      },
      {
        name: "Portfolio",
        link: "/Portfolio"
      },
    ],
  },

   plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.rkkcreative.xyz',
        sitemap: 'https://www.rkkcreative.xyz/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        host: 'rkkcreative.xyz',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: path.join(__dirname, `src`, `pdf`),
      }
    },
    'gatsby-plugin-transition-link',
    {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://www.rkkcreative.xyz`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        fileName: false,
      }
    },
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RKK Creative`,
        short_name: `RKK`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
