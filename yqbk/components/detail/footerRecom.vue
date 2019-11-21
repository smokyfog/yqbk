 <template>
  <div id="footer_recom">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="recom_box">
          <span class="fa fa-bookmark"></span>
          <span class="recom_title">文章推荐</span> 
        </span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div class="text footer_recom_box">
        <div class="recom_img_box">
          <div class="recom_transition_box" v-for="item in list" :key="item._id + Math.random()">
            <nuxt-link :to="'/detail?id=' + item._id">
              <div class="img_box">
                <img :src="item.imageUrl" alt="">
              </div>
              <p class="titles">{{ item.info }}</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
 
 <script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      // list: [
      //   {
      //     title: '运算符的作用以及用法的笔记',
      //     desc: '什么是变量 变量就是储存数据的空间。 变量的规范命名： 1.字下美人其后数 2.不可以使用关键词 3.不可以重复定义 4.首字母小写，其后首字母大写，还要见名知意。 变量的步骤： 先声...',
      //     owner: '闫强',
      //     field: '技术 前端开发 js',
      //     create_time: '2019-10-16',
      //     viewed: 999,
      //     image: 'http://jxhx2.yangqq.com/skin/jxhx/images/4.jpg',
      //     url: 'https://github.com/smokyfog'
      //   },
      //   {
      //     title: 'dedecms图片集调用代码',
      //     desc: `重点要注意：dede:fieldname='imgurls'不能二次使用，如果二次使用会自动使用下面的样式，所以大家一定要注意这一点...`,
      //     owner: '闫强',
      //     field: '技术 前端开发 js',
      //     create_time: '2019-10-15',
      //     viewed: 666,
      //     image: 'http://www.zbboke.com/uploads/161221/1-16122115113S14.jpg',
      //     url: 'https://github.com/smokyfog'
      //   },
      //   {
      //     title: '用SVG画出拼图块，并实现拼图功能，请收下我的膝盖',
      //     desc: '什么是变量 变量就是储存数据的空间。 变量的规范命名： 1.字下美人其后数 2.不可以使用关键词 3.不可以重复定义 4.首字母小写，其后首字母大写，还要见名知意。 变量的步骤： 先声...',
      //     owner: '闫强',
      //     field: '技术 前端开发 js',
      //     create_time: '2019-10-14',
      //     viewed: 888,
      //     image: 'http://www.zbboke.com/uploads/allimg/180626/1-1P626192T9222-lp.png',
      //     url: 'https://github.com/smokyfog'
      //   },
      //   {
      //     title: '运算符的作用以及用法的笔记',
      //     desc: '什么是变量 变量就是储存数据的空间。 变量的规范命名： 1.字下美人其后数 2.不可以使用关键词 3.不可以重复定义 4.首字母小写，其后首字母大写，还要见名知意。 变量的步骤： 先声...',
      //     owner: '闫强',
      //     field: '技术 前端开发 js',
      //     create_time: '2019-10-16',
      //     viewed: 999,
      //     image: 'http://www.zbboke.com/uploads/170930/1-1F93009532O46.jpg',
      //     url: 'https://github.com/smokyfog'
      //   }
      // ]
    }
  }
};
</script>
 
 <style lang="scss">
 #footer_recom {
    .box-card {
      margin-bottom: 10px;
      .recom_box {
        display: flex;
        align-items: center;
        color: #636363;
        .fa-bookmark {
          margin-top: 2px;
          margin-left: 10px;
          font-size: 20px;
        }
        .recom_title {
          font-size: 16px;
          margin-left: 10px;
        }
      }
      .el-card__header {
        padding: 12px 8px;
        border-bottom: 0px;
        // background:#F7F7F7;
      }
      .el-card__body {
        padding: 0px 10px 10px 10px;
      }
      .recom_img_box {
        margin-top: 5px;
        height: 180px;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: 100%;
        .recom_transition_box {
          margin: 0 10px;
          cursor: pointer;
          .titles {
            padding: 3px;
            width: 100%;
            color: rgb(94, 94, 94);
            display: -webkit-box;
            -webkit-line-clamp:2;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
          }
          &:hover .titles {
            transition: all 0.1s;
            color: rgb(225, 87, 130);
            // transform: scale(1.1);
          }
        }
        .img_box {
          position: relative;
          height: 120px;
          border-radius: 5px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
          
        }
      }
      
   }
   .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    }
 }
</style>