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
import './element-variables.scss'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @import './reset.css';
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