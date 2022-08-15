// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {


  api.loadSource(async actions => {

    await axios({
      method: 'get',
      url: 'https://api.flickr.com/services/rest',
      params: {
        api_key: process.env.FLICKR_KEY,
        user_id: process.env.FLICKR_USERID,
        method: `flickr.photosets.getPhotos`,
        photoset_id: `72157698726198434`,
        extras: 'url_s, url_m, url_l, tags, machine_tags',
        page: 1,
        format: 'json',
        nojsoncallback: 1,
        per_page: 30,
      }
    }).then((response) => {

      const collection = actions.addCollection({
        typeName: 'Photos'
      })

      const images = response.data.photoset.photo;

      for (const p of images) {
        collection.addNode({
          id: p.id,
          title: p.title,
          url_s: p.url_s,
          url_m: p.url_m,
          url_l: p.url_l,
          tags: p.tags,
          mtags: p.machine_tags
        })
      }
    })

  })

  // make album pages for each flickr type
  // they're all in one photoset tagged separately
  api.createPages(({ createPage }) => {
    createPage({
      path: `/`,
      component: './src/templates/AlbumPage.vue',
      context: {
          imageTag: 'spiritbird'
      }
    })

    createPage({
      path: `/Land`,
      component: './src/templates/AlbumPage.vue',
      context: {
          imageTag: 'spiritland'
      }
    })
  })
}