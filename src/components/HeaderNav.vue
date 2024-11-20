<!-- 顶部导航 -->
<template>
  <div>
    <div class="header" :class="{ white: bgColor }">
      <img class="logo" src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
      <div class="nav">
        <div class="nav-item" v-for="(item, index) in list" :key="index" @click="goLink(item.link)">
          {{ item.label }}
          <div v-if="Array.isArray(item.children)" class="tab">
            <div class="tab-content">
              <div class="tab-content-list">
                <div v-for="(tab, indexT) in item.children" :key="indexT" class="tab-content-list-item">
                  {{ tab.label }}
                </div>
              </div>
              <img class="tab-content-img" :src="item.img" />
            </div>
          </div>
        </div>
      </div>
      <div class="logo"></div>
    </div>
    <div class="tabs">
      <img class="tabs-logo" src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
      <img class="tabs-menu" @click="openPupop" src="../assets/home/menu.png" />
    </div>

    <div id="modal" class="modal">
      <div class="modal-content">
        <span id="closeModalBtn" class="close" @click="closePupop">&times;</span>
        <div class="menu">
          <div class="menu-item" v-for="item in list" :key="item" @click="goLink(item.link)">
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          label: "首页",
          link: "/",
          children: null
        },
        {
          label: "关于我们",
          link: "/about",
          children: null,
          img: "https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg"
        },
        {
          label: "产品中心",
          link: "/center",
          children: null
        },
        {
          label: "解决方案",
          link: "/plan",
          children: null
        },
        {
          label: "行业案例",
          link: "/case",
          children: null
        },
        {
          label: "招贤纳士",
          link: "/recruit",
          children: null,
          // children: [
          //   {
          //     label: "企业理念",
          //     link: "",
          //   },
          //   {
          //     label: "人才管理",
          //     link: "",
          //   },
          //   {
          //     label: "活动留影",
          //     link: "",
          //   },
          //   {
          //     label: "工作机会",
          //     link: "",
          //   },
          // ],
          img: "https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg"
        },
        {
          label: "服务网络",
          link: "/service",
          children: null
        }
      ],
      bgColor: true
    }
  },
  mounted() {
    // 滚动变色
    window.onscroll = () => {
      this.bgColor = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
    }
  },
  methods: {
    goLink(path) {
      this.closePupop()
      if (path) {
        this.$router.push({
          path
        })
      } else {
        window.alert("暂未开放")
      }
    },
    openPupop() {
      const modal = document.getElementById("modal")
      modal.style.display = "block"
    },
    closePupop() {
      const modal = document.getElementById("modal")
      modal.style.display = "none"
    }
  }
}
</script>

<style scoped>
.tabs {
  display: none;
}

.nav {
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100%;
  font-family: "宋体";
}

.nav-item {
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.nav-item:hover {
  color: red;

  .tab {
    display: block;
  }
}

.tab {
  display: none;
  cursor: default;
  position: absolute;
  width: 100%;
  top: 90px;
  left: 0;
  background-color: #f3f3f3;
  color: black;
  padding: 50px 0;
  height: 120px;
}

.tab-content {
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  justify-content: space-between;
}

.tab-content-list {
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 400px;
  height: fit-content;
}

.tab-content-list-item {
  height: 30px;
  line-height: 30px;
  padding: 6px 0;
}

.logo {
  height: 60px;
  width: 210px;
  object-fit: contain;
}

.header {
  position: relative;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  height: 90px;
  background-color: transparent;
  align-items: center;
  color: white;
  transition: color, background-color 0.5s;
  z-index: 999;
}

.white {
  background-color: white;
  color: black;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: none;
  /* 初始状态隐藏 */
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 100vw;
  box-sizing: border-box;
  height: 100vh;
}

.close {
  color: #aaa;
  float: right;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
}

@media screen and (max-width: 900px) {
  .header {
    display: none;
  }

  .tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
  }

  .tabs-logo {
    width: 40px;
    height: 40px;
  }

  .tabs-menu {
    width: 30px;
    height: 30px;
  }
  .menu {
    margin-top: 30px;
  }
  .menu-item {
    margin-top: 20px;
    cursor: pointer;
  }
}
</style>
