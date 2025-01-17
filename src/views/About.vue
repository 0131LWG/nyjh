<template>
  <div class="back">
    <div class="home">
      <div class="swiper">
        <div class="swiper-wrapper">
          <!-- <div class="swiper-slide">
            <img class="swiper-slide-img"
              src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
          </div> -->
          <div class="swiper-slide">
            <img class="swiper-slide-img"
            src="../assets/tab1/banner.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="text-container">
      <div class="textBox">
        <span>文案文案文案文案文文案文案文案文案文案文</span>
      </div>
    </div> -->
    <div class="introduce">
      <div class="introduce-title">公司介绍</div>
      <div class="introduce-text">东莞市南粤净化科技有限公司位于东莞市水乡片区麻涌镇。背靠黄浦江，南接长安虎门。自2010年成立，公司经营者秉承质量为本、服务至上、不忘初心、向内自省，向外求新的理念。致力于空气洁净领域的产品研发、生产、销售、安装和检测。主要产品有初、中、高效空气过滤器、耐高温过滤器、洁净单元FFU、净化工作台、传递窗、高效排风箱、不锈钢制品等净化设备、净化工程的设计与安装。公司在2006年通过ISO9001和ISO14001认证。拥有最先进的净化产品生产设备及洁净车间生产线。所有出厂高效均通过自检。为新材料膜切行业、光学光电、半导体、智能智造、新能源、医院医疗体系、食品饮料、汽车制造等行业提供全方位洁净领域的完整解决方案。</div>
    
    </div>
    <div class="vision">
      <div class="vision-title">愿景</div>
      <div class="vision-solid"></div>
      <div class="vision-text">成为国内空气净化行业的领跑者，并在国际新兴市场建立知名品牌</div>
    </div>
    <!-- <div class="story">
      <div class="story-title">品牌故事</div>
      <div class="story-box">
        <img 
        src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
      </div>
      <div class="story-bg">
        <div class="story-bg-title">文案文案 文案文案</div>
        <div class="story-bg-text">文案文案文案文案文案文文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文</div>
      </div>
      <div class="story-ee">
      </div>
      <div class="story-flex">
          <div class="story-flex-one" v-for="(item,index) in [{},{},{}]" :key="index">
            <img 
            src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
            <div>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
          </div>
      </div>
    </div>
    <div class="milestone">
      <img 
        src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
    </div> -->
    <div class="quality">
      <div class="quality-box">
        <div class="quality-title">生产与质量</div>
        <div class="quality-text">历经多年沉淀积累，南粤净化运用先进的生产工艺和科学的生产管理，充分保障产品质量和企业经济效益。南粤净化拥有先进的生产技术、检测方案、制造设备及高效的研发团队，为了瞒住全球不同客户对品质、环境的要求，南粤净化通过了ISO9001:2015质量管理体系、ISO14001:2015环境管理体系认证，主要产品具备丰富的定制经验，时刻跟进客户需求提供优质定制。</div>
        <img 
        src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  metaInfo: {},
  components: {},
  created () {
    // Rx.Observable.of(1,2,3).map(function (x) { return x + '!!!'; })
  },
  methods: {
    dangerClick () {
    }
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
  height: 70vh;
  max-height: 1440px;
}
.swiper {
  width: 100%;
  height: 100%;
  max-height: 1440px;

  .swiper-slide-img {
    width: 100%;
    height: 100%;
  }
}
.introduce {
  height: 100%;
  max-height: 10000px;
  padding: 30px 5%;
}

.introduce-title {
  font-size: 30px;
  font-family: "宋体";
  color: #333;
  font-weight: bold;
  text-align: center;
  padding:5px 0 15px 0;
}
.introduce-text{
  text-indent: 2em;
  font-size: 16px;
  font-family: "宋体";
  color: #333;
  line-height: 2.5;
}
.vision{
  background-color: #333;
  height: 195px;
}
.vision-title {
  font-size: 38px;
  font-family: "宋体";
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding:50px 0 15px 0;
}
.vision-solid {
  height: 1px;
  width: 120px;
  background-color: #fff;
  text-align: center;
  margin: auto;
}
.vision-text {
  font-size: 18px;
  color: #fff;
  margin-top: 20px;
  text-align: center;
}

.quality {
  height: 100%;
  max-height: 10000px;
  padding: 30px 5%;
  background-color: #efefef;
}
.quality img{
  width: 100%;
  height: 500px;
  object-fit: cover;
  margin-top: 20px;
}

.quality-box{
  background-color: #fff;
  padding: 20px 60px;
}

.quality-title {
  font-size: 30px;
  font-family: "宋体";
  color: #333;
  font-weight: bold;
  text-align: center;
  padding:5px 0 15px 0;
}
.quality-text{
  text-indent: 2em;
  font-size: 16px;
  font-family: "宋体";
  color: #333;
  line-height: 2.5;
}
.story {
  height: 100%;
  max-height: 10000px;
  padding: 30px 5%;
  background-color: #fff;
}
.story-title {
  font-size: 30px;
  font-family: "宋体";
  color: #333;
  font-weight: bold;
  text-align: center;
  padding:5px 0 15px 0;
}
.story-box {
  background-color: #efefef;
  padding: 50px 0;
}
.story-box img{
  height: 462px;
  width: 100%;
  object-fit: cover;
}
.story-bg{
  height: 412px;
  width: 100%;
  color: #fff;
  padding: 80px 60px;
  box-sizing: border-box;
  background-image: url(../assets/home/footbg.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.story-bg-title{
  font-size: 30px;
  font-family: "宋体";
  color: #fff;
  font-weight: bold;
}
.story-bg-text{
  font-size: 16px;
  font-family: "宋体";
  color: #fff;
  line-height: 2;
  margin-top: 20px;
}
.story-flex{
  width: 96%;
  margin-top: -580px;
  margin-left: 1%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 100px 10px;
}
.story-flex-one{
  width: 30%;
  font-size: 12px;
  font-family: "宋体";
  color: #333;
  line-height: 2;
}
.story-flex-one img{
 height: 165px;
 width: 100%;
 object-fit: cover;
}
.story-ee{
  height: 450px;
  background-color: #f1f5f7;

}
.milestone{
  height: 490px;
  width: 100%;
  padding: 35px 5%;
  box-sizing: border-box;
  margin: auto;
  text-align: center;
}
.milestone img{
  height: 490px;
  width: 100%;
  object-fit: cover;
  margin-top: -50px;
}
@media screen and (max-width:900px) {
  .story-bg{
    height: 100%;
  }
  .story-flex{
    display: block;
    margin-left: 0;
    margin-top: -500px;
  }
  .story-flex-one {
    width: 100%
  }
  .story-flex-one img{
    height: 272px;
    width: 100%;
    margin: 20px 0 5px 0;
  }
  .quality-box{
  background-color: #fff;
  padding: 20px 10px;
}
  
}
</style>


