// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "Los.org",
  siteDescription: "Art etc. by Tony Kirman",
  siteUrl: process.env.SITE_URL,

  icon: {
    favicon: {
      src: "./src/assets/images/favicon.png",
      sizes: [96],
    },
    touchicon: {
      src: "./src/assets/images/favicon.png",
      sizes: [76, 152, 120, 167],
      precomposed: true,
    },
  },

  plugins: [
    {
      use: "@gridsome/plugin-sitemap",
    },
    {
      use: "gridsome-plugin-tailwindcss",
      /**
      * These are the default options.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
      */
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
          // No longer needed as of Tailwind 1.4.0
          // ...process.env.NODE_ENV === "production" ? [purgecss] : []
        ],
      },
    },
  },
  transformers: {
    // add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
    },
  },
};
