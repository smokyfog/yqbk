<template>
  <div class="">
    <Header />
    <div id="container">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/layout/header'
import Footer from '~/components/layout/footer'
import '~/static/css/element-variables.scss'
import '~/static/font/iconfont.css'
// import '//at.alicdn.com/t/font_1464229_um8p8tbuup.css'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @import '~/static/css/reset.css';
  @import 'font-awesome/css/font-awesome.min.css';
  html, body {
    background: #f4f4f4;
  }
  #container {
    width: 1200px;
    margin: auto;
    margin-top: 65px;
  }
</style>