<template>
  <div>
    <div class="home">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="swiper-slide-img"
              src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
          </div>
          <div class="swiper-slide">
            <img class="swiper-slide-img"
              src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
          </div>
        </div>
      </div>
    </div>
    <div class="core">
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
    </div>
    <div class="innovate">
      <div class="innovate-title">研发与创新</div>
      <div class="innovate-news">
        <img
          src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
        <div>
          <div class="innovate-news-box">
            <img
              src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
            <div>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案
            </div>
          </div>
          <div class="innovate-news-solid1"></div>
          <div class="innovate-news-box">
            <img
              src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
            <div>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案
            </div>
          </div>
          <div class="innovate-news-solid2"></div>
        </div>
      </div>
    </div>
    <div class="case">
      <div class="case-title">行业案例</div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";

export default {
  name: "home",
  components: {

  },
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
  }),
  mounted() {
    this.mySwiper = new Swiper(".swiper2", {
      loop: true,
      speed: 1000,
      slidesPerView: 3,
      preventInteractionOnTransition: true,
      centeredSlides: true,
      slidePrevClass: "slidePrevClass",
      slideNextClass: "slideNextClass",
      slideVisibleClass: "slideVisibleClass",
      // 如果需要前进后退按钮
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
    });
  },
  methods: {
    goLink(path) {
      this.$router.push({
        path,
      });
    },
    openLink(path, id) {
      const routeUrl = id ?
        this.$router.resolve({
          path,
          query: { id }
        }) : this.$router.resolve({
          path
        })
      window.open(routeUrl.href, '_blank')
    }
  }
}
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
  margin: 0 auto;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.swiper2 {
  position: relative;
  width: 1680px;

  .swiper-slide {
    user-select: none;
    border-radius: 5px;
    margin: 70px 0;
    overflow: hidden;
    transition: all 0.5s ease;
    width: 900px;
    height: 300px;
    transform: scale(0.85);
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3);

    .swiper-slide-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      background-color: transparent;
    }
  }

  .btnPrev,
  .btnNext {
    background-color: #00000088;
    height: 70px;
    width: 70px;
    color: #ffffff88;
    border-radius: 50%;
  }

  .btnNext:after,
  .btnPrev:after {
    font-size: 24px;
  }

  .btnNext {
    right: 420px;
  }

  .btnPrev {
    left: 420px;
  }

  .swiper-slide-active {
    transform: scale(1.15);

    .layer-mask {
      opacity: 0;
    }
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
  height: 50vh;
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
  background-size: 40% 120%;
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
  width: 400px;
  height: 400px;
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
  height: 50vh;
  max-height: 540px;
  padding: 30px 20%;
}

.case-title {
  font-size: 32px;
  color: #333;
  font-weight: bold;
  text-align: center;
  padding-top: 20px;
}
</style>
