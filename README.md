```

### 注意事项：
  * router 必须  mode: 'history'
  * 要用history 模式，需要服务端支持，详情见[官网 HTML5 History 模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html)


## 使用 `vue-meta-info` 配置 meta 标签keywords 、 description 的内容

```

yarn add vue-meta-info

```

main.js

```

import MetaInfo from 'vue-meta-info'

Vue.use(MetaInfo)

```

在 xxx.vue 文件里写上以下代码。这些代码会转换成网页的 meta 标签里的内容。

```

export default {
metaInfo: {
title: '我是一个 title',
meta: [
{
name: 'keywords',
content: '关键字 1,关键字 2,关键字 3'
},
{
name: 'description',
content: '这是一段网页的描述'
}
]
}
}

```

`yarn build` 后

```

...

  <title>我是一个title</title>
  ...
  <meta data-vue-meta-info="true" name="keywords" content="关键字1,关键字2,关键字3">
  <meta data-vue-meta-info="true" name="description" content="这是一段网页的描述">
```
