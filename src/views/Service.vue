<!-- 服务网络 -->
<template>
  <div class="recruit">
    <div class="home">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="swiper-slide-img" src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="text-container">
      <div class="textBox">
        <span>文案文案文案文案文文案文案文案文案文案文</span>
      </div>
    </div>
    <div class="flex">
      <div class="flex-news">
        <div class="flex-news-one">
          <img style="width:37px;height:40px;margin-right:20px;margin-left:5px;" src="../assets/home/tell1.png" />
          <div>
            <div style="font-size:16px;color:#333;">合作热线：</div>
            <div style="font-size:14px;color:#999;margin-top:10px;">0769-22427609</div>
          </div>
        </div>
        <div class="flex-news-one" style="margin:30px 0;">
          <img src="../assets/home/phone1.png" />
          <div>
            <div style="font-size:16px;color:#333;">招聘热线：</div>
            <div style="font-size:14px;color:#999;margin-top:10px;">13925787528</div>
          </div>
        </div>
        <div class="flex-news-one">
          <img src="../assets/home/location1.png" />
          <div>
            <div style="font-size:16px;color:#333;">地址：</div>
            <div style="font-size:14px;color:#999;margin-top:10px;">广东省东莞市麻涌镇新基北街9号101室</div>
          </div>
        </div>
      </div>
      <div id="allmap">123</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  mounted() {
    this.loadMapScript();
  },

  methods: {
    // 初始化地图
    init() {
      let Bmap = window.BMap; // 注意要带window，不然会报错（注意官方api,会有改动，之前是Bmap,后面3.0版本改为了BMap,最好查文档或者打印一下window）
      var map = new Bmap.Map("allmap"); // allmap必须和dom上的id一直
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.ScaleControl());
      map.addControl(new BMap.OverviewMapControl());
      map.addControl(new BMap.MapTypeControl())
      var point = new Bmap.Point(113.602145, 23.071364); // 创建点坐标
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
      map.centerAndZoom(
        point,
        19
      ); // 初始化地图,设置中心点坐标和地图级别
      map.setCurrentCity("东莞");
      map.enableScrollWheelZoom(true);
    },
    loadMapScript() {
      // 此处在所需页面引入资源就是，不用再public/index.html中引入
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.className = "loadmap"; // 给script一个类名
      script.src =
        "https://api.map.baidu.com/getscript?v=3.0&ak=8nwHTmadwOaIrIAiPoNrJG1wiH0ubCwn";
      // 此处需要注意：申请ak时，一定要应用类别一定要选浏览器端，不能选服务端，不然地图会报ak无效
      script.onload = () => {
        // 使用script.onload，待资源加载完成，再初始化地图
        this.init();
      };
      let loadmap = document.getElementsByClassName("loadmap");
      if (loadmap) {
        // 每次append script之前判断一下，避免重复添加script资源标签
        for (var i = 0; i < loadmap.length; i++) {
          document.body.removeChild(loadmap[i]);
        }
      }
      document.body.appendChild(script);
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

#allmap {
  width: 80%;
  height: 60%;
  margin: auto;
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

.info {
  padding: 30px 15%;
  background-color: #efefef;
}

.info-title {
  color: #2648a3;
  font-size: 20px;
  padding-bottom: 5px;
  margin: 20px 0;
  border-bottom: 2px solid #2648a3;
}

#allmap {
  width: 50%;
  height: 500px;
}

.info-box {
  background-color: #fff;
  padding: 10px;
}

.info-box-title {
  color: #fff;
  background-color: #2648a3;
  font-size: 21px;
  text-align: center;
  padding: 10px 0;
}

.info-box-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
}

.bold {
  font-weight: bold;
  font-size: 20px;
  color: #333;
}

.info-box-flex div {
  width: 25%;
}

.solid {
  border-top: 2px solid #999;
}

.button {
  color: #fff;
  background-color: #2648a3;
  padding: 6px 0;
  border-radius: 6px;
  text-align: center;
}

.flex {
  padding: 30px 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-news {
  width: 50%;
  padding-left: 80px;
}

.flex-news-one {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.flex-news-one img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

@media screen and (max-width: 900px) {
  .none {
    display: none;
  }

  .info {
    padding: 30px 10px;
  }

  .flex {
    display: block;
    padding: 30px 20px;

  }

  #allmap {
    width: 100%;
    height: 500px;
    margin-top: 40px;
  }

  .flex-news {
    width: 100%;
    padding-left: 0;
  }
}
</style>
  