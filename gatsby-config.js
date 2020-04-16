require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `sunghyun.dev`,
    siteTitleAlt: `sunghyun.dev`,
    siteHeadline: `blog @sunghyun`,
    siteUrl: `https://sunghyun.dev`,
    siteImage: '/og_image.jpg',
    siteDescription: `Personal website for sunghyun.lee, web developer`,
    siteLanguage: `kr`,
    author: `@sunghyun-lee`,
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
    ],
    externalLinks: [
      {
        name: `instagram`,
        url: `https://www.instagram.com/ppudolph`,
      },
      {
        name: `github`,
        url: `https://www.github.com/sunghyun-lee`
      }
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        formatString: `YYYY.MM.DD`,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `instagram`,
            url: `https://www.instagram.com/ppudolph/`,
          },
          {
            name: `github`,
            url: `https://www.github.com/sunghyun-lee`
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sunghyun.dev`,
        short_name: `sunghyun.dev`,
        description: `Personal website for sunghyun-lee, web developer`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
