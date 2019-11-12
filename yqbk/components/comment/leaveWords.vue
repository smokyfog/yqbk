 <template>
  <div class="leave_worlds comment_content">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="comments_header_box">
          <span class="fa fa-user"></span>
          <span class="comments_title">留言板</span> 
        </span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div class="text comments_box_content">
        <commentTablet @submitinfo="submitComment"/>
        <div class="comments_area">
          <div class="comments_area_top">
            留言（{{ total }}）
          </div>
          <div class="comments_area_content">
            <div class="comments_index" v-for="(item, idx) in list" :key="item._id + Math.random()">
                <div class="portrait_box">
                  <img :src="item.userinfo.portrait" alt="">
                </div>
                <div class="text_box">
                  <div class="comments_index_item">
                    <div class="user_info_box">
                      <p class="user_name">{{ item.userinfo.nickname }}</p>
                      <p class="user_create_time">{{ item.create_time | formatTime }}</p>
                    </div>
                    <div class="user_comment_box">
                      <p class="user_comment_box" v-text="item.content"></p>
                    </div>
                  </div>
                  
                  <div class="reply_box">
                    <div 
                      class="comments_index comments_index_reply"
                      v-for="reply in item.replys"
                      :key="reply._id + Math.random()"
                    >
                      <div class="portrait_box">
                        <img :src="reply.portrait" alt="">
                      </div>
                      <div class="text_box">
                        <div class="user_info_box">
                          <p class="user_name">{{ reply.nickname }}</p>
                          <p class="user_create_time">{{ reply.create_time | formatTime }}</p>
                        </div>
                        <div class="user_comment_box">
                          <p class="user_comment_box" v-text="reply.content"></p>
                        </div>
                        <!-- <div class="reply_box">
                          
                        </div> -->
                      </div>
                    </div>
                    <div class="reply_oper_box">
                      <div class="" v-if="item.replys.length > 5">
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
                          <commentTablet @submitinfo="submitReply" :commentid="item._id"/>
                        </div>
                      </el-card>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div class="pagination_box">
            <el-pagination
              v-if="total > page_size"
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page"
              :page-sizes="[5, 10, 20, 30]"
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
import commentTablet from '../detail/commentTablet'
import comm from '~/static/comm.js'
export default {
  filters: {
    formatTime(val) {
      return val ? new Date(val).toLocaleString() : '未知'
    }
  },
  components:{
    commentTablet
  },
  data() {
    return {
      list: [],
      page_size: 20,
      page: 1,
      total: 900,
      currCommentShow: null
    }
  },
  computed: {
    comment_tablet_show(idx) {
      return this.tablet_show == idx
    }
  },
  created() {
    this.get_comments()
  },
  methods: {
    inputEmoji(txt) {
      this.comments_text += txt
      this.is_show_emoji = false
    },
    handleSizeChange(val) {
      this.page_size = val
      this.get_comments()
    },
    handleCurrentChange(val) {
      this.page = val
      this.get_comments()
    },
    // 改变恢复的输入
    changeCommentShow(idx) {
      if (this.currCommentShow == idx) {
        this.currCommentShow = null
      } else {
        this.currCommentShow = idx
      }
    },
    // 提交评论
    async submitComment(txt) {
      if (!txt) {
        this.$message.error('请输入消息内容')
      } else {
        const _id = this.$route.query.id
        const { data } = await this.$axios.post(
          comm.baseUrl + '/bk/leavemessage/comment', 
          { content: txt } 
        )
        if(data && data.code === 0) {
          this.$message({
            message: data.msg,
            type: 'success'
          })
          this.get_comments()
        } else {
          this.$message.error(data.msg)
        }
      }
    },
    // 回复
    async submitReply(txt, _id) {
      if (!txt) {
        this.$message.error('请输入消息内容')
      } else {
        const { data } = await this.$axios.post(
          comm.baseUrl + '/bk/leavemessage/reply', 
          { leavemessageId: _id, content: txt } 
        )
        if(data && data.code === 0) {
          this.$message({
            message: data.msg,
            type: 'success'
          })
          this.get_comments()
          this.currCommentShow = null
        } else {
          this.$message.error(data.msg)
        }
      }
    },
    // 获取评论
    async get_comments() {
      const { data } = await this.$axios.get(
        comm.baseUrl + '/bk/leavemessage/get_comments', 
         {
           params: {
            page: this.page,
            page_size: this.page_size
           }
        } 
      )
      if(data && data.code === 0) {
        this.total = data.total
        this.list = data.data
      } else {
        this.$message.error(data.msg)
      }
    }
  }
};
</script>
 
 <style lang="scss">
 .comment_content {
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
            padding: 15px 0;
            margin-left: 20px;
            padding-right: 0;
            min-height: 84px;
            border-bottom: 1px solid #eaeaea;
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
                display: flex;
                justify-content: space-between;
                .user_name {
                  font-weight: 700;
                }
                .user_create_time {
                  float: right;
                  margin-right: 10px;
                  color: #636363;
                  font-size: 14px;
                }
              }
            }
            .reply_box {
              margin-left: -24px;
              padding: 15px 0;
              padding-bottom: 0px;
              .comments_index_reply {
                // border-top: 1px solid #ddd;
                grid-template-columns: 9% 91%;
                border-bottom: none;
                margin-right: 0;
                .portrait_box {
                  margin-top: 3px;
                }
              }
              .reply_oper_box {
                display: flex;
                // border-top: 1px solid #ddd;
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
