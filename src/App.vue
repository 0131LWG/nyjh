<template>
  <div id="app">
    <HeaderNav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue"
import Footer from "@/components/Footer.vue";
export default {
  data: () => ({}),
  components:{HeaderNav,Footer},
  methods: {
    goLink(path) {
      this.$router.push({
        path,
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
<style>
*{
  padding: 0;
  margin: 0;
}
</style>


<style>
@media (min-width: 800px) {
    body::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    body::-webkit-scrollbar-button {
        background-color: #222;
    }

    body::-webkit-scrollbar-track {
        background: #222;
    }

    body::-webkit-scrollbar-thumb {
        background: #ccd933;
    }

    /* body::-webkit-scrollbar-corner {
        background: #222;
    } */

    body::-webkit-scrollbar-resizer {
        background: #222;
    }
}
</style>


