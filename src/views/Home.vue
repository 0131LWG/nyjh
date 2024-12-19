<template>
  <div>
    <div class="home">
      <div class="swiper">
        <div class="swiper-wrapper">
          <!-- <div class="swiper-slide">
            <img class="swiper-slide-img"
              src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
          </div> -->
          <div class="swiper-slide">
            <img
              class="swiper-slide-img"
              src="../assets/tab1/banner.png"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="core">
      <div class="core-title">核心领域</div>
      <div class="clip">
        <div class="swiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img class="swiper-slide-img"
                src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
              <div @click="openLink('/core', 1)" class="layer-mask"></div>
            </div>
            <div class="swiper-slide">
              <img class="swiper-slide-img"
                src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
              <div @click="openLink('/core', 2)" class="layer-mask"></div>
            </div>
            <div class="swiper-slide">
              <img class="swiper-slide-img"
                src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
              <div @click="openLink('/core', 3)" class="layer-mask"></div>
            </div>
            <div class="swiper-slide">
              <img class="swiper-slide-img"
                src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
              <div @click="openLink('/core', 4)" class="layer-mask"></div>
            </div>
          </div>
          <div class="swiper-button-prev btnPrev" @click="mySwiper.slidePrev()"></div>
          <div class="swiper-button-next btnNext" @click="mySwiper.slideNext()"></div>
        </div>
      </div>
    </div> -->
    <div class="innovate">
      <div class="innovate-title">研发与创新</div>
      <div class="innovate-news">
        <img
          src="../assets/tab1/innovation3.jpg"
        />
        <div>
          <div class="innovate-news-box">
            <img
            src="../assets/tab1/innovation1.png"
            />
            <div>
              南粤净化深耕空气洁净领域十余年，致力于实现空气洁净各类使用场景的链路闭环。为新材料膜切行业、光学光电、半导体、智能智造、新能源、医院医疗体系、食品饮料、汽车制造等行业提供全     方位洁净领域的完整解决方案。
            </div>
          </div>
          <div class="innovate-news-solid1"></div>
          <div class="innovate-news-box">
            <img
            src="../assets/tab1/innovation2.png"
            />
            <div>
              对内通过多年研发积累，实现全产品对于各类使用场景的定向优化，研发出多套完备的解决方案；对外整合上游核心过滤材料，推动技术研发，实现产业降本提质。
            </div>
          </div>
          <div class="innovate-news-solid2"></div>
        </div>
      </div>
    </div>
    <div class="serve">
      <div class="serve-title">产品与服务</div>
      <div class="serve-box">
        <div
          class="serve-box-one"
          v-for="(item, index) in serve"
          :key="index"
        >
          <img
            :src="item.img"
          />
          <div>
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="case">
      <div class="case-title">行业案例</div>
      <div class="clip">
        <div class="swiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="(item , index) in cases"  :key="index">
              <img
                class="swiper-slide-img"
                :src="item.img"
              />
              <div class="swiper-slide-text">{{ item.title }}</div>
            </div>
          </div>
          <div
            class="swiper-button-prev btnPrev"
            @click="slideClick(true)"
          ></div>
          <div
            class="swiper-button-next btnNext"
            @click="slideClick(false)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";

export default {
  name: "home",
  components: {},
  data: () => ({
    linkList: [
      {
        title: "关于我们",
        list: [
          {
            name: "公司简介",
            url: "",
          },
          {
            name: "品牌故事",
            url: "",
          },
          {
            name: "生产与质量",
            url: "",
          },
        ],
      },
      {
        title: "产品中心",
        list: [
          {
            name: "产品中心",
            url: "",
          },
        ],
      },
      {
        title: "解决方案",
        list: [
          {
            name: "解决方案",
            url: "",
          },
        ],
      },
    ],
    serve:[
      {
        img:require('../assets/tab1/serve1.jpg'),
        text:'为客户提供全方位洁净领域的完整解决方案'
      },
      {
        img:require('../assets/tab1/serve2.png'),
        text:'公司主要产品为风机过滤单元、初中效空气过滤器、高效空气过滤器、化学过滤器、洁净棚、风淋室等各类洁净设备'
      },
      {
        img:require('../assets/tab1/serve3.png'),
        text:'应用领域主要为新材料膜切、光学光电、半导体、智能智造、新能源、医院医疗体系、食品饮料、汽车制造等行业'
      },
    ],
    cases:[
      {
        img:require('../assets/tab1/case1.png'),
        title:'伯恩光学'
      },
      {
        img:require('../assets/tab1/case2.jpg'),
        title:'东财科技'
      },
      {
        img:require('../assets/tab1/case3.webp'),
        title:'京东方'
      },
      {
        img:require('../assets/tab1/case4.jpg'),
        title:'可口可乐'
      },
      {
        img:require('../assets/tab1/case5.jpg'),
        title:'丽珠集团'
      },
      {
        img:require('../assets/tab1/case6.jpeg'),
        title:'生益电子'
      },
      {
        img:require('../assets/tab1/case7.jpeg'),
        title:'拓斯达'
      },
      {
        img:require('../assets/tab1/case8.jpg'),
        title:'小菘科技'
      }
    ],
    mySwiper: null,
    interval: null,
    under768: document.body.clientWidth < 768,
  }),
  mounted() {
    // this.mySwiper = new Swiper(".swiper2", {
    //   loop: true,
    //   speed: 1000,
    //   // width: 1080,
    //   autoplay: true,
    //   // slidesPerView: 3,
    //   // 如果需要前进后退按钮
    //   // navigation: {
    //   //   prevEl: ".swiper-button-prev",
    //   //   nextEl: ".swiper-button-next",
    //   // },
    // });
    this.under768 = document.body.clientWidth < 768;

    this.mySwiper = new Swiper(".swiper2", {
      slidesPerView: this.under768 ? 2 : 3,
      spaceBetween: this.under768 ? 15 : 30,
      speed: 2000,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    this.interval = setInterval(() => {
      this.mySwiper.slideNext();
    }, 4000);
  },
  destroyed() {
    clearInterval(this.interval);
  },
  methods: {
    slideClick(isPre) {
      if (isPre) {
        this.mySwiper.slidePrev();
      } else {
        this.mySwiper.slideNext();
      }

      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.mySwiper.slideNext();
      }, 4000);
    },
    goLink(path) {
      this.$router.push({
        path,
      });
    },
    openLink(path, id) {
      const routeUrl = id
        ? this.$router.resolve({
            path,
            query: { id },
          })
        : this.$router.resolve({
            path,
          });
      window.open(routeUrl.href, "_blank");
    },
  },
};
</script>

<style scoped>
.layer-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  transition: opacity 0.5s ease;
  background-color: #010b61;
  cursor: pointer;
}

.clip {
  max-width: 1080px;
  padding: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.swiper2 {
  position: relative;
  width: 100%;

  .swiper-slide {
    margin-right: 30px;
    user-select: none;
    overflow: hidden;
    transition: all 0.5s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;

    .swiper-slide-img {
      /* width: 100%; */
      height: 276px;
      object-fit: cover;
      background-color: transparent;
    }

    .swiper-slide-text {
      background-color: rgb(241, 241, 241);
      text-align: center;
      padding: 10px;
    }
  }

  .swiper-slide:hover {
    margin-top: -10px;
  }

  .btnPrev,
  .btnNext {
    height: 40px;
    width: 30px;
    color: black;
  }

  .btnNext:after,
  .btnPrev:after {
    font-size: 30px;
  }

  .btnNext {
    right: -30px;
  }

  .btnPrev {
    left: -30px;
  }
}

.swiper {
  width: 100%;
  height: 100vh;
  max-height: 1440px;

  .swiper-slide-img {
    width: 100%;
    height: 100%;
  }
}

.home {
  height: 100vh;
  max-height: 1440px;
}

.core {
  max-height: 540px;
  padding: 30px 10% 40px 10%;
}

.core-title {
  font-size: 32px;
  color: #333;
  font-weight: bold;
  text-align: center;
  padding-top: 20px;
}

.innovate {
  height: 60vh;
  max-height: 604px;
  padding: 30px 15% 30px 15%;
  background-image: url(../assets/home/innovate-bg.png);
  background-color: rgba(249, 249, 249, 1);
  background-repeat: no-repeat;
  background-size: 750px 120%;
  background-position: 0 -120px;
}

.innovate-title {
  font-size: 32px;
  color: #333;
  font-weight: bold;
  padding-top: 20px;
  text-align: center;
}

.innovate-news {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  letter-spacing: 1px;
  word-break: break-work;
  line-height: 1.5;
  color: #061538;
  font-size: 16px;
}

.innovate-news img {
  width: 300px;
  height: 300px;
  margin-right: 55px;
}

.innovate-news-box {
  display: flex;
  justify-content: flex-start;
}

.innovate-news-box img {
  width: 70px;
  height: 70px;
  margin-right: 30px;
}

.innovate-news-solid1 {
  width: 100%;
  height: 25px;
  border-bottom: 1px dashed rgba(173, 173, 173, 1);
  margin-bottom: 25px;
}

.innovate-news-solid2 {
  width: 100%;
  height: 25px;
  border-bottom: 1px dashed rgba(236, 236, 236, 1);
}

.case {
  padding: 30px 15%;
}

.case-title {
  font-size: 32px;
  color: #333;
  font-weight: bold;
  text-align: center;
  padding-top: 20px;
}
.serve {
  height: 50vh;
  max-height: 540px;
  padding: 30px 15%;
  background-color: #efefef;
}

.serve-title {
  font-size: 32px;
  color: #333;
  font-weight: bold;
  text-align: center;
  padding: 20px 0 50px 0;
}

.serve-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.serve-box-one {
  background-color: #fff;
  padding: 10px;
  width: 30%;
  font-size: 12px;
  transition: 500ms;
  color: #838792;
  text-align: center;
}
.serve-box-one:hover {
  margin-top: -40px;
  transition: 500ms;
}
.serve-box-one img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}
.serve-box-one div {
  margin-top: 10px;
  line-height: 1.5;
}

@media screen and (max-width: 768px) {
  .case {
    padding: 0;
  }

  .clip {
    padding: 15px;
  }
  .swiper2 {
    .btnPrev,
    .btnNext {
      height: 20px;
      width: 15px;
      color: black;
    }

    .swiper-slide {
      .swiper-slide-img {
        height: 140px;
      }

      .swiper-slide-text {
        background-color: rgb(241, 241, 241);
        text-align: center;
        font-size: 12px;
        padding: 6px;
      }
    }

    .btnNext:after,
    .btnPrev:after {
      font-size: 20px;
    }

    .btnNext {
      right: -15px;
    }

    .btnPrev {
      left: -15px;
    }
  }

  .innovate-news {
    display: block;
  }
  .innovate {
    height: 100%;
    max-height: 100004px;
  }
  .innovate-news img {
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
  }
  .innovate-news-box img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .serve {
    height: 100%;
    max-height: 100004px;
  }
  .serve-box {
    display: block;
  }
  .serve-box-one {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
