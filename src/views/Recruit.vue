<template>
    <div class="recruit">
      <div class="home">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img class="swiper-slide-img"
                src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
            </div>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="info-title">人才招聘</div>
        <div class="info-box">
          <div class="info-box-title">招聘信息</div>
          <div class="info-box-flex bold">
            <div>职位名称</div>
            <div>工作城市</div>
            <div>工作经验</div>
            <div class="none"></div>
          </div>
          <div :class="index?'info-box-flex solid':'info-box-flex'" v-for="(item,index) in [{},{},{},{},{},{},{},{},{},{}]" :key="index">
            <div>暖通设计工程师</div>
            <div>广东东莞</div>
            <div>3年以上</div>
            <div class="none button">职位详情></div>
          </div>
        </div>
        <div class="info-title">员工福利</div>
        <div class="info-box">
        123
        </div>
      </div>
    </div>
  
  </template>
  
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
  .info{
    padding: 30px 15%;
    background-color: #efefef;
  }
  .info-title{
    color:#2648A3;
    font-size: 20px;
    padding-bottom: 5px;
    margin: 20px 0;
    border-bottom: 2px solid #2648A3;
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
  
  @media screen and (max-width:900px) {
    .none{
      display: none;
    }
    .info{
    padding: 30px 10px;
  }
  }
  </style>
  