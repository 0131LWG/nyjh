<template>
  <div v-if="tabIndex != 0">
    <div class="home">
      <img
      src="../assets/tab1/banner.png" />
    </div>
    <div class="tab">
      <div v-for="item, index in tabList" :key="index" @click="goLink('/core?id=' + item.id)">{{ item.name }}</div>
    </div>
    <div class="info" v-if="tabIndex == 1">
      <div class="info-box">
        <div class="info-box-title">文文案文案文案文案文案文案文案文案文案文案文案</div>
        <div class="info-box-des">文文案文案文案文案文案文案文案文案文案文案文案文文案文案文案文案文案文案文案文案文案文案文案文文案文案文案文案文案文案文案文案文案文案文案</div>
        <div class="info-box-cards">
          <div class="info-box-card" v-for="item, index in [{}, {}, {}, {}]" :key="index">
            <img
              src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
            <div>文案文案文案文案文案</div>
          </div>
        </div>
        <img class="info-box-img"
          src="https://cbu01.alicdn.com/img/ibank/2018/215/366/9282663512_92214457.jpg" />
      </div>
      <div class="info-box">
        <div class="info-box-title">文文案文案文案文案文案文案文案文案文案文案文案</div>
        <div class="info-box-des">文文案文案文案文案文案文案文案文案文案文案文案文文案文案文案文案文案文案文案文案文案文案文案文文案文案文案文案文案文案文案文案文案文案文案</div>
        <div class="info-box-flex">
          <div>1</div>
          <div>2</div>
        </div>
      </div>
      <div class="info-box">3</div>
      <div class="info-box">4</div>
    </div>
    <div class="info" v-if="tabIndex == 2">123</div>
    <div class="info" v-if="tabIndex == 3">123</div>
    <div class="info" v-if="tabIndex == 4">123</div>
  </div>
</template>

<script>

export default {
  name: "core",
  components: {

  },
  data: () => ({
    tabList: [
      {
        name: '文案1文案1文案1',
        id: 1
      },
      {
        name: '文案2文案2文案2文案2',
        id: 2
      },
      {
        name: '文案3文案3文案3文案3',
        id: 3
      },
      {
        name: '文案4文案4文案4',
        id: 4
      }
    ],
    tabIndex: 0,
  }),
  mounted() {
    this.tabIndex = this.$route.query.id ? this.$route.query.id : 0
  },
  methods: {
    goLink(path) {
      this.$router.push({
        path,
      });
      location.reload()
    },
  }
}
</script>

<style scoped>
.home {
  height: 524px;
}

.home img {
  height: 524px;
  width: 100%;
  object-fit: cover;
}

.tab {
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.tab div {
  height: 43px;
  border-radius: 43px;
  line-height: 43px;
  color: #333;
  font-size: 14px;
  text-align: center;
  border: 1px solid #eee;
  padding: 0 20px;
  min-width: 100px;
  margin: 20px 0;
  cursor: pointer;
}

.tab div:hover {
  background-color: #06478c;
  color: #fff;
}

.info {
  padding: 0 15%;
  margin-bottom: 20px;
}

.info-box {
  background-color: #f5f5f5;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
}

.info-box-title {
  color: #333;
  font-size: 20px;
  font-weight: bold;
  font-family: "宋体";
  margin-bottom: 10px;
}

.info-box-des {
  color: #595959;
  font-size: 14px;
  width: 70%;
  margin: auto;
  margin-bottom: 10px;
}
.info-box-flex{
display: flex;
justify-content: space-between;
}

.info-box-cards {
  display: flex;
  justify-content: space-between;
}

.info-box-card {
  width: 24%;
  height: 200px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 20px 20px 0 20px;
}

.info-box-card:hover {
  background-color: #06478c;
  color: #fff;
}

.info-box-card div {
  margin-top: 2px;
  font-size: 12px;
}

.info-box-card img {
  width: 100%;
  height: 150px;
}

.info-box-img {
  height: 310px;
  width: 100%;
  object-fit: cover;
  margin-top: 10px;
}</style>
