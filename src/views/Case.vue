<template>
  <div class="fonted">
    <div class="home">
      <div class="swiper">
        <div class="swiper-wrapper">
          <!-- <div class="swiper-slide">
            <img class="swiper-slide-img"
              src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
          </div> -->
          <div class="swiper-slide">
            <img class="swiper-slide-img"
              src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="text-container">
      <div class="textBox">
        <span>文案文案文案文案文文案文案文案文案文案文</span>
      </div>
    </div>
    <div class="case">
      <div class="case-one" v-for="(item,index) in [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]" :key="index">
        <img 
        src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
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
.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  z-index: 999;
  position: absolute;
  top: 220px;
  left: 0;
  right: 0;
}

.textBox {
  width: 300px;
  height: 100px;
  word-wrap: break-word;
}

.textBox span {
  color: transparent;
  /* background-image: linear-gradient(to right, blue, pink, #fff); */
  background-image: linear-gradient(to right, #fff, #fff, #fff);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  font-size: 30px;
  background-size: 100% 100%;
  animation: bg 1000ms linear;
  position: relative;
}

@keyframes dynamicWidth {
  0% {
    left: 0;
  }

  100% {
    left: 100%;
  }
}

@keyframes bg {
  0% {
    background-size: 0% 100%;
  }

  100% {
    background-size: 100% 100%;
  }
}
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
