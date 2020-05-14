 <template>
  <div id="side_list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>评论排行</span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div class="text side_content">
        <nuxt-link 
          :to="`/detail?id=${comments[0] && comments[0]._id}`">
          <div class="img_box">
            <img :src="comments[0] ? comments[0].imageUrl: ''" alt="">
            <p class="titles">{{ comments[0] && comments[0].title }}</p>
          </div>
        </nuxt-link>
        <ul class="article_list clear_fix" >
          <li
            v-show="idx!==0"
            v-for="(item, idx) in comments" 
            :key="item._id + Math.random()"
          >
            <nuxt-link :to="'/detail?id=' + item._id" class="side_li">
              <aside >
                <div>
                  <img :src="item.imageUrl" alt="">
                </div>
              </aside>
              <article>
                <p :title="item.info">{{ item.info }}</p>
              </article>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>
 
 <script>
export default {
  props: {
    comments: {
      type: Array,
      default: [
        {
          _id: '',
          imageUrl: '',
          title: ''
        }
      ]
    }
  },
  data() {
    return {
    }
  }
};
</script>
 
 <style lang="scss">
 #side_list {
    .box-card {
      margin-bottom: 10px;
      .el-card__header {
        padding: 12px 8px;
        // background:#F7F7F7;
      }
      .el-card__body {
        padding: 10px;
      }
      .side_content {
        min-height: 200px;
        padding: 10px;
        .img_box {
          position: relative;
          height: 120px;
          border-radius: 5px;
          overflow: hidden;
          .titles {
            position: absolute;
            color: #fff;
            width: 220px;
            text-align: center;
            top: 50%;
            left: 50%;
            height: 30px;
            line-height: 30px;
            background: #00000061;
            transform: translate(-50%, -50%)
          }
          img {
            width: 100%;
            height: 100%;
            opacity: 0.7;
          }
          &:hover img {
            transition: all 0.5s;
            opacity: .9;
            transform: scale(1.1);
          }
        }
        .article_list {
          .side_li {
            height: 82px;
            display: grid;
            grid-template-columns: 35% 65%;
            grid-template-rows: 100%;
            aside {
              display: flex;
              justify-content: center;
              align-items: center;
              div {
                height: 70%;
                border-radius: 5px;
                overflow: hidden;
              }
              img {
                height: 100%;
                width: 100%;
              }
            }
            article{
              padding: 8% 0;
              font-size: 13px;
              margin-left: 8px;
              color: rgb(95, 95, 95);
              overflow: hidden;
              p {
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                line-clamp: 3;
                -webkit-box-orient: vertical;
              }
            }
          }
        }
        
      }
   }
   .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    }
 }
</style>