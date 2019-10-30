<template>
  <div class="comment_tablet">
    <el-input
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 6}"
      placeholder="请输入内容"
      v-model="comments_text">
    </el-input>
    <el-popover
      v-model="is_show_emoji"
      ref="emojipopover"
      placement="right"
      width="400"
      trigger="click">
      <div class="emoji_select">
        <div 
          v-for="item in emoji_list" 
          :key="item + Math.random()" 
          class="emoji_item"
          @click="inputEmoji(item)"
        >
          {{ item }}
        </div>
      </div>
    </el-popover>
    <div class="comments_oper">
      <div
        v-popover:emojipopover
        class="comments_icon" 
        title="表情">
        <span class="emoji_box">😃</span>
        <span class="emoji_title">表情</span>
      </div>
      <div class="comments_publish">
        <el-button 
          type="primary" 
          size="small" 
          icon=""
        >提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments_text: '',
      is_show_emoji: false,
      emoji_list :['😃', '😅', '😆', '🤣', '😂', '🙂', '😉', '😊', '🥰',
       '😍', '😚', '🤪','🤪', '😐', '😒', '🙄', '😴', '😡', '😤', '😖', 
       '😭', '😢', '😧', '🥺', '😳', '💀', '👀', '💍', '💼', '💄']
    }
  },
  methods: {
    inputEmoji(txt) {
      this.comments_text += txt
      this.is_show_emoji = false
    },
  }
}
</script>

<style lang="scss">
  .comment_tablet {
      padding: 5px 10px 5px 10px;
      .comments_oper {
        padding: 10px 2px;
        display: flex;
        justify-content: space-between;
        .comments_icon {
          cursor: pointer;
          margin-left: 3px;
          span {
            float: left;
          }
          .emoji_box {
            font-size: 21px;
          }
          .emoji_title {
            line-height: 31px;;
            height: 31px;
            color: #1b1212;
            font-size: 16px;
            padding-left: 4px;
          }
          // width: 200px;
        }
        .comments_publish {
          display: flex;
          justify-content: flex-end;
          // width: 200px;
        }
      }
    }
</style>