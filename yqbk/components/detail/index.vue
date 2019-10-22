 <template>
  <div id="article_detail">
    <el-card class="box-card">
      <div slot="header" class="clearfix article_header">
        <div class="article_title">
          中秋节，做SEO的朋友不要光顾着玩
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
            <span>{{ data.viewed }}次浏览</span>
          </span>
          <span>
            <i class="fa fa-calendar-o"></i>
            <span>{{ data.create_time }}</span>
          </span>
        </div>
      </div>
      <div class="item_box">
        <div class="detail_box">

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
          <div class="">
            
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
 
 <script>
export default {
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
        min-height: 1000px;
      }
      .detail_related {
        .article_oper_box {
          height: 50px;
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
    }
  }
  .el-card.is-always-shadow,
  .el-card.is-hover-shadow:focus,
  .el-card.is-hover-shadow:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
}
</style>