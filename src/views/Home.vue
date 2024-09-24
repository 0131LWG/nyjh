<template>
  <div class="home">
    <h1>This is an home page</h1>
    <van-button type="default" @click="goLink('/about')">about</van-button>
    <van-button type="primary" @click="goLink('/back')">back</van-button>
    <van-button type="info" @click="goLink('/front')">front</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import { Button } from "vant"

export default {
  name: "home",
  components: {
    HelloWorld,
    vanButton: Button
  },
  methods: {
    goLink(path) {
      this.$router.push({
        path
      })
    }
  }
}
</script>
