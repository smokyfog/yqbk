<template>
  <div class="container">
    <el-row id="container_main" :gutter="20">
      <el-col :span="18">
        <div class="container_left">
          <Article
            :page="page"
            :type="type"
            :total="total"
            :pagesize="page_size"
            :list="articlelist"
            @changedata="change_data"
          />
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
import Article from '~/components/notes/articleList.vue'
import Link from '~/components/index/friendlyLink.vue'
import Recom from '~/components/index/Recommended.vue'
import myCard from '~/components/index/myCard.vue'
import sideList from '~/components/index/sideList.vue'

export default {
  data() {
    return {
      type: 10,
      total: 0,
      page_size: 20,
      page: 1,
      articlelist: []
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
  methods: {
    change_data(key, data) {
      this[key] = data
    }
  },
  async asyncData(ctx) {
    const param = {
      page_size: 20,
      page: 1,
      type: 10,
    }
    let { data } = await ctx.$axios.get('/api/article/get_article_list', 
    {
      params: param
    })
    if (data && data.code === 0) {
      return {
        articlelist: data.data,
        total: data.total
      }
    }
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
