module.exports = {
  siteMetadata: {
    title: `The Warm Up Podcast`,
    description: `The Warm Up Podcast is a comedic joyride into the world of sports and entertainment. Take an imaginary road trip with three Long Islanders as they look to discover what makes athletes and entertainers successful.`,
    author: ``,
    twitter: ``,
    instagram: `https://www.instagram.com/thewarmuppodcast/`,
    facebook: ``,
    youtube: `https://www.youtube.com/channel/UCt4hTSbTppVz1NlRpmfWVYw`,
    apple: `https://podcasts.apple.com/podcast/id1465633538?ct=podlink&mt=2`,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL3RoZXdhcm11cHBvZGNhc3QvZmVlZC54bWw=`,
    pocket: `https://pca.st/itunes/1465633538`,
    spotify: `https://open.spotify.com/show/1E1zgJ80UVtrHrvrr2ndDj`,
    overcast: `https://overcast.fm/itunes1465633538`,
    castbox: `https://castbox.fm/vic/1465633538`,
    castro: `https://castro.fm/itunes/1465633538`,
    podbean: ``,
    beaker: `https://www.breaker.audio/shows?feed_url=https%3A%2F%2Ffeed.podbean.com%2Fthewarmuppodcast%2Ffeed.xml`,
    stitcher: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `https://feed.podbean.com/thewarmuppodcast/feed.xml`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
