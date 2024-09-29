<template>
    <div class="background">
        <div class="about">
            <div class="about-link">
                <div v-for="item,index in linkList" :key="index">
                    <div class="about-link-title">{{ item.title }}</div>
                    <div class="about-link-name" v-for="_item,_index in item.list" :key="_index">{{ _item.name }}</div>
                </div>
                <div class="about-link-imgs">
                    <div>
                        <img
                            src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2">
                        <div>文案文案</div>
                    </div>
                    <div>
                        <img
                            src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2">
                        <div>文案文案</div>
                    </div>
                    <div>
                        <img
                            src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2">
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
                        src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2">
                    <img
                        src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2">
                    <img
                        src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2">
                    <img
                        src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2">
                    <img
                        src="https://ts3.cn.mm.bing.net/th?id=OIP-C.5uMzGH7lZNGNa3IxHWE4zgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2">
                </div>
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
                title: '解决方案',
                list: [
                    {
                        name: '解决方案',
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
.background{
    background-color: black;
}

.about {
    max-height: 540px;
    padding: 20px 0 10px 0;
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
  