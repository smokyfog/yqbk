 <template>
  <div id="friendlyLink">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>友情链接</span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div v-for="item in list" :key="item.url" class="text link_box">
        <a target="_blank" :href="item.url" class="links">
          <span>{{ item.title }}</span>  
        </a>
      </div>
    </el-card>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      list: [
        {
          title: '阮一峰个人网站',
          url: 'http://www.ruanyifeng.com/home.html'
        },
        {
          title: '廖雪峰个人网站',
          url: 'https://www.liaoxuefeng.com/'
        },
        {
          title: '段亮个人博客',
          url: 'https://www.duanliang920.com'
        },
        {
          title: '张兵个人博客',
          url: 'http://www.zbboke.com/'
        },
        {
          title: '文渊博客',
          url: 'https://www.wenyuanblog.com/'
        },
        {
          title: '耀华博客',
          url: 'https://www.yaohuanet.com/'
        },
        {
          title: '碧羽墨轩博客',
          url: 'https://www.biymx.com/'
        },
        {
          title: '余斗博客',
          url: 'https://www.yudouyudou.com/'
        }
      ]
    }
  }
};
</script>
 
 <style lang="scss">
 #friendlyLink {
    .box-card {
      margin-bottom: 10px;
      .el-card__header {
        padding: 12px 8px;
        // background:#F7F7F7;
      }
      .el-card__body {
        padding: 10px;
      }
      
      .link_box {
        display: inline-block;
        width: calc(50% - 10px);
        box-sizing: border-box;
        margin: 5px;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          font-size: 13px;
          span {
            display: inline-block;
            width: 100%;
            text-align: center;
            padding: 5px 10px;
            color: rgb(41, 41, 41);
            border: 1px solid #ccc;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          span:hover {
            border-color: #e15782;
            color:  #e15782
          }
        }
      }
   }
   .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    }
 }
</style>