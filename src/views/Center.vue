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
            <img class="swiper-slide-img"  src="../assets/tab1/banner.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="text-container">
      <div class="textBox">
        <span>文案文案文案文案文文案文案文案文案文案文</span>
      </div>
    </div> -->
    <div style="background-color:#eee;padding: 30px 0;">
      <div v-for="(item, index) in list" :key="index" class="list" :style="!index ? '' : 'margin-top:20px'">
        <div style="display:flex;align-items:center;">
          <span class="order">{{ index + 1 }}</span>
          <div class="title">{{ item.title }}</div>
        </div>
        <div class="flex">
          <div class="flex-content" v-for="(content,_index) in item.list" :key="_index" @click="checkDetail(index,_index)">

            <img :src="content.url" />
            <div></div>
            <div>{{ content.name }}</div>
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
          url:require('../assets/tab3/list6.jpg'),
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
  mounted() {

  },
  methods: {
    checkDetail(x,y){
      this.$router.push({path:'/goods',query:{x,y}}).catch(err => { console.log(err) })
    }
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

.flex-content:hover {
  img {
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
  transition: 500ms;
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