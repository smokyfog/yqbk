<template>
  <div class="share_container">
    <el-row id="container_main" :gutter="20">
      <el-col :span="18">
        <div class="container_left">
          <Article
            :page="page"
            :type="type"
            :total="total"
            :pagesize="page_size"
            :list="articlelist"
            :keywords="keywords"
            @changedata="change_data"
          >搜索</Article>

        </div>
      </el-col>
      <el-col :span="6">
        <div class="container_right">
          <side-list :comments="randomlist">文章推荐</side-list>
          <Link />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Hot from '~/components/index/hotRecommended.vue'
import Article from '~/components/notes/articleList.vue'
import Link from '~/components/index/friendlyLink.vue'
import Recom from '~/components/index/Recommended.vue'
import myCard from '~/components/index/myCard.vue'
import sideList from '~/components/layout/sideList.vue'

export default {
  data() {
    return {
      type: 0,
      total: 0,
      page_size: 5,
      page: 1,
      articlelist: [],
      randomlist: [],
      keywords: ''
    }
  },
  components: {
    Hot,
    Link,
    Recom,
    Article,
    myCard,
    sideList
  },
  created() {
    this.keywords = this.$route.query.keywords
  },
  watch: {
    $route (to, from) {
      this.$router.go(0)
    }
  },
  methods: {
    change_data(key, data) {
      this[key] = data
    }
  },
  async asyncData(ctx) {
    const param = {
      page_size: 5,
      page: 1
    }
    if (ctx.route.query.keywords) {
      param.search_title = ctx.route.query.keywords
    }
    let datas = {}
    let { data } = await ctx.$axios.get('/api/article/get_article_list', 
    {
      params: param
    })
    if (data && data.code === 0) {
      datas.articlelist = data.data
      datas.total = data.total
    }

    // 获取最多评论排行
    let randomlist = await ctx.$axios.get(
      '/api/article/get_rank_list',
      {
        params: {
          page_size: 8, 
          type: 'random',
          order: -1
        }
      }
    ).catch(err => {
      datas.randomlist = []
    })
    if (randomlist && randomlist.data && randomlist.data.code === 0) {
      datas.randomlist = randomlist.data.data
    }
    return datas
  }
}
</script>

<style lang="scss">
.share_container {
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
