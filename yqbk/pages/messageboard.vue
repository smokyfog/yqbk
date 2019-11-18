<template>
  <div class="detail">
    <el-row id="container_main" :gutter="20">
      <el-col :span="18">
        <div class="container_left">
          <leave-words />
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
import Link from '~/components/index/friendlyLink.vue'
import sideList from '~/components/layout/sideList.vue'
import leaveWords from '~/components/comment/leaveWords.vue'
export default {
  data() {
    return {
      randomlist: []
    }
  },
  components: {
    Link,
    sideList,
    leaveWords
  },
  async asyncData(ctx) {
    let datas = {}
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