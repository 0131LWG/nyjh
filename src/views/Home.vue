<template>
  <div>
    <div class="home">
      <div class="swiper">
        <div class="swiper-wrapper">
          <!-- <div class="swiper-slide">
            <img class="swiper-slide-img"
              src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
          </div> -->
          <div class="swiper-slide">
            <img
              class="swiper-slide-img"
              src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
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
                src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
              <div @click="openLink('/core', 1)" class="layer-mask"></div>
            </div>
            <div class="swiper-slide">
              <img class="swiper-slide-img"
                src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
              <div @click="openLink('/core', 2)" class="layer-mask"></div>
            </div>
            <div class="swiper-slide">
              <img class="swiper-slide-img"
                src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
              <div @click="openLink('/core', 3)" class="layer-mask"></div>
            </div>
            <div class="swiper-slide">
              <img class="swiper-slide-img"
                src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
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
          src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        />
        <div>
          <div class="innovate-news-box">
            <img
              src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
            <div>
              文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案
            </div>
          </div>
          <div class="innovate-news-solid1"></div>
          <div class="innovate-news-box">
            <img
              src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
            <div>
              文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案
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
          v-for="(item, index) in [{}, {}, {}]"
          :key="index"
        >
          <img
            src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          />
          <div>
            文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案
          </div>
        </div>
      </div>
    </div>
    <div class="case">
      <div class="case-title">行业案例</div>
      <div class="clip">
        <div class="swiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="i in 10">
              <img
                class="swiper-slide-img"
                src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              />
              <div class="swiper-slide-text">文案文案文案文案</div>
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
    object-fit: cover;
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
  font-size: 14px;
}

.innovate-news img {
  width: 70%;
  height: 70%;
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
