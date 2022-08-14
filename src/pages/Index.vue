<template>
  <Layout>
    <div class="bg-gray-dark md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit" >
    <div class="flex items-center" v-for="image in computeCards" :key="image.node.id">
      <CardLayout :painting="image.node" />
    </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  photos: allPhotos {
    edges {
      node {
        id
        url_m
        url_l
        url_s
        title
      }
    }
  }
}
</page-query>

<script>
import CardLayout from "~/components/CardLayout.vue";
import { DASHBOARD } from "~/components/js/View.js";

export default {
  components: {
    CardLayout
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
    // subscribe to (re)-render events
    if (process.isClient) {
      let _this = this;
      ["load", "resize"].forEach(function(event) {
        window.addEventListener(event, _this.resizeAllCards);
      });
    }
  },
  mounted: function() {
    // call after the next DOM update cycle
    if (process.isClient) {
      let _this = this;
      this.$nextTick(function() {
        _this.resizeAllCards();
      });
    }
  },
  watch: {
    view() {
      if (process.isClient) {
        let _this = this;
        this.$nextTick(function() {
          _this.resizeAllCards();
        });
      }
    },
    filter() {
      if (process.isClient) {
        let _this = this;
        this.$nextTick(function() {
          _this.resizeAllCards();
        });
      }
    }
  },
  beforeDestroy() {

    // unsubscribe from all other event listeners
    if (process.isClient) {
      let _this = this;
      ["load", "resize"].forEach(function(event) {
        window.removeEventListener(event, _this.resizeAllCards);
      });
    }
  },
  computed: {
    computeCards: function() {

      // otherwise show standard dashboard ...
      return Array.from(this.$page.photos.edges);
    }
  },
  methods: {

    // resize an individual card
    resizeCard(card) {
      let grid = document.getElementsByClassName("masonry")[0],
        rowGap = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
        ),
        rowHeight = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
        );
      /*
       * Spanning for any brick = S
       * Grid's row-gap = G
       * Size of grid's implicitly create row-track = R
       * Height of item content = H
       * Net height of the item = H1 = H + G
       * Net height of the implicit row-track = T = G + R
       * S = H1 / T
       */
      let rowSpan = Math.ceil(
        (card.querySelector(".card-layout").getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );
      // set the spanning as calculated above (S)
      card.style.gridRowEnd = "span " + rowSpan;
    },
    // resize all cards
    resizeAllCards() {
      let allCards = document.getElementsByClassName("cards");
      // loop through the above list and execute the spanning function to each masonry item
      Array.from(allCards).forEach(card => this.resizeCard(card));
    }
  }
};
</script>

<style lang="sccs">

</style>
