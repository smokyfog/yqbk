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
            <span>{{ data.owner }}</span>
          </span>
          <span>
            <i class="fa fa-mortar-board"></i>
            <span>{{ data.field }}</span>
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
        <div class="detail_box" style="padding: 15px 30px">
          <div v-html="detail.content" />
        </div>
        <div class="detail_related">
          <div class="article_oper_box clearfix">
            <div class="praise">
              顶一下（1）
            </div>
            <div class="admire">
              赏
            </div>
            <div class="belittling">
              踩一下（1）
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
export default {
  props: {
    detail: {
      type: Object,
      default: {}
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
        title: '运算符的作用以及用法的笔记',
        owner: '闫强',
        field: '技术 前端开发 js',
        create_time: '2019-10-16',
        viewed: 999,
        image: 'http://www.zbboke.com/uploads/170930/1-1F93009532O46.jpg',
        url: 'https://github.com/smokyfog'
      }
    };
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
        text-align: center;
      }
      .article_infos {
        margin-top: 15px;
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
      }
      .detail_related {
        .article_oper_box {
          height: 50px;
          margin-bottom: 20px;
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
          }
          .belittling {
            left: 450px;
            position: absolute;
            background: #37ccca none repeat scroll 0 0;
            height: 35px;
            width: 135px;
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