<template>
  <Layout>
    <NavBar />
    <div class="bg-gray-dark md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit" >
    <div v-for="image in computeCards" :key="image.node.id">
      <CardLayout :painting="image.node" />
    </div>
    </div>
  </Layout>
</template>

<page-query>
query($imageTag:String) {
  metadata {
    siteName
    siteDescription
  }
  photos: allPhotos(filter: { tags: { eq: $imageTag } } ) {
    edges {
      node {
        id
        url_m
        url_l
        url_s
        title
        tags
      }
    }
  }
}
</page-query>

<script>
import CardLayout from "~/components/CardLayout.vue";
import NavBar from "~/components/NavBar.vue";

import { DASHBOARD } from "~/components/js/View.js";

export default {
  components: {
    CardLayout,
    NavBar
  },
  data: function() {
    return {
      view: DASHBOARD
    };
  },
  metaInfo() {
    return {
      title: this.$page.metadata.siteName,
      meta: [
        {
          name: "description",
          content: this.$page.metadata.siteDescription
        }
      ]
    };
  },
  created: function() {

  },
  mounted: function() {
   
  },
  watch: {

  },
  beforeDestroy() {


  },
  computed: {
    computeCards: function() {

      // otherwise show standard dashboard ...
      return Array.from(this.$page.photos.edges);
    }
  },
  methods: {

  }
};
</script>

<style lang="sccs">

</style>
