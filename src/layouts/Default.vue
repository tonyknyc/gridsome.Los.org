<template>
  <div class="h-screen text-white bg-gray-dark">
    <transition name="fade" appear>
      <div class="bg-gray-dark h-full">
        <slot />
      </div>
    </transition>
    <footer class="bg-gray-dark flex justify-center sticky bottom-0">
      <span class="text-gray text-sm">
        Copyright © {{ new Date().getFullYear() }} 
        Tony Kirman, built with <a href="//gridsome.org" target="_blank">Gridsome</a> & <a href="//tailwindcss.com/" target="_blank">Tailwindcss</a>
      </span>
    </footer>
  </div>
</template>

<script>


export default {
  components: {

  },
  props: {

  }
};
</script>

<style lang="scss">

</style>
