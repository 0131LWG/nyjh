<template>
  <div>
    <div class="home">
      <!-- <h1>This is an home page</h1>
    <van-button type="default" @click="goLink('/about')">about</van-button>
    <van-button type="primary" @click="goLink('/back')">back</van-button>
    <van-button type="info" @click="goLink('/front')">front</van-button> -->
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              class="swiper-slide-img"
              src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
          </div>
          <div class="swiper-slide">
            <img
              class="swiper-slide-img"
              src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="core">
      核心领域
      <div class="clip">
        <div class="swiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                class="swiper-slide-img"
                src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              />
              <div class="layer-mask"></div>
            </div>
            <div class="swiper-slide">
              <img
                class="swiper-slide-img"
                src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              />
              <div class="layer-mask"></div>
            </div>
            <div class="swiper-slide">
              <img
                class="swiper-slide-img"
                src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              />
              <div class="layer-mask"></div>
            </div>
            <div class="swiper-slide">
              <img
                class="swiper-slide-img"
                src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              />
              <div class="layer-mask"></div>
            </div>
          </div>
          <div
            class="swiper-button-prev btnPrev"
            @click="mySwiper.slidePrev()"
          ></div>
          <div
            class="swiper-button-next btnNext"
            @click="mySwiper.slideNext()"
          ></div>
        </div>
      </div>
    </div>
    <div class="innovate">
      <div class="innovate-title">研发与创新</div>
      <div>
        <img
          src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        />
        <div>123</div>
      </div>
    </div>
    <div class="case">行业案例</div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { Button } from "vant";

import Swiper from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";

export default {
  name: "home",
  components: {
    Footer,
    vanButton: Button,
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
      loop: true, // 循环模式选项
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

    var mySwiper = new Swiper(".swiper", {
      loop: true, // 循环模式选项
      speed: 1000,
    });
  },
  methods: {
    goLink(path) {
      this.$router.push({
        path,
      });
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

  .btnNext:after,.btnPrev:after{
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
  width: 100vw;
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
  padding: 30px 15%;
}

.innovate {
  height: 60vh;
  max-height: 604px;
  padding: 30px 0;
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
  text-align: center;
}

.case {
  height: 50vh;
  max-height: 540px;
  padding: 30px 20%;
}
</style>
