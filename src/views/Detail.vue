<!-- 解决方案详情 -->
<template>
    <div class="detail">
        <div class="home">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img class="swiper-slide-img"
                            src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
                    </div>
                </div>
            </div>
        </div>
        <div class="tab">
            <span class="tab-title">首页</span>
            <span style="padding:4px 20px 0 20px">/</span>
            <span class="tab-title">解决方案</span>
            <span style="padding:4px 20px 0 20px">/</span>
            <span class="tab-title">分类名称</span>
        </div>
        <div class="content">
            <div class="content-flex">
                <div class="show">
                    <div class="show-title">
                        <img src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
                        <div>标题标题</div>
                    </div>
                    <div class="show-text">文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
                    <div class="show-text">文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
                    <img class="show-img" src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
                </div>
                <div class="list">
                    <div class="list-content">
                        <div v-for="(item,index) in [{},{},{},{},{},{}]" :key="index">{{ index+1 }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data: () => ({
        tabIndex: 0,
    }),
    mounted() {
        this.tabIndex = this.$route.query.id ? this.$route.query.id : 0
    },
    methods: {

    },
}
</script>
  
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

.content{
    width: 100%;
    height: 100%;
    background: url(../assets/home/background.jpg);
    padding:20px 10%;
    box-sizing: border-box;
}

.content-flex{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
}
.show{
    width: 75%;
    height: 100%;
    background-color: #f4f4f4;
    margin-right: 10px;
    box-sizing: border-box;
    padding:20px;
}
.show-title{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #222;
}
.show-title img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
}
.show-text{
    text-indent: 2em;
}
.show-img{
    width: 100%;
    object-fit:cover;
}
.list{
    width: 25%;
    border-left: 1px solid #eee;
    padding: 0 0 0 10px;
}
.list-content{
    border:1px solid #eee;
}
</style>
    