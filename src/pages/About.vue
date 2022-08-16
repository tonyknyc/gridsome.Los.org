<template>
  <Layout>
    <NavBar activeLink="spiritabout" />
    <div class="mr-5 md:mr-10">
      <g-image src="../assets/images/kay-pleinair.jpg" width="180" class="pr-5 float-left" />
      <p class="pb-5"> My name is Tony Kirman and I have been living on Cape Cod since 2017, making photographs,
        drawing, painting and writing. Being a
        city kid
        (London and then NYC) the experience of Nature was always optional so the birds and other wild
        animals on the Cape and the ocean, the ponds and the wind itself have provided a crash course in spirituality!
      </p>

      <p class="pb-5"> Los.org? Los is a figure in William Blake's eccentric mythology (how he moreorless avoided the
        censors of his
        day). It is also a flexible acronym, Lack of Space, Loss of Signal etc. My Wordpress site was recently hacked so
        I rebuilt using some spectacular free tech - Gridsome (Vue's answer to Gatsby/React) and Tailwindcss (see footer
        for details). I have had the domain since 1995 - for a Web 1.0 experience visit <a
          href="http://Los.org/indexn3.html" target="_blank" class="text-gray">my old site</a>.</p>

      <g-image src="../assets/images/shadow-selfie.jpg" width="200" class="pl-5 float-right" />
      <p class="pb-5"> In the summer I sell my art at the Artist Cottages in Orleans, MA and this year I will be there
        Aug 24 through
        Labor Day.
        If you are in the area please drop by with conversation and cash :) The Wild Bird art prints are made with
        charcoal, graphite, watercolor crayons and paint. They are available in limited editions of 15 and smaller
        unlimited sizes. All are giclee prints,
        meaning the ink is pigment-based and the paper is archival and acid-free. The bird prints are on Moab Entrada
        Natural Rag and the landscape photographs are on Moab Estrada Bright Rag. I color-grade and print everything
        myself. I also hope  to have some original oil paintings and woodblock prints available this year.</p>

      <div class="md:flex md:justify-between">
        <div class="flex inline-block mr-4 py-2">
          <g-image src="../assets/images/email.png" width="50" class="mr-5" />
          <span class="self-center text-white whitespace-nowrap">tony at Los.org</span>
        </div>
                <div class="flex inline-block mr-4 py-2">
          <g-image src="../assets/images/flickr.png" width="50" class="mr-5" />
          <span class="self-center text-white whitespace-nowrap">RedKen</span>
        </div>
        <div class="flex inline-block mr-4 py-2">
          <g-image src="../assets/images/instagram.png" width="50" class="mr-5" />

          <span class="self-center text-white whitespace-nowrap">tonyknyc</span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import NavBar from "~/components/NavBar.vue";

export default {
  components: {
    NavBar
  },
  metaInfo: {
    title: 'About me'
  }
}
</script>
