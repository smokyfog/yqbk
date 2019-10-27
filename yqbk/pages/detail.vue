<template>
  <div class="detail">
    <el-row id="container_main" :gutter="20">
      <el-col :span="18">
        <div class="container_left">
          <breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理1</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          </breadcrumb>
          <Detail />
          <footer-recom />
          <article-comments />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="container_right">
          <side-list />
          <Link />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Hot from '~/components/index/hotRecommended.vue'
import Detail from '~/components/detail/detail.vue'
import footerRecom from '~/components/detail/footerRecom.vue'
import Link from '~/components/index/friendlyLink.vue'
import Recom from '~/components/index/Recommended.vue'
import myCard from '~/components/index/myCard.vue'
import sideList from '~/components/index/sideList.vue'
import Breadcrumb from '~/components/layout/breadcrumb.vue'
import articleComments from '~/components/comment/Comments.vue'

export default {
  data() {
    return {
      banner:[
        {
          name: 1,
          url: 'http://www.zbboke.com/templets/boke/picture/banner_3.jpg'
        },
        {
          name: 1,
          url: 'http://www.zbboke.com/templets/boke/picture/banner.gif'
        },
        {
          name: 1,
          url: 'http://www.zbboke.com/templets/boke/picture/banner_1.jpg'
        }
      ]
    }
  },
  components: {
    Hot,
    Link,
    Recom,
    Detail,
    myCard,
    sideList,
    Breadcrumb,
    footerRecom,
    articleComments
  }
}
</script>

<style lang="scss">
.detail {
  #banner_box {
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.85;
      line-height: 300px;
      margin: 0;
    }
    .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
      box-shadow: 0;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
  #container_main {
    margin-top: 10px;
    .container_left {
      // height: 1200px;
      // background: rgb(179, 179, 179);
    }
    .container_right {
      // background: #ccc;
    }
  }
}
</style>
