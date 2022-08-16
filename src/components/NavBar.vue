<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-dark mb-3">
    <div class="container px-4 flex flex-wrap  justify-between">
      <div class="w-full  flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <div class="flex inline-block l-0 py-2">
          <g-image src="../assets/images/favicon.png" width="50" class="pr-5" />
          <span class="self-center text-xl text-white font-semibold whitespace-nowrap">Los.org</span>
        </div>
        <button
          class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button" v-on:click="toggleNavbar()">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>

        </button>
      </div>

      <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="lg:flex items-center">
        <ul id="navList" class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a href="/" class="block py-2 pr-4 pl-3 rounded md:border-0 md:p-0" :aria-current="activeLink == 'spiritbird'"><span class="ml-4 mr-4"> {{  }} Wild birds</span></a>
          </li>
          <li class="nav-item">
            <a href="/land" class="block py-2 pr-4 pl-3 rounded md:border-0 md:p-0" :aria-current="activeLink == 'spiritland'"><span class="ml-4 mr-4">Cape Cod</span></a>
          </li>
          <li class="nav-item">
            <a href="/poetry" class="block py-2 pr-4 pl-3 rounded md:border-0 md:p-0" :aria-current="activeLink == 'spirittext'"><span class="ml-4 mr-4">Poetry</span></a>
          </li>
          <li class="nav-item">
            <a href="/painting" class="block py-2 pr-4 pl-3 rounded md:border-0 md:p-0" :aria-current="activeLink == 'spiritoil'"><span class="ml-4 mr-4">Paintings</span></a>
          </li>
          <li class="nav-item">
            <a href="/about" class="block py-2 pr-4 pl-3 rounded md:border-0 md:p-0" :aria-current="activeLink == 'spiritabout'"><span class="ml-4 mr-4">About Me</span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>


<script>
export default {
  props: ['activeLink'],
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style >
  [aria-current] {
    background-color: #777f;
  }
</style>