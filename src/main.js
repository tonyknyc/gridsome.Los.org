// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "@/assets/styles/main.css";

import DefaultLayout from '@/layouts/Default.vue'



export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  if (process.isClient) {
    Vue.use(require("vue-carousel").default);
}
}
