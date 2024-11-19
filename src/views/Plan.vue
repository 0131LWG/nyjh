<template>
    <div class="plan">
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
        <div class="content">
            <div class="content-title">解决方案</div>
            <div class="content-flex">
                <img src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
                <div>文案文案文案文案</div>
            </div>
        </div>
        <div class="case">
            <div class="clip">
                <div class="swiper2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="i in 9" @click="jump(i)">
                            <img class="swiper-slide-img"
                                src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg"
                                @click="jump(i)" />
                            <div class="swiper-slide-text" @click="jump(i)">文案文案文案文案</div>
                        </div>
                    </div>
                    <div class="swiper-button-prev btnPrev" @click="slideClick(true)"></div>
                    <div class="swiper-button-next btnNext" @click="slideClick(false)"></div>
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
        mySwiper: null,
        interval: null,
        under768: document.body.clientWidth < 768,
    }),
    mounted() {
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
        jump(i) {
            // 新开窗口
            // const routeUrl = this.$router.resolve({
            //     path: '/detail?id='+i
            // })
            // window.open(routeUrl.href);

            // 不新开窗口
            this.$router.push('/detail?id='+i)
        },
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

.content {
    padding: 20px 10% 20px 10%;
}

.content-title {
    font-size: 32px;
    color: #333;
    font-weight: bold;
    text-align: center;
    padding-bottom: 20px;
}

.content-flex {
    background-color: #eee;
    padding: 10px;
    height: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.content-flex img {
    width: 49%;
    height: 100%;
    object-fit: cover;
}

.content-flex div {
    width: 49%;
    height: 100%;
    background-color: #0c4c92;
    box-sizing: border-box;
    padding: 10px;
    color: #fff;
}

.case {
    padding: 0 10%;
}

.clip {
    max-width: 1080px;
    padding: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    overflow: hidden;
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

    .content-flex img {
        width: 100%;
    }

    .content-flex div {
        width: 100%;
        padding: 30px 0;
        margin-top: 5px;
    }

    .content-flex {
        display: block;
        height: 100%;
    }

    .content {
        padding: 20px 4%;
    }
}
</style>