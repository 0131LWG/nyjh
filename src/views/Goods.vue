<!-- 解决方案详情 -->
<template>
    <div class="detail">
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
        <div v-if="info" class="info">
            <div class="content1">
                <div style="padding:10px;background-color: #2648A3;color: #fff;">产品分类</div>
                <div v-for="(item, index) in list" :key="index" class="tabs" @click="goLink('/center')">{{ item.title }}
                </div>
                <div style="padding:10px;background-color: #2648A3;color: #fff;">联系我们</div>
                <div class="news">东莞市南粤净化科技有限公司</div>
                <div class="news">工厂地址:广东省东莞市麻涌镇新基北街9号</div>
                <div class="news">售前电话:13925787528&emsp;13416783698</div>
                <div class="news">售后电话:15916750164</div>
                <div class="news">邮箱:fy686@126.com</div>
            </div>
            <div class="content2">
                <div class="between">
                    <div>{{ list[info.x].title }}</div>
                    <div>
                        <span>您的当前位置：</span>
                        <span style="cursor:pointer" @click="goLink('/')">首页</span>
                        <span style="padding:4px 20px 0 20px">/</span>
                        <span style="cursor:pointer" @click="goLink('/center')">产品中心</span>
                        <span style="padding:4px 20px 0 20px">/</span>
                        <span style="cursor:pointer">{{ list[info.x].list[info.y].name }}</span>
                    </div>
                </div>
                <div>
                    <div class="title">{{ list[info.x].title }}</div>
                    <div class="betweens">
                        <img :src="list[info.x].list[info.y].url" />
                        <div style="margin:30px 20px;">
                            <div style="border-bottom:1px dotted #777;padding-bottom: 10px;">所属分类：{{
                                list[info.x].list[info.y].name }}</div>
                            <div class="button" @click="goLink('/service')">立即询价</div>
                        </div>
                    </div>
                </div>
                <div class="title" style="text-align:left;padding:10px 0 10px 0;">详细介绍</div>
                <div style="padding:10px 0;font-size:14px;">
                    文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案
                </div>
                <div style="border-top:1px solid #ccc;padding: 10px 0;font-size:14px;" v-if="info.y == 0">上一篇：无</div>
                <div style="border-top:1px solid #ccc;padding: 10px 0;font-size:14px;cursor: pointer;" v-else
                    @click="change('reduce')">上一篇：{{ list[info.x].list[Number(info.y) - 1].name }}</div>
                <div style="border-top:1px solid #ccc;padding: 10px 0;font-size:14px;cursor: pointer;"
                    v-if="info.y < list[info.x].list.length - 1" @click="change('add')">下一篇：{{
                        list[info.x].list[Number(info.y) + 1].name }}</div>
                <div style="border-top:1px solid #ccc;padding: 10px 0;font-size:14px;" v-else>下一篇：无</div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data: () => ({
        info: 0,
        list: [{
            title: '介质过滤器',
            list: [
                {
                    name: '平板型覆网式初效过滤器',
                    url: require('../assets/tab3/list1.jpg'),
                },
                {
                    name: '平板型龙骨式初效过滤器',
                    url: require('../assets/tab3/list2.jpg'),
                },
                {
                    name: '袋式过滤器（初效/中效）',
                    url: require('../assets/tab3/list3.jpg'),
                },
                {
                    name: '金属网过滤器',
                    url: require('../assets/tab3/list4.jpg'),
                },
                {
                    name: 'V型密褶式过滤器（高效/亚高效/中效）',
                    url: require('../assets/tab3/list5.jpg'),
                },
                {
                    name: '有隔板过滤器（高效/亚高效/中效）',
                    url: require('../assets/tab3/list6.jpg'),
                },
                {
                    name: '无隔板过滤器（超高效/高效/亚高效/中效）',
                    url: require('../assets/tab3/list7.jpg'),
                },
                {
                    name: '无隔板过滤器-液槽型（超高效/高效）',
                    url: require('../assets/tab3/list8.jpg'),
                },
                {
                    name: '耐高温有隔板过滤器-250℃（高效/中效）',
                    url: require('../assets/tab3/list9.jpg'),
                },
                {
                    name: '耐高温无隔板过滤器-250℃（高效/中效）',
                    url: ''
                },
            ]
        }, {
            title: '化学过滤器',
            list: [
                {
                    name: '板式活性炭过滤器',
                    url: require('../assets/tab3/content1.jpg'),
                },
                {
                    name: '袋式活性炭过滤器',
                    url: require('../assets/tab3/content2.jpg'),
                },
            ]
        }, {
            title: '风机过滤单元',
            list: [
                {
                    name: '风机过滤单元FFU',
                    url: require('../assets/tab3/ur1.jpg'),
                },
                {
                    name: '设备端风机过滤单元EFU',
                    url: require('../assets/tab3/ur2.jpg'),
                },
            ]
        }, {
            title: '空气净化设备',
            list: [
                {
                    name: '层流罩',
                    url: ''
                },
                {
                    name: '传递窗',
                    url: require('../assets/tab3/li2.jpg')
                },
                {
                    name: '风淋室',
                    url: require('../assets/tab3/li3.jpg')
                },
                {
                    name: '洁净工作台',
                    url: require('../assets/tab3/li4.jpg')
                },
                {
                    name: '一体式空气净化风口',
                    url: require('../assets/tab3/li5.jpg')
                },
            ]
        }]
    }),
    created() {
        this.info = this.$route.query
    },
    methods: {
        change(type) {
            if (type == 'add') {
                this.$router.push({ path: '/goods', query: { x: this.info.x, y: Number(this.info.y) + 1 } }).catch(err => { console.log(err) })
                this.info = this.$route.query
            }
            else {
                this.$router.push({ path: '/goods', query: { x: this.info.x, y: Number(this.info.y) - 1 } }).catch(err => { console.log(err) })
                this.info = this.$route.query
            }
        },
        goLink(path) {
            this.$router.push(path)
        },
    },
}
</script>
  
<style scoped>
.title {
    padding: 20px;
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
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
    