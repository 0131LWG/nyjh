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
    <div  class="info">
            <div class="content1">
                <!-- <div style="padding:10px;background-color: #2648A3;color: #fff;">产品分类</div> -->
                <!-- <div v-for="(item, index) in list" :key="index" class="tabs" @click="goLink('/center')">{{ item.title }}
                </div> -->
                <div style="padding:10px;background-color: #2648A3;color: #fff;">联系我们</div>
                <div class="news">东莞市南粤净化科技有限公司</div>
                <div class="news">工厂地址:广东省东莞市麻涌镇新基北街9号</div>
                <div class="news">售前电话:13925787528&emsp;13416783698</div>
                <div class="news">售后电话:15916750164</div>
                <div class="news">邮箱:fy686@126.com</div>
            </div>
            <div class="content2">
                <div class="between">
                    <div>
                        <span>技术知识</span>
                    </div>
                </div>
                <div style="padding:10px 0;font-size:14px;">
                   <div v-for="(item,index) in list" :key="index" style="border-bottom:1px solid #ccc;padding:10px 0;">
                        <div style="display:flex;justify-content: space-between;align-items: center;">
                            <div class="title" style="text-align:left;padding:2px 0 2px 0;color:18px;">{{ item.title }}</div>
                            <div style="color:#aaa;">{{ item.des }}</div>
                        </div>
                        <div>{{ item.text }}</div>
                    </div>
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
        ],
        list:[
            {
                title:'高效过滤器检漏的必要性',
                des:'发布时间：2019-01-10   点击次数：222',
                text:'高效过滤器检漏的必要性一、国内制药企业对高效过滤器检漏的现状随着我国制药工业的发展，国内一些药厂不断对企业进行技术改造，提高产品质量。目前国内的大部分药品生产企业对空气净化系统安装确认的前5项内容都认真具体的执行。但是忽略了高效过滤器检漏试'
            },
            {
                title:'中效过滤器四大过滤原理',
                des:'发布时间：2018-12-17   点击次数：231',
                text:'中效过滤器已经普及到我们日常的各个方面，但是大家对于其工作原理又了解多少呢?空气过滤器净化事业部主管指出，日常所见的中效过滤器原理有四个，具体划分，又可以有几十种，以下我们将中效过滤器的原理做简要阐述：原理一、拦截拦截是常见的中效过滤器原理'
            },
            {
                title:'初效过滤器中效过滤器,可采用亚高效过滤器替代',
                des:'发布时间：2018-12-08   点击次数：242',
                text:'初效过滤器中效过滤器,可采用亚高效过滤器替代为什么会说初效过滤器中效过滤器,可采用亚高效过滤器替代呢？很多人都应该不理解，有了解它们的朋友，知道它们的用处，高效过滤器怎样替代。下面过滤器厂家就给大家解答这个疑问。1、初效过滤器中效过滤器安装'
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            },
            {
                title:'',
                des:'',
                text:''
            }
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
.title {
    padding: 20px;
    text-align: center;
    font-weight: bold;
}

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

.between {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #2648A3;
    color: #fff;
}

.button {
    background-color: #2648A3;
    margin-top: 15px;
    color: #fff;
    width: 100px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    border-radius: 6px;
}

.betweens {
    display: flex;
    padding: 10px;
}

.tabs {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
}

.news {
    font-size: 14px;
    padding: 5px 10px;
}

.tabs:hover {
    color: #2648A3;
    background-color: #eee;
}

.content1 {
    width: 25%;
}

.content2 {
    width: 73%;
}

.info {
    padding: 0 20%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    img {
        width: 450px;
        height: 450px;
    }
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

.tab {
    padding: 20px 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.tab-title:hover {
    color: brown;
    cursor: pointer;
}

.content {
    width: 100%;
    height: 100%;
    background: url(../assets/home/background.jpg);
    padding: 20px 10%;
    box-sizing: border-box;
}

.content-flex {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
}

._show {
    width: 75%;
    height: 100%;
    margin-right: 10px;
    box-sizing: border-box;
}

.word {
    display: none;
    width: 100%;
    height: 210px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 2;
    left: 0;
    transition: 300ms;
    top: 0;
    font-size: 20px;
    color: #fff !important;
    padding-top: 80px !important;
    text-align: center;
    box-sizing: border-box;
}

.show {
    width: 100%;
    background-color: #f4f4f4;
    margin-right: 10px;
    box-sizing: border-box;
    padding: 20px;
}

.show-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #222;
    margin-bottom: 20px;
}

.show-title img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
}

.show-text {
    text-indent: 2em;
    font-size: 16px;
    color: #222;
    line-height: 2;
}

.show-img {
    margin-top: 20px;
    width: 100%;
    object-fit: cover;
}

.show-up {
    border-top: 1px solid #eee;
    font-size: 14px;
    color: #707070;
    margin-top: 15px;
    padding-top: 5px;
    cursor: pointer;
}

.show-down {
    margin-top: 5px;
    font-size: 14px;
    color: #707070;
    cursor: pointer;
}

.list {
    width: 25%;
    border-left: 1px solid #eee;
    padding: 0 0 0 10px;
}

.list-content {
    border: 1px solid #eee;
    overflow: hidden;
}

.list-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: 300ms;
    overflow: hidden;
}

.list-item {
    overflow: hidden;
    position: relative;
}

.list-item:hover {
    cursor: pointer;

    img {
        scale: 1.1;
        transition: 300ms;
        overflow: hidden;
    }
}

.list-item:hover .word {
    display: block;
    transition: 300ms;
}

.list-item div {
    font-size: 16px;
    color: #333;
    padding: 4px 10px;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.flex div {
    font-size: 14px;
    color: #777;
    padding: 6px 10px;
}

.flex img {
    height: 10px;
    width: 25px;
}

.list-solid {
    width: 88%;
    border-bottom: 1px solid #eee;
    margin: auto;
}

@media screen and (max-width: 768px) {
    .info {
        padding: 0 10px;
        display: block;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .content {
        padding: 20px;
    }

    .content1 {
        width: 100%;
    }

    .content2 {
        width: 100%;
    }

    .content-flex {
        display: block;
        padding: 10px;
    }

    .content-flex {
        width: 100%;
    }

    ._show {
        width: 100%;
    }

    .show {
        padding: 10px;
    }

    .list {
        display: none;
    }
    .between{
        display: block;
        line-height: 1.5;
    }
}</style>
    