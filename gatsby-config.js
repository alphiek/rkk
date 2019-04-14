module.exports = {
  siteMetadata: {
    title: `RKK Creative`,
    description: `Paphos Freelance Web Design and Development`,
    author: `RKK Creative`,

    menuLinks: [
      {
        name: "CMS",
        link: "/CmsPage"
      },
      {
        name: "Ecommerce",
        link: "/EcommercePage"
      },
      {
        name: "Home",
        link: "/"
      },
      {
        name: "SEO",
        link: "/SeoOptPage"
      },
      {
        name: "WebApps",
        link: "/WebAppsPage"
      },
      {
        name: "WebDesign",
        link: "/WebDesignPage"
      },
      {
        name: "WebGraphics",
        link: "/WebGraphicsPage"
      },

    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
