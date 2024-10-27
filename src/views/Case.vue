<template>
  <div class="fonted">
    <div class="home">
      <div class="swiper">
        <div class="swiper-wrapper">
          <!-- <div class="swiper-slide">
            <img class="swiper-slide-img"
              src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
          </div> -->
          <div class="swiper-slide">
            <img class="swiper-slide-img"
              src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
          </div>
        </div>
      </div>
    </div>
    <div class="case">
      <div class="case-one" v-for="(item,index) in [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]" :key="index">
        <img 
        src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
        <div class="case-title">文案文案</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'case',
  components: {},
  created () {
    // Rx.Observable.of(1,2,3).map(function (x) { return x + '!!!'; })
  },
  methods: {
  }
}
</script>

<style scoped>
.home {
  height: 50vh;
  max-height: 1440px;
}
.swiper {
  width: 100%;
  height: 100%;
  max-height: 1440px;

  .swiper-slide-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.case{
  padding: 30px 20px 0 40px;
  background-color: #efefef;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.case-one{
  width: 19%;
  background-color: #fff;
  margin-bottom: 30px;
}
.case-one img{
  height: 152px;
  width: 100%;
  object-fit: cover;
}
.case-title{
  text-align: center;
  border-top: 1px solid #999;
  margin-top: -4px;
  line-height: 40px;
}
@media screen and (max-width:900px) {
  .case-one{
    width: 49%;
  }
}
</style>
