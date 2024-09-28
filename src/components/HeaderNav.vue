<!-- 顶部导航 -->
<template>
  <div class="header" :class="{ white: bgColor }">
    <img
      class="logo"
      src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    />
    <div class="nav">
      <div class="nav-item" v-for="(item, index) in list" :key="index">
        {{ item.label }}
        <div v-if="Array.isArray(item.children)" class="tab">
          <div class="tab-content">
            <div class="tab-content-list">
              <div
                v-for="(tab, indexT) in item.children"
                :key="indexT"
                class="tab-content-list-item"
              >
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
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          label: "首页",
          link: "",
          children: null,
        },
        {
          label: "关于我们",
          link: "",
          children: [
            {
              label: "公司介绍",
              link: "",
            },
            {
              label: "品牌故事",
              link: "",
            },
            {
              label: "生产与质量",
              link: "",
            },
            {
              label: "企业视频",
              link: "",
            },
            {
              label: "全球分布",
              link: "",
            },
            {
              label: "研发与创新",
              link: "",
            },
          ],
          img: "https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        },
        {
          label: "产品中心",
          link: "",
          children: null,
        },
        {
          label: "解决方案",
          link: "",
          children: null,
        },
        {
          label: "解决方案",
          link: "",
          children: null,
        },
        {
          label: "行业案例",
          link: "",
          children: null,
        },
        {
          label: "招贤纳士",
          link: "",
          children: [
            {
              label: "企业理念",
              link: "",
            },
            {
              label: "人才管理",
              link: "",
            },
            {
              label: "活动留影",
              link: "",
            },
            {
              label: "工作机会",
              link: "",
            },
          ],
          img: "https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        },
        {
          label: "服务网络",
          link: "",
          children: null,
        },
      ],
      bgColor: true,
    };
  },
  mounted() {
    // 滚动变色
    window.onscroll = () => {
      this.bgColor =
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
    };
  },
  methods: {
    goLink(path) {
      this.$router.push({
        path,
      });
    },
  },
};
</script>
  
<style scoped>
.nav {
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100%;
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
</style>
  