// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended" // 针对 Vue 2 的推荐配置
  ],
  parserOptions: {
    parser: "babel-eslint", // 使用 babel-eslint 解析器来支持 ES6+ 语法
    ecmaVersion: 2021,
    sourceType: "module"
  },
  rules: {
    // 你可以根据自己的需求自定义规则
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/max-attributes-per-line": "off", // 关闭 Vue 的属性强制换行限制
    "vue/singleline-html-element-content-newline": "off" // 允许单行元素
  }
}
