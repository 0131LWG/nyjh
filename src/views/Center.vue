<template>
    <div class="center">
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
        <div style="background-color:#eee;padding: 30px 0;">
            <div v-for="(item, index) in list" :key="index" class="list" :style="!index ? '' : 'margin-top:20px'">
                <div style="display:flex;align-items:center;">
                    <span class="order">{{ index + 1 }}</span>
                    <div class="title">文案文案</div>
                </div>
                <div class="flex">
                    <div class="flex-content" v-for="content in [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]">
                        <img src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
                        <div>名称名称名称</div>
                        <div>规格规格规格</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "center",
    components: {},
    data: () => ({
        list: [{}, {}, {}]
    }),
    mounted() {

    },
    methods: {

    },
};
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

.list {
    padding: 0 10%;
}

.order {
    background-color: #ccc;
    padding: 10px 20px;
    font-size: 40px;
    color: #fff;
    margin-right: 15px;
}

.title {
    color: #0c4c92;
    font-size: 30px;
    padding-bottom: 15px;
    border-bottom: 2px solid #0c4c92;
}

.flex {
    background-color: #fff;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    margin: 20px 0 0 0;
    font-size: 15px;
    color: #666;
    text-align: center;
}

.flex-content {
    width: 20%;
    box-sizing: border-box;
    padding: 10px;
    overflow: hidden;
}

.flex-content:hover{
    img{
      scale: 1.1;
      transition: 500ms;
      margin-bottom: 10px;
    }
    background-color: #eee;

  }

.flex-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
    .flex-content {
        width: 50%;
        box-sizing: border-box;
        padding: 10px;
    }

    .list {
        padding: 0 30px;
    }
}
</style>