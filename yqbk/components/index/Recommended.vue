 <template>
  <div id="recommended">
    <div class="clearfix header">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane class="rank_content" label="最热排行" name="first">
          <Ranking />
        </el-tab-pane>
        <el-tab-pane class="rank_content" label="最新排行" name="second">
          <Ranking />
        </el-tab-pane>
        <el-tab-pane class="rank_content" label="最多评论" name="third">
          <Ranking />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
 
 <script>
import Ranking from "./ranking.vue"

export default {
  data() {
    return {
      activeName: 'first'
    }
  },
  components: {
    Ranking
  },
  methods: {
    handleClick() {
      
    }
  }
};
</script>
 
 <style lang="scss">
 #recommended {
   .header {
      border: 1px solid #EBEEF5;
      background-color: #FFF;
      color: #303133;
      transition: .3s;
     .el-tabs__nav-wrap {
      padding: 0 8px;
      background: #F7F7F7;
      // border-bottom: 1px solid #EBEEF5;
      box-sizing: border-box;
     }
     .el-tabs__content {
       height: 280px;
     }
     .el-tabs__nav-wrap::after {
      height: 0px
    }
    .rank_content {
      height: 100%;
    }
   }
   .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    }
 }
</style>