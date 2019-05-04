const path = require(`path`)

module.exports = {
  siteMetadata: {
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
        link: "/WebDesignPage"
      },
      {
        name: "Development",
        link: "/DevelopmentPage"
      },
      {
        name: "Web Graphics",
        link: "/WebGraphicsPage"
      },
      {
        name: "SEO Optimisation",
        link: "/SeoOptPage"
      },
      {
        name: "Portfolio",
        link: "/PortfolioPage"
      },
    ],
  },
  plugins: [
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
