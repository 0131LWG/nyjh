<template>
    <div class="background">
        <!-- <div class="about">
            <div class="about-link">
                <div v-for="item,index in linkList" :key="index">
                    <div class="about-link-title">{{ item.title }}</div>
                    <div class="about-link-name" v-for="_item,_index in item.list" :key="_index">{{ _item.name }}</div>
                </div>
                <div class="about-link-imgs">
                    <div>
                        <img
                            src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg">
                        <div>文案文案</div>
                    </div>
                    <div>
                        <img
                            src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg">
                        <div>文案文案</div>
                    </div>
                    <div>
                        <img
                            src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg">
                        <div>文案文案</div>
                    </div>
                </div>
            </div>
            <div class="about-solid"></div>
            <div class="about-address">
                <div>东莞市南粤净化科技有限公司</div>
                <div>文案文案文案</div>
                <div class="about-address-imgs">
                    <img
                        src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg">
                    <img
                        src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg">
                    <img
                        src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg">
                    <img
                        src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg">
                    <img
                        src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg">
                </div>
            </div>
        </div> -->
        <div class="about">
            <div class="title">东莞市南粤净化科技有限公司</div>
            <div class="flex">
                <img src="../assets/home/location.png" />
                <div>工厂地址：广东省东莞市麻涌镇新基北街9号</div>
            </div>
            <div class="flex">
                <img src="../assets/home/phone.png" />
                <div>售前电话：13925787528&emsp;13416783698</div>
            </div>
            <div class="flex">
                <img src="../assets/home/tell.png" />
                <div>售后电话：15916750164</div>
            </div>
            <div class="flex">
                <img src="../assets/home/news.png" />
                <div>邮箱：fy686@126.com</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        linkList: [
            {
                title: '关于我们',
                list: [
                    {
                        name: '公司简介',
                        url: ''
                    },
                    {
                        name: '品牌故事',
                        url: ''
                    },
                    {
                        name: '生产与质量',
                        url: ''
                    }
                ]
            },
            {
                title: '产品中心',
                list: [
                    {
                        name: '产品中心',
                        url: ''
                    }
                ]
            },
            {
                title: '过滤器资讯',
                list: [
                    {
                        name: '过滤器资讯',
                        url: ''
                    }
                ]
            },
        ]
    }),
    methods: {
        goLink(path) {
            this.$router.push({
                path
            })
        }
    }
}
</script>
  
<style scoped>
.title{
    font-size: 26px;
}
.background{
    /* background-color: black; */
    background-image: url(../assets/home/footbg.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 300px;
    font-size: 18px;
    color: #fff;
}

.flex{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
}

img{
    width: 25px;
    height: 25px;
    margin-right: 15px;
}

.about {
    max-height: 540px;
    padding: 40px 0 10px 30px;
    max-width: 1040px;
    margin: 0 auto;
}

.about-link {
    display: flex;
    justify-content: space-between;
    color: #c2c6ca;
    font-size: 14px;
    padding: 0 10px;
}

.about-link-title {
    font-size: 18px;
    color: #fff;
    margin-bottom: 15px;
}

.about-link-name {
    margin-bottom: 10px;
}

.about-link-imgs {
    width: 500px;
    display: flex;
    justify-content: flex-end;
    text-align: center;
}

.about-link-imgs img {
    width: 110px;
    height: 110px;
}

.about-link-imgs div {
    margin-left: 15px;
}

.about-solid {
    background-color: #595959;
    width: 100%;
    height: 1px;
    margin-top: 10px;
}

.about-address {
    padding: 10px;
    color: #fff;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.about-address-imgs {
    width: 50%;
    display: flex;
    justify-content: flex-end;
}

.about-address-imgs img {
    width: 36px;
    height: 36px;
    margin-left: 10px;
    border-radius: 50%;
}
</style>
  