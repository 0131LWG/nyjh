<template>
    <div class="recruit">
      <div class="home">
        <div class="swiper">
          <div class="swiper-wrapper">
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
      <div class="info">
        <div class="info-title" style="margin-top:0">人才招聘</div>
        <div class="info-box">
          <div class="info-box-title">招聘信息</div>
          <div class="info-box-flex bold">
            <div>职位名称</div>
            <div>工作城市</div>
            <div>工作经验</div>
            <div class="none"></div>
          </div>
          <div  v-for="(item,index) in [{},{},{},{}]" :key="index" @click="changeActive(index)">
          <div :class="index?'info-box-flex solid':'info-box-flex'">
            <div>暖通设计工程师</div>
            <div>广东东莞</div>
            <div>3年以上</div>
            <div class="none button">职位详情></div>
          </div>
          <div :class="index==active?'box':'box-none'">
            <div class="box-title">职位描述：</div>
            <div>1.案文案文案文案文案文案案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
            <div>2.案文案文案文案文案文案文案文案案文案文案文案</div>
            <div>3.案文案文案文案文案文案文案文案案文案文案文案案文案文案</div>
            <div>4.案文案文案文案文案文案文案文案案文案文案文案</div>
            <div>5.案文案文案文案文案文案文案文案案文案文案文案</div>
            <div>6.案文案文案文案文案文案文案文案案文案文案文案案文案文案</div>
            <div class="box-title" style="margin-top:30px;">岗位要求：</div>
            <div>1.案文案文案文案文案文案案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
            <div>2.案文案文案文案文案文案文案文案案文案文案文案</div>
            <div>3.案文案文案文案文案文案文案文案案文案文案文案案文案文案</div>
            <div>4.案文案文案文案文案文案文案文案案文案文案文案</div>
            <div>5.案文案文案文案文案文案文案文案案文案文案文案</div>
            <div>6.案文案文案文案文案文案文案文案案文案文案文案案文案文案</div>
            <div class="box-button" @click="goLink('/service')">现在申请</div>
          </div>
          </div>
        </div>
        <div class="info-title">员工福利</div>
        <!-- <div class="infos-box">
          <div class="infos-box-one" v-for="(item,index) in [{},{},{},{},{},{}]" :key="index">
          <div style="overflow: hidden;margin:0px;padding:0;">
            <img
            src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" /></div>
            <div>文案文案文案文案</div>
          </div>
        </div> -->
      </div>
    </div>
  
  </template>

  <script>

export default {
  name: "recruit",
  components: {},
  data: () => ({
    active:-1,
  }),
  mounted() {
  },
  methods: {
    changeActive(index){
      if(this.active!=index){
      this.active=index
      }
      else{
        this.active=-1
      }
    },
    goLink(path){
      this.$router.push({
        path,
      });
    }
  },
};
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
  .info{
    padding: 30px 15%;
    background-color: #efefef;
  }
  .info div{
    line-height: 2;
  }
  .info-title{
    color:#2648A3;
    font-size: 20px;
    padding-bottom: 5px;
    margin:40px 0 20px 0;
    border-bottom: 2px solid #2648A3;
  }
  .box{
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background-color: #eef3f7;
    transition: 500ms;
    padding: 30px;
    font-size: 16px;
  }
  .box-title{
    font-weight: bold;
    font-size: 19px;
  }
  .box-button{
    background-color: #2648A3;
    color: #fff;
    width: 100px;
    border-radius: 6px;
    margin-top: 15px;
    text-align: center;
    cursor: pointer;
    padding: 4px 0;
  }
  .box-none{
    height: 0;
    transition: 500ms;
    overflow: hidden;
  }
  .info-box{
    background-color: #fff;
    padding: 10px;
  }
  .info-box-title{
    color: #fff;
    background-color: #2648A3;
    font-size: 21px;
    text-align: center;
    padding: 10px 0;
  }
  .info-box-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;
    padding: 20px;
  }
  .bold{
    font-weight: bold;
    font-size: 20px;
    color: #333;
  }
  .info-box-flex div{
    width: 25%;
  }

  .solid{
    border-top: 2px solid #999;
  }
  .button{
    color: #fff;
    background-color: #2648A3;
    padding: 6px 0;
    border-radius: 6px;
    text-align: center;
  }
  .infos-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 10px;
  }
  .infos-box-one{
    width: 49%;
    color: #666;
  }
  .infos-box-one div{
   text-align: center;
   line-height: 2;
   font-size: 15px;
   margin-bottom: 10px;
  }
  .infos-box-one img{
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .infos-box-one:hover{
    img{
      scale: 1.2;
      transition: 500ms;
    }
    color: #2648A3;
  }
  
  @media screen and (max-width:900px) {
    .none{
      display: none;
    }
    .info{
    padding: 30px 10px;
  }
  .infos-box-one{
    width: 100%;
  }
  }
  </style>
  