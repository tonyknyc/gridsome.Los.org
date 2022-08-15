<template>
  <div class="mb-4 ">
    <a :href="painting.url_l" target="_blank">
      <g-image class="mx-auto bg-gray p-2"
        v-if="painting.url_s"
        :src="painting.url_s"
        :alt="painting.title"
      />
    </a>
  </div>
</template>

<script>

export default {

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
