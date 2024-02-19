<template>
  <Layout>
    <NavBar :activeLink="$context.imageTag" @click.native="closeSlideshow" />
    <div v-show="!slidesOn || !isDesktop"
      class="bg-gray-dark md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit">
      <CardLayout @click.native="openSlideshow(index)" v-for="(image, index) in computeCards" :key="image.node.id"
        :painting="image.node" />
    </div>


    <div v-show="slidesOn && isDesktop" class="flex justify-center w-full pl-5 pr-5">
      <ClientOnly>
        <VueSlickCarousel v-bind="slideConfig" 
                          :initialSlide="slideIdx" 
                          :arrows="isDesktop"
                          :vertical="!isDesktop"
                          class="flex justify-center w-5/6" >
          <div v-for="image in computeCards" 
                :key="image.node.id" 
                class="flex justify-center max-h-screen" >
            <g-image @click="closeSlideshow" :src="image.node.url_l" :alt="image.node.title" fit="outside" class="max-h-screen"  />
          </div>
        </VueSlickCarousel>
      </ClientOnly>

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
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import { isMobileOnly } from 'mobile-device-detect';

export default {

  components: {
    CardLayout,
    NavBar,
    VueSlickCarousel
  },
  data() {
    return {
      slideConfig: {
        "slidesToScroll": 1,
        "slidesToShow": 1,
        "rows": 1
      },
      slidesOn: false,
      slideIdx: 0,
      isDesktop: false
    }
  },
  metaInfo() {
    return {
      title: this.$context.pageTitle
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.slidesOn = false;
      this.slideIdx = 0;
      this.isDesktop = !isMobileOnly
      // console.log('devive isMobile :: ' + isMobile)
    })
  },
  computed: {
    computeCards: function () {

      // otherwise show standard dashboard ...
      return Array.from(this.$page.photos.edges);
    }
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
.slick-slide>div>div {
  display: inline-flex !important;
}

.slick-slide>div {
  padding: 5px;
}
</style>
