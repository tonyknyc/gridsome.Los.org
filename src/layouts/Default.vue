<template>
  <div>
    <transition name="fade" appear>
      <div>
        <slot />
      </div>
    </transition>
    <footer>
      <span>
        Copyright © {{ new Date().getFullYear() }}.
      </span>
      <span>
        Powered by
        <a href="//gridsome.org">Gridsome</a>
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
