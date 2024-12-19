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
                        <div class="swiper-slide" v-for="(item,index) in plan" :key="index">
                            <img class="swiper-slide-img"
                                src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg"
                                @click="jump(index)" />
                            <div class="swiper-slide-text">{{ item.title }}</div>
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
        plan:[
            {
                title:'生物洁净与生物安全解决方案',
                text:'在生物医药行业，配合使用公司生产的各级别过滤器，使环境免受颗粒物及微生物的污染，并达到GMP规范要求的空气洁净度。随着越来越多的制药企业正致力于降低产品制造成本，同时提高安全性和质量。在药物工艺制程中，过滤系统被提出了寿命、质量、操作灵活型等不同要求，南粤净化针对不同需求整合出了一套完备的交付方案，并伴随制药工艺迭代进行论证更新。'
            },
            {
                title:'半导体超洁净解决方案',
                text:'南粤净化紧跟污染控制技术的发展步伐，使自己的产品成为更为优质的选择。我们在微电子和半导体微污染控制领域累积了十余年的丰富经验，可以帮助您保护半导体、工艺设备、印刷电路板、液晶面板和太阳能电池板。'
            },
            {
                title:'涂装行业解决方案',
                text:'高质量的表面喷涂工艺对于喷漆工序的颗粒物数量有着严格的控制标准，对于汽车喷涂工艺的使用要求，南粤净化可根据不同的使用区域给出最优的组合方案，为您保障生产安全的同时降低能耗、保障人身的健康。'
            },
            {
                title:'工业废气排放治理解决方案',
                text:'对加工业而言，生产过程中产生的严重污染空气会打断生产流程，造成健康、安全和环境风险。污染可能包括重污染粉尘、爆炸性粉尘和气态化学污染物。它们会产生异味、发生腐蚀性反应，甚至可能对操作人员和环境构成毒性威胁。针对不同工矿造成的废气污染源，南粤净化提供的关键性过滤器产品可在恶劣的工况下提供出色的长期性能。'
            },
            {
                title:'医疗健康解决方案',
                text:'医院是集患者、易感人群、陪同家属和医护人员在一起的特殊场所，在医疗设施里，适当的空气过滤是保障人员健康和患者康复的重要举措。南粤净化为医院的复杂环境提供全系列的空气过滤器，从办公室、停车场等普通区域到候诊室和手术室，一应俱全。'
            },
        ]
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
            this.$router.push({path:'/detail',query:{id:i}}).catch(err => { console.log(err) })
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