


 <template>
  <div id="blog">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>关于我的博客</span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div class="item_box">
        <div class="portrait_box">
          <div class="portrait">
            <el-image 
              style="width: 250px; height: 350px"
              :src="url" 
              :preview-src-list="[ url ]">
            </el-image>
          </div>
        </div>
        <div id="me_info_box">
          <h4>
            前端部分
          </h4>
          <p>
            使用基于vue的框架 <a href="https://zh.nuxtjs.org">nuxt.js</a>，
          </p>
          <p>
            使用<a href="http://nodejs.cn/">element-ui</a>和
            <a href="https://koa.bootcss.com/">view ui</a> 
            作为视图层框架
          </p>
          <p>
            使用<a href="http://nodejs.cn/"> nodejs </a>的
            <a href="https://koa.bootcss.com/"> koa2 </a> 
            框架作为服务端渲染的中间层框架
          </p>
          <p>

          </p>
          <h4>
            服务端部分
          </h4>
          <p>
            使用基于<a href="http://nodejs.cn/"> nodejs </a>的
            <a href="https://koa.bootcss.com/"> koa2 </a> 
            框架作为服务端的框架
          </p>
          <p>使用 mongodb， redis 主要作为数据仓库</p>
        </div>
      </div>
    </el-card>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      url: '/img/scenery .jpeg'
    };
  }
};
</script>
 
 <style lang="scss">
#blog {
  .item_box {
    min-height: 425px;
    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: 100%;
    .portrait_box {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #me_info_box {
      color: rgb(83, 83, 83);
      padding: 20px 20px 20px 20px;
      font-size: 16px;
      line-height: 38px;
      min-height: 425px;
      p {
        a {
          color: rgb(100, 100, 100);
        }
      }
      h4 {
        padding-top: 30px;
      }
    }
  }
  .el-card.is-always-shadow,
  .el-card.is-hover-shadow:focus,
  .el-card.is-hover-shadow:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
}
</style>