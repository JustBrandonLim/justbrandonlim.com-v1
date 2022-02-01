module.exports = {
  siteMetadata: {
    title: `Brandon Lim`,
    description: `Hello! My name is Brandon Lim and I am currently a student studying at Singapore Institute of Technology (SIT), majoring in BE in Informations and Communications Technology (Software Engineering). I am enthusiastic about programming and fitness.`,
    keywords: `JustBrandonLim, Portfolio, Programming, Blog, CTF`,
    siteUrl: `https://justbrandonlim.com/`,
    language: `en`,
    author: {
      name: `Brandon Lim`,
      description: `He is currently a student studying at Singapore Institute of Technology (SIT), majoring in BE in Information and Communications Technology (Software Engineering).`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brandon Lim`,
        short_name: `BL`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff0000`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-12L0HRBEDZ"],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`webp`],
          placeholder: `blurred`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              width: 650,
              linkImagesToOriginal: false,
              markdownCaptions: true,
              wrapperStyle: `margin-left: 0; margin-right: 0; box-shadow: 0 1rem 3rem rgba(0,0,0,.175)`,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
    `gatsby-remark-reading-time`,
    `gatsby-plugin-fontawesome-css`,
  ],
};
