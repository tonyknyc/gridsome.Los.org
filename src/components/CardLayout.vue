<template>
  <div class="flex mb-4 bg-gray-dark">
    
      <g-image class=" bg-gray p-2"
        v-if="painting.url_s"
        :src="painting.url_s"
        :alt="painting.title"
      />
            <a :href="painting.url_l" target="_blank">
      <svg class="pl-2 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
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
