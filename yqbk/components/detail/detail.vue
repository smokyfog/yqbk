 <template>
  <div id="article_detail">
    <el-card class="box-card">
      <div slot="header" class="clearfix article_header">
        <div class="article_title">
          {{ detail.title }}
        </div>
        <div class="article_infos">
          <span>
            <i class="fa fa-user"></i>
            <span>{{ detail.owner }}</span>
          </span>
          <span>
            <i class="fa fa-mortar-board"></i>
            <span>{{ detail.field || '未分类' }}</span>
          </span>
          <span>
            <i class="fa fa-eye"></i>
            <span>{{ detail.browseCount }}次浏览</span>
          </span>
          <span>
            <i class="fa fa-calendar-o"></i>
            <span>{{ detail.create_time | formatTime }}</span>
          </span>
        </div>
      </div>
      <div class="item_box">
        <div class="detail_box">
          <div v-html="detail.content" />
        </div>
        <div class="detail_related">
          <div class="article_oper_box clearfix">
            <div
              class="praise"
              :class="{ 'active': islike }"
              @click="likeArticle"
            >
              顶一下（{{ detail.likeCount }}）
            </div>
            <div 
              class="admire"
              @mouseover="is_show_admire = true"
              @mouseout="is_show_admire = false"
            >
              赏
              <div class="pay_img_box" v-show="is_show_admire">
                <p>谢谢您的支持！</p>
                <p>您的鼓励是我前行的动力！</p>
                <div class="img_box">
                  <img src="/img/zfb.jpeg" alt="">
                  <img src="/img/wx.jpeg" alt="">
                </div>
              </div>
            </div>
            <div class="belittling"
              :class="{ 'active': isdislike }"
              @click="dislikeArticle"
            >
              踩一下（{{ detail.dislikeCount }}）
            </div>
          </div>
          <div class="detail_footer">
            <span 
              class="prev_article fa fa-angle-double-left"
              title="上一篇"
            ></span>
            <p class="prev_title"> Python爬虫实战四之抓取淘宝MM照片</p>
            <span
              class="next_article fa fa-angle-double-right" 
              title="下一篇"
            ></span>
            <p class="next_title"> Python爬虫实战四之抓取淘宝MM照片WordPress解决修改style.css不生效问题三步走！</p>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
 
 <script>
 import comm from '~/static/comm.js'
export default {
  props: {
    detail: {
      type: Object,
      default: {},
    }
  },
  filters: {
    formatTime(val) {
      return val ? new Date(val).toLocaleString() : '未知'
    }
  },
  data() {
    return {
      data : {
        title: '',
        owner: '',
        field: '',
        create_time: '',
        viewed: 0,
        image: '',
        url: '',
      },
      islike: false,
      isdislike: false,
      is_show_admire: false
    };
  },
  mounted() {
    this.get_eval_article_status()
  },
  methods: {
    likeArticle() {
      if (this.islike || this.isdislike) {
        this.$message({
          message: '您已经评价过了哦',
          type: 'warning'
        })
      } else {
        this.eval_article('like')
      }
    },
    dislikeArticle() {
      if (this.islike || this.isdislike) {
        this.$message({
          message: '您已经评价过了哦',
          type: 'warning'
        })
      } else {
        this.eval_article('dislike')
      }
    },
    async get_eval_article_status() {
      const articleId = this.$route.query.id
      const { data } = await this.$axios.get(
        comm.baseUrl + '/bk/article/get_eval_article_status', 
         {
           params: {
             articleId
           }
        } 
      )
      if (data && data.code === 0) {
        this.islike = data.data.like
        this.isdislike = data.data.dislike
      }
    },
    async eval_article(type = 'like') {
      const articleId = this.$route.query.id
      const { data } = await this.$axios.post(
        comm.baseUrl + '/bk/article/eval_article', 
         {
            articleId,
            type
        } 
      )
      if (data && data.code === 0) {
        if (type == 'like') {
          this.detail.likeCount += 1
        }
        if (type == 'dislike') {
          this.detail.dislikeCount += 1
        }
        this.$message({
          message: '评价成功！',
          type: 'success'
        })
      } else {
        this.$message({
          message: data.msg,
          type: 'warning'
        })
      }
    }
  }
};
</script>
 
 <style lang="scss">
#article_detail {
  .box-card {
    margin-bottom: 10px;
    .el-card__header {
      padding: 10px;
    }
    .el-card__body {
      padding: 0;
    }
    .article_header {
      .article_title {
        color: #5a5a5a;
        font-size: 24px;
        padding: 10px 0;
        text-align: center;
      }
      .article_infos {
        margin-top: 5px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        & > span {
          color: rgb(131, 131, 131);
          display: inline-block;
          padding-right: 25px;
          font-size: 14px;
          span {
            margin-left: 3px;
          }
        }
      }
    }
    .item_box {
      .detail_box {
        min-height: 200px;
        padding: 30px;
        img {
          text-align: center;
          max-width: 100%;
        }
      }
      .detail_related {
        .article_oper_box {
          height: 50px;
          margin-bottom: 20px;
          margin-top: 20px;
          position: relative;
          div:hover{
            background: #969696;
            transition: all 0.6s;
          }
          div {
            text-align: center;
            line-height: 35px;
            color: #fff;
          }
          .praise {
            position: absolute;
            left: 310px;
            background: #e15782 none;
            height: 35px;
            width: 135px;
            cursor: pointer;
          }
          .belittling {
            left: 450px;
            position: absolute;
            background: #37ccca none repeat scroll 0 0;
            height: 35px;
            width: 135px;
            cursor: pointer;
          }
          .admire {
            position: absolute;
            z-index: 10;
            top: -8px;
            left: 418px;
            background: #5ea51b none repeat scroll 0 0;
            border: 4px solid #fff;
            border-radius: 40px;
            font-size: 18px;
            font-weight: 600;
            height: 50px;
            text-align: center;
            // left: 115px;
            line-height: 40px;
            // position: absolute;
            // top: -7px;
            width: 50px;
            .pay_img_box {
              font-family: cursive;
              position: absolute;
              bottom: 60px;
              left: -200px;
              width: 500px;
              height: 320px;
              padding: 20px;
              color: #dc203b;
              background: #fff;
              transition: all 0.6s;
              box-shadow: -1px 1px 16px 3px rgba(0, 0, 0, 0.1);
              .img_box {
                margin-top: 20px;
                background: #fff;
                max-width: 100%;
                max-height: 100%;
                display: flex;
                justify-content: space-around;
                img {
                  width: 40%;
                }
              }
            }
          }
          .active {
            background: #969696
          }
        }
      }
      .detail_footer {
        position: relative;
        height: 50px;
        background-color: #fbfbfb;
        overflow: hidden;
        padding: 15px 20px;
        font-size: 15px;
        color: #bbb;
        border-top: 1px solid #f2f2f2;
        & > span {
          position: absolute;
          font-size: 20px;
          cursor: pointer;
        }
        & > p {
          cursor: pointer;
          position: absolute;
          width: 300px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .prev_article {
          left: 20px;
        }
        .prev_title {
          left: 40px;
        }
        .next_article {
          right: 20px;
        }
        .next_title {
          right: 40px;
        }
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