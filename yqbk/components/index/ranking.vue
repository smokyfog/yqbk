<template>
  <div class="rankings_box">
    <div class="rank_left">
      <div
        class="img_box"
        @click="goToLink('/detail?id=' + list[0]._id)">
        <img :src="list[0]? list[0].imageUrl: null">
        <p class="titles">{{ list[0] && list[0].title | cur_txt }}</p>
      </div>
      <div 
        class="img_box"
        @click="goToLink('/detail?id=' + list[1]._id)">
        <img :src="list[1]? list[1].imageUrl: null">
        <p class="titles">{{ list[1] && list[1].title | cur_txt }}</p>
      </div>
    </div>
    <div class="rank_right">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item 
          v-for="(item, idx) in list" 
          :key="item._id + new Date().getTime()" 
          :name="idx + 1"
          >
          <template slot="title" >
            <div 
              class="rank_title"
              @click="goToLink('/detail?id=' + item._id)"
              @mouseenter="changeactive(idx + 1)"
              >
                <span class="rank_idx">{{idx + 1}}</span>
                {{ item.title }}
              </div> 
          </template>
          <div 
            @click="changeactive(idx + 1)" 
            class="desc_box" 
            :title="item.info"
          >{{ item.info }}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
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
  filters: {
    cur_txt(val) {
      if (Array.isArray(val)) {
        return ''
      }
      if (Array.isArray(val) && val.length > 15) {
        return val.slice(0, 15) + '...'
      } else {
        return val
      }
    }
  },
  data() {
    return {
      activeName: 1,
      rankingList: [
        {
          id: 1,
          title: '一致性 Consistency',
          url: 'https://github.com/smokyfog',
          desc: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
        },
        {
          id: 2,
          title: '反馈 Feedback',
          url: 'https://github.com/smokyfog',
          desc: '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。'
        },
        {
          id: 3,
          title: '效率 Efficiency',
          url: 'https://github.com/smokyfog',
          desc: '简化流程：设计简洁直观的操作流程；清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策'
        },
        {
          id: 4,
          title: '可控 Controllability',
          url: 'https://github.com/smokyfog',
          desc: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
        },
        {
          id: 5,
          title: '一致性 Consistency',
          url: 'https://github.com/smokyfog',
          desc: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
        },
      ]
    }
  },
  methods: {
    // 改变选中地
    changeactive(name) {
      this.activeName = name
    },
    // 链接跳转
    goToLink(url) {
      this.$router.push({ path: url })
    }
  }
}
</script>

<style lang="scss">
.rankings_box {
  height: 100%;
  display: flex;
  & > div {
    height: 100%;
  }
  .rank_left {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
    // grid-row-gap: 20px;
    // grid-column-gap: 20px;
    justify-items: center;
    align-items: center;
    width: 30%;
    // .img_box {
    //   height: calc(100% - 20px) ;
    //   padding: 10px 15px;
    //   img {
    //     text-align: center;
    //     width: 100%;
    //     height: 100%;
    //   }
    // }
    .img_box {
      position: relative;
      height: calc(100% - 20px) ;
      margin: 10px 15px;
      border-radius: 5px;
      overflow: hidden;
      cursor: pointer;
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
        opacity: 0.88;
      }
      &:hover img {
        transition: all 0.5s;
        opacity: .9;
        transform: scale(1.1);
      }
    }
  }
  .rank_right {
    width: calc(70% - 20px) ;
    height: calc(100% - 20px);
    padding: 10px;
    .rank_title {
      width: 100%;
      font-size: 13px;
      font-weight: 700;
      display: flex;
      align-items: center;
    }
    .rank_idx {
      color: #fff;
      background: #ccc;
      display: inline-block;
      line-height: 23px;
      height: 23px;
      width: 20px;
      margin-right: 20px;
      margin-left: 20px;
      text-align: center;
    }
    .el-collapse {
      border-top: 0;
    }
    .el-collapse-item__header {
      height: 40px;
      border-bottom: 0;
    }
    .el-collapse-item__content {
      padding-bottom: 10px;
    }
    .el-collapse-item.is-active {
      .rank_idx {
        background: rgb(94, 94, 94);
      }
      background: #f7f7f7;
      .el-collapse-item__header {
        background: #f7f7f7;
      }
      .el-collapse-item__wrap {
        background: #f7f7f7;
      }
    }
    .desc_box {
      margin-left: 20px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>