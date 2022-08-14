<template>
  <div class="bg-gray mb-4 p-2">
      <g-image class="float-none"
        v-if="painting.url_s"
        :src="painting.url_s"
        :alt="painting.title"
      />
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
