<template>
  <Layout>
    <NavBar :activeLink="$context.imageTag" @click.native="closeSlideshow" />
    <div v-show="!slidesOn"
      class="bg-gray-dark md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit">
      <CardLayout @click.native="openSlideshow(index)" v-for="(image, index) in computeCards" :key="image.node.id"
        :painting="image.node" />
    </div>


    <div v-show="slidesOn" class="flex justify-center pl-5 pr-5">
          <ClientOnly>
        <Carousel :navigateTo="slideIdx" v-bind="slideConfig" class="w-5/6 ">
          <Slide class="flex justify-center w-full" v-for="image in computeCards" :key="image.node.id">
            <g-image :src="image.node.url_m" :alt="image.node.title" class="h-full" />
            <DownloadLink :link="image.node.url_l" />
          </Slide>
        </Carousel>
          </ClientOnly>
      <button id="closeButton" @click="closeSlideshow" class="flex justify-right w-24 h-24">
        <g-image src="@/assets/images/close.svg" />
      </button>
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
import NavBar from "../components/NavBar.vue";
import CardLayout from "../components/CardLayout.vue";
import DownloadLink from "../components/DownloadLink.vue";

export default {

  components: {
    CardLayout,
    DownloadLink,
    NavBar,
    Carousel: () =>
      import('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
    Slide: () =>
      import('vue-carousel')
        .then(m => m.Slide)
        .catch()
  },
  data() {
    return {
      slideConfig: {
        "autoplay": false,
        "autoplayHoverPause": true,
        "perPage": 1,
        "paginationEnabled": true,
        "paginationActiveColor": "#ddd",
        "paginationColor": "#666",
        "navigationClickTargetSize": 100,
        "navigationEnabled": true,
        "navigationNextLabel": "",
        "navigationPrevLabel": ""
      },
      slidesOn: false,
      slideIdx: 0
    }
  },
  metaInfo() {
    return {
      title: this.$context.pageTitle
    };
  },
  computed: {
    computeCards: function () {

      // otherwise show standard dashboard ...
      return Array.from(this.$page.photos.edges);
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.slidesOn = false;
      this.slideIdx = 0;
    })

  },
  methods: {
    openSlideshow: function (idx) {
      this.slideIdx = idx;
      this.slidesOn = !this.slidesOn;
    },
    closeSlideshow: function () {
      this.slideIdx = 0;
      this.slidesOn = false;
    }
  }
};
</script>

<style>
</style>
