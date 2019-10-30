 <template>
  <div id="leave-words">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="comments_header_box">
          <span class="fa fa-user"></span>
          <span class="comments_title">留言板</span> 
        </span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div class="text comments_box_content">
        <commentTablet />
        <div class="comments_area">
          <div class="comments_area_top">
            评论（13）
          </div>
          <div class="comments_area_content">
            <div class="comments_index" v-for="(item, idx) in 5" :key="item + Math.random()">
                <div class="portrait_box">
                  <img src="http://sucimg.itc.cn/avatarimg/885662195_1506337866663_c55" alt="">
                </div>
                <div class="text_box">
                  <div class="comments_index_item">
                    <div class="user_info_box">
                      <p class="user_name">榭下一袭正觞 </p>
                    </div>
                    <div class="user_comment_box">
                      <p class="user_comment_box">
                        之前那个网站已经关闭了，现在这个域名只是作为工作使用的。
                        前端随便写的是个全屏背景。但是有人我的主页一直按F5给我服务器增加负担，
                        服务器只是一台很垃圾的台式电脑，我发出来只是作为技术交流的。希望手下留情
                      </p>
                    </div>
                  </div>
                  
                  <div class="reply_box">
                    <div class="comments_index comments_index_reply">
                      <div class="portrait_box">
                        <img src="http://cy-pic.kuaizhan.com/c_zoom,w_200/fac494264beff70ed91fedf32783552b_default_1449556072985_jpg?sign=7f4b223401b5caef54dcc2b71b741bc0&t=1571934148" alt="">
                      </div>
                      <div class="text_box">
                        <div class="user_info_box">
                          <p class="user_name">榭下一袭正觞 </p>
                        </div>
                        <div class="user_comment_box">
                          <p class="user_comment_box">
                            之前那个网站已经关闭了，现在这个域名只是作为工作使用的。
                            前端随便写的是个全屏背景。但是有人我的主页一直按F5给我服务器增加负担，
                            服务器只是一台很垃圾的台式电脑，我发出来只是作为技术交流的。希望手下留情
                          </p>
                        </div>
                        <!-- <div class="reply_box">
                          
                        </div> -->
                      </div>
                    </div>
                    <div class="comments_index comments_index_reply">
                      <div class="portrait_box">
                        <img src="http://cy-pic.kuaizhan.com/c_zoom,w_200/fac494264beff70ed91fedf32783552b_default_1449555774840_jpg?sign=ebc88a0aff7c03b93b1eab2cafa745cd&t=1571934189" alt="">
                      </div>
                      <div class="text_box">
                        <div class="user_info_box">
                          <p class="user_name">榭下一袭正觞 </p>
                        </div>
                        <div class="user_comment_box">
                          <p class="user_comment_box">
                            之前那个网站已经关闭了，现在这个域名只是作为工作使用的。
                            前端随便写的是个全屏背景。但是有人我的主页一直按F5给我服务器增加负担，
                            服务器只是一台很垃圾的台式电脑，我发出来只是作为技术交流的。希望手下留情
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="reply_oper_box">
                      <div class="">
                        <span class="fa fa-list-ul"></span>
                        查看全部
                      </div>
                      <div class="" @click="changeCommentShow(idx)">
                        <span class="fa fa-share"></span>
                        {{ idx == currCommentShow ? 
                            '收起回复' : 
                            '回复'
                         }}
                      </div>
                    </div>
                    <div class="reply_tablet_box" v-show="idx == currCommentShow">
                      <el-card class="box-card">
                        <div slot="header" class="clearfix">
                          <span>回复</span>
                        </div>
                        <div class="text item">
                          <commentTablet  />
                        </div>
                      </el-card>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div class="pagination_box">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page"
              :page-sizes="[5, 10, 100, 200, 300, 400]"
              :page-size="page_size"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
 
 <script>
 import commentTablet from './commentTablet'
export default {
  components:{
    commentTablet
  },
  data() {
    return {
      list: [],
      page_size: 5,
      page: 4,
      total: 900,
      currCommentShow: null
    }
  },
  computed: {
    comment_tablet_show(idx) {
      return this.tablet_show == idx
    }
  },
  methods: {
    inputEmoji(txt) {
      this.comments_text += txt
      this.is_show_emoji = false
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 改变恢复的输入
    changeCommentShow(idx) {
      if (this.currCommentShow == idx) {
        this.currCommentShow = null
      } else {
        this.currCommentShow = idx
      }
      
    }
  }
};
</script>
 
 <style lang="scss">
 #leave-words {
    .box-card {
      margin-bottom: 10px;
      .comments_header_box {
        display: flex;
        align-items: center;
        color: #636363;
        .fa-user {
          margin-left: 10px;
          font-size: 20px;
        }
        .comments_title {
          font-size: 16px;
          margin-left: 10px;
        }
      }
      .el-card__header {
        padding: 12px 8px;
        border-bottom: 0px;
      }
      .el-card__body {
        padding: 0px 10px 10px 10px;
      }
      .comments_box_content {
        .comments_area {
          padding: 16px;
          .comments_area_top {
            font-size: 18px;
            padding: 8px 0;
            border-bottom: 1px solid #ddd
          }
          .comments_area_content {
            padding: 10px 0;
          }
          .comments_index {
            padding: 15px;
            min-height: 110px;
            border-bottom: 1px solid #ddd;
            display: grid;
            grid-template-columns: 8% 92%;
            grid-template-rows: 100%;
            .comments_index_item {
              padding: 10px 0;
            }
            .portrait_box {
              height: 50px;
              width: 50px;
              margin-top: 15px;
              border-radius: 50%;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .text_box {
              .user_info_box {
                padding: 2px 0;
                .user_name {
                  font-weight: 700;
                }
              }
            }
            .reply_box {
              padding: 10px 0;
              .comments_index_reply {
                border-top: 1px solid #ddd;
                grid-template-columns: 9% 91%;
                border-bottom: none;
                .portrait_box {
                  margin-top: 3px;
                }
              }
              .reply_oper_box {
                display: flex;
                border-top: 1px solid #ddd;
                
                div {
                  cursor: pointer;
                  font-size: 12px;
                  margin: 16px 10px 0 10px;
                  -webkit-appearance: none;
                  border: none;
                  overflow: visible;
                  font: inherit;
                  color: #444444;
                  text-transform: none;
                  display: inline-block;
                  box-sizing: border-box;
                  padding: 0 12px;
                  background: #f5f5f5;
                  vertical-align: middle;
                  line-height: 24px;
                  min-height: 24px;
                  text-decoration: none;
                  text-align: center;
                  border: 1px solid rgba(0, 0, 0, 0.06);
                  border-radius: 4px;
                  text-shadow: 0 1px 0 #ffffff;
                } 
                div:hover, div:focus {
                  transition: all 0.5s;
                  background-color: #fafafa;
                  color: #444444;
                  outline: none;
                  text-decoration: none;
                  border-color: rgba(0, 0, 0, 0.16);
                }
              }
              .reply_tablet_box {
                padding-top: 20px;
                transition:  all 0.6s;
                .el-card__header {
                  span {
                    font-size: 16px;
                    padding: 0 20px;
                  }
                }
              } 
            }
          }
          .pagination_box {
            .el-pagination {
              display: flex;
              justify-content: center
            }
          }
          
        }
      }
   }
   .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    }
    
 }
 .emoji_select {
    .emoji_item {
      cursor: pointer;
      font-size: 20px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 37px;
      height: 37px;
    }
  }
</style>