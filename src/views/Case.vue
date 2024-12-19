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
      <div class="case-one" v-for="(item,index) in cases" :key="index">
        <img 
        :src="item.url" />
        <div class="case-title">{{item.title}}</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'case',
  components: {},
  data: () => ({
        cases:[
          {
            title:'可口可乐',
            url:require('../assets/tab5/case1.png'),
          },
          {
            title:'加多宝',
            url:require('../assets/tab5/case2.png'),
          },
          {
            title:'健力宝',
            url:require('../assets/tab5/case3.png'),
          },
          {
            title:'光明乳业',
            url:require('../assets/tab5/case4.png'),
          },
          {
            title:'天地壹号',
            url:require('../assets/tab5/case5.png'),
          },
          {
            title:'天润乳业',
            url:require('../assets/tab5/case6.png'),
          },
          {
            title:'菊乐股份',
            url:require('../assets/tab5/case7.png'),
          },
          {
            title:'安捷利美维',
            url:require('../assets/tab5/case8.png'),
          },
          {
            title:'迅达科技',
            url:require('../assets/tab5/case9.png'),
          },
          {
            title:'生益电子',
            url:require('../assets/tab5/case10.png'),
          },
          {
            title:'迈为股份',
            url:require('../assets/tab5/case11.png'),
          },
          {
            title:'聚飞光电',
            url:require('../assets/tab5/case12.png'),
          },
          {
            title:'水晶光电',
            url:require('../assets/tab5/case13.png'),
          },
          {
            title:'维信诺',
            url:require('../assets/tab5/case14.png'),
          },
          {
            title:'纬达光电',
            url:require('../assets/tab5/case15.png'),
          },
          {
            title:'宇瞳光学',
            url:require('../assets/tab5/case16.png'),
          },
          {
            title:'伯恩光学',
            url:require('../assets/tab5/case17.png'),
          },
          {
            title:'中国航天',
            url:require('../assets/tab5/case18.png'),
          },
          {
            title:'南玻集团',
            url:require('../assets/tab5/case19.png'),
          },
          {
            title:'东材科技',
            url:require('../assets/tab5/case20.png'),
          },
          {
            title:'金利宝',
            url:require('../assets/tab5/case21.png'),
          },
          {
            title:'万顺股份',
            url:require('../assets/tab5/case22.png'),
          },
          {
            title:'拓斯达',
            url:require('../assets/tab5/case23.png'),
          },
          {
            title:'京东方',
            url:require('../assets/tab5/case24.png'),
          },
          {
            title:'小菘科技',
            url:require('../assets/tab5/case25.png'),
          },
          {
            title:'健帆生物',
            url:require('../assets/tab5/case26.png'),
          },
          {
            title:'丽珠医药',
            url:require('../assets/tab5/case27.png'),
          },
          {
            title:'天大药业',
            url:require('../assets/tab5/case28.png'),
          },
          {
            title:'汇乐技术',
            url:require('../assets/tab5/case29.png'),
          },
          {
            title:'德赛西威',
            url:require('../assets/tab5/case30.png'),
          },
        ]
    }),
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
