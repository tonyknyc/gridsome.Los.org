<template>
  <div class="flex mb-4 bg-gray-dark">
    <g-image class=" bg-gray p-2" v-if="painting.url_s" :src="painting.url_s" :alt="painting.title" />
    <DownloadLink :link="painting.url_l" />
  </div>
</template>

<script>
import DownloadLink from "../components/DownloadLink.vue";

export default {
  components: {
    DownloadLink
  },
  props: {
    painting: {
      type: Object,
      required: true
    }
  }
};
</script>

<style >

</style>
