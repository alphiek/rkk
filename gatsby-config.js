const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.rkkcreative.xyz`,
    title: `RKK Creative`,
    description: `Paphos Freelance Web Design and Development`,
    author: `RKK Creative`,
    email: 'info@rkkcreative.xyz',
    facebook: 'https://www.facebook.com/RKKCreative/',
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
        link: "/WebDesign"
      },
      {
        name: "Development",
        link: "/WebDevelopment"
      },
      {
        name: "Web Graphics",
        link: "/WebGraphics"
      },
      {
        name: "SEO",
        link: "/SEO"
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
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
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
    'gatsby-plugin-transition-link',
    {
    resolve: `gatsby-plugin-accessibilityjs`,
    options: {
      injectStyles: false,
      errorClassName: false,
      },
    },
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
