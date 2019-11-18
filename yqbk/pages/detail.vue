<template>
  <div class="detail">
    <el-row id="container_main" :gutter="20">
      <el-col :span="18">
        <div class="container_left">
          <breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>详情页</el-breadcrumb-item>
          </breadcrumb>
          <Detail :detail="detail" />
          <footer-recom />
          <article-comments />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="container_right">
          <side-list :comments="commentslist"/>
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
import sideList from '~/components/layout/sideList.vue'
import Breadcrumb from '~/components/layout/breadcrumb.vue'
import articleComments from '~/components/detail/articleComments.vue'

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
      ],
      detail: {},
      commentslist: []
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
  },
  watch: {
    $route (to, from) {
      this.$router.go(0)
    }
  },
  async asyncData(ctx) {
    const id = ctx.query.id
    let datas = {}
    let { data } = await ctx.$axios.get('/api/article/get_article_detail', 
    {
      params : {
        id
      }
    })
    if (data && data.code === 0) {
      datas.detail = data.data
    }

    // 获取最多评论排行
    let commentslist = await ctx.$axios.get(
      '/api/article/get_rank_list',
      {
        params: {
          page_size: 8, 
          type: 'comments',
          order: -1
        }
      }
    ).catch(err => {
      datas.commentslist = []
    })
    if (commentslist && commentslist.data && commentslist.data.code === 0) {
      datas.commentslist = commentslist.data.data
    }
    return datas
  }
}
</script>

<style lang="scss">
@import '../assets/content.scss';
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
