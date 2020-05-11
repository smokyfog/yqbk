<template>
  <div class="container">
    <div id="banner_box">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in banner" :key="item._id + Math.random()">
          <h3 style="height:100%;width:100%">
            <nuxt-link :to="'/detail?id=' + item.articleId">
              <img
                :src="item.imageUrl"
                style="height:100%;width:100%"
                alt=""
              >
            </nuxt-link>
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row id="container_main" :gutter="20">
      <el-col :span="18">
        <div class="container_left">
          <Hot :hot="hot" />
          <Recom :hotrank="hotRank" :newrank="newRank" />
          <Article :article="article" />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="container_right">
          <my-card />
          <side-list v-if="commentslist.length" :comments="commentslist"/>
          <Link />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import comm from '~/static/comm.js'
import Hot from '~/components/index/hotRecommended.vue'
import Article from '~/components/index/articleList.vue'
import Link from '~/components/index/friendlyLink.vue'
import Recom from '~/components/index/Recommended.vue'
import myCard from '~/components/index/myCard.vue'
import sideList from '~/components/index/sideList.vue'

export default {
  components: {
    Hot,
    Link,
    Recom,
    Article,
    myCard,
    sideList
  },
  data () {
    return {
      banner: [],
      hot: [],
      article: [],
      hotRank: [],
      newRank: [],
      comments: [],
      commentslist: []
    }
  },
  async asyncData (ctx) {
    let datas = {}
    // 获取banner信息
    let banner = await ctx.$axios.get(
      comm.base + '/api/banner/list')
      .catch(err => {
        datas.banner = []
      })
    if (banner && banner.data && banner.data.code === 0) {
      datas.banner = banner.data.data
    }
    // 获取热门推荐
    let hot = await ctx.$axios.get(
      comm.base + '/api/article/get_rank_list',
      {
        params: {
          page_size: 6, 
          type: 'random',
          order: 1
        }
      }
    ).catch(err => {
      datas.hot = []
    })
    if (hot && hot.data && hot.data.code === 0) {
      datas.hot = hot.data.data
    }
    // 获取文章article
    let article = await ctx.$axios.get(
      comm.base + '/api/article/get_rank_list',
      {
        params: {
          page_size: 10, 
          type: 'random',
          order: 1
        }
      }
    ).catch(err => {
      datas.article = []
    })
    if (article && article.data && article.data.code === 0) {
      datas.article = article.data.data
    }
    // 获取最热排行
    let hotRank = await ctx.$axios.get(
      comm.base + '/api/article/get_rank_list',
      {
        params: {
          page_size: 5, 
          type: 'browseCount',
          order: -1
        }
      }
    ).catch(err => {
      datas.article = []
    })
    if (hotRank && hotRank.data && hotRank.data.code === 0) {
      datas.hotRank = hotRank.data.data
    }
    // 获取最新排行
    let newRank = await ctx.$axios.get(
      comm.base + '/api/article/get_rank_list',
      {
        params: {
          page_size: 5, 
          type: 'create_time',
          order: -1
        }
      }
    ).catch(err => {
      datas.article = []
    })
    if (newRank && newRank.data && newRank.data.code === 0) {
      datas.newRank = newRank.data.data
    }
    // 获取最多评论排行
    let commentslist = await ctx.$axios.get(
      comm.base + '/api/article/get_rank_list',
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
.container {
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
