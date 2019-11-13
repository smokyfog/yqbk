 <template>
  <div id="article_lists">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>文章推荐</span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div class="item_box">
        <div v-for="item in article"  :key="item._id + new Date().getTime()" >
          <nuxt-link :to="'/detail?id=' + item._id" class="article_box" >
            <div class="article_img_box">
              <img :src="item.imageUrl" :alt="item.imageUrl">
            </div>
            <div class="article_info_box">
              <h3 class="articl_title">{{ item.title }}</h3>
              <p class="articl_desc">
                {{ item.info }}
              </p>
              <div class="article_infos">
                <span>
                  <i class="fa fa-user"></i>
                  <span>{{ item.userinfo.nickname }}</span>
                </span>
                <span>
                  <i class="fa fa-mortar-board"></i>
                  <span>{{ '未分类' }}</span>
                </span>
                <span>
                  <i class="fa fa-eye"></i>
                  <span>{{ item.browseCount }}次浏览</span>
                </span>
                <span>
                  <i class="fa fa-calendar-o"></i>
                  <span>{{ item.create_time | formatDate }}</span>
                </span>
              </div>
            </div>
          </nuxt-link>
        </div>
        
      </div>
    </el-card>
  </div>
</template>
 
 <script>
export default {
  filters: {
    formatDate(val) {
      try {
        return val ? new Date(val).toLocaleString() : '未知'
      } catch (err) {  
        return val
      }
    }
  },
  props: {
    article: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      article_list: [
        {
          title: '运算符的作用以及用法的笔记',
          desc: '什么是变量 变量就是储存数据的空间。 变量的规范命名： 1.字下美人其后数 2.不可以使用关键词 3.不可以重复定义 4.首字母小写，其后首字母大写，还要见名知意。 变量的步骤： 先声...',
          owner: '闫强',
          field: '技术 前端开发 js',
          create_time: '2019-10-16',
          viewed: 999,
          image: 'http://www.zbboke.com/uploads/170930/1-1F93009532O46.jpg',
          url: 'https://github.com/smokyfog'
        },
        {
          title: 'dedecms图片集调用代码',
          desc: `重点要注意：dede:fieldname='imgurls'不能二次使用，如果二次使用会自动使用下面的样式，所以大家一定要注意这一点...`,
          owner: '闫强',
          field: '技术 前端开发 js',
          create_time: '2019-10-15',
          viewed: 666,
          image: 'http://www.zbboke.com/uploads/161221/1-16122115113S14.jpg',
          url: 'https://github.com/smokyfog'
        },
        {
          title: '用SVG画出拼图块，并实现拼图功能，请收下我的膝盖',
          desc: '什么是变量 变量就是储存数据的空间。 变量的规范命名： 1.字下美人其后数 2.不可以使用关键词 3.不可以重复定义 4.首字母小写，其后首字母大写，还要见名知意。 变量的步骤： 先声...',
          owner: '闫强',
          field: '技术 前端开发 js',
          create_time: '2019-10-14',
          viewed: 888,
          image: 'http://www.zbboke.com/uploads/allimg/180626/1-1P626192T9222-lp.png',
          url: 'https://github.com/smokyfog'
        },
        {
          title: '运算符的作用以及用法的笔记',
          desc: '什么是变量 变量就是储存数据的空间。 变量的规范命名： 1.字下美人其后数 2.不可以使用关键词 3.不可以重复定义 4.首字母小写，其后首字母大写，还要见名知意。 变量的步骤： 先声...',
          owner: '闫强',
          field: '技术 前端开发 js',
          create_time: '2019-10-6',
          viewed: 999,
          image: 'http://www.zbboke.com/uploads/170930/1-1F93009532O46.jpg',
          url: 'https://github.com/smokyfog'
        },
        {
          title: 'dedecms图片集调用代码',
          desc: `重点要注意：dede:fieldname='imgurls'不能二次使用，如果二次使用会自动使用下面的样式，所以大家一定要注意这一点...`,
          owner: '闫强',
          field: '技术 前端开发 js',
          create_time: '2019-10-5',
          viewed: 999,
          image: 'http://www.zbboke.com/uploads/161221/1-16122115113S14.jpg',
          url: 'https://github.com/smokyfog'
        },
        {
          title: '用SVG画出拼图块，并实现拼图功能，请收下我的膝盖',
          desc: '什么是变量 变量就是储存数据的空间。 变量的规范命名： 1.字下美人其后数 2.不可以使用关键词 3.不可以重复定义 4.首字母小写，其后首字母大写，还要见名知意。 变量的步骤： 先声...',
          owner: '闫强',
          field: '技术 前端开发 js',
          create_time: '2019-10-4',
          viewed: 999,
          image: 'http://www.zbboke.com/uploads/allimg/180626/1-1P626192T9222-lp.png',
          url: 'https://github.com/smokyfog'
        },
        {
          title: '运算符的作用以及用法的笔记',
          desc: '什么是变量 变量就是储存数据的空间。 变量的规范命名： 1.字下美人其后数 2.不可以使用关键词 3.不可以重复定义 4.首字母小写，其后首字母大写，还要见名知意。 变量的步骤： 先声...',
          owner: '闫强',
          field: '技术 前端开发 js',
          create_time: '2019-10-26',
          viewed: 999,
          image: 'http://www.zbboke.com/uploads/170930/1-1F93009532O46.jpg',
          url: 'https://github.com/smokyfog'
        },
        {
          title: 'dedecms图片集调用代码',
          desc: `重点要注意：dede:fieldname='imgurls'不能二次使用，如果二次使用会自动使用下面的样式，所以大家一定要注意这一点...`,
          owner: '闫强',
          field: '技术 前端开发 js',
          create_time: '2019-10-25',
          viewed: 999,
          image: 'http://www.zbboke.com/uploads/161221/1-16122115113S14.jpg',
          url: 'https://github.com/smokyfog'
        },
        {
          title: '用SVG画出拼图块，并实现拼图功能，请收下我的膝盖',
          desc: '什么是变量 变量就是储存数据的空间。 变量的规范命名： 1.字下美人其后数 2.不可以使用关键词 3.不可以重复定义 4.首字母小写，其后首字母大写，还要见名知意。 变量的步骤： 先声...',
          owner: '闫强',
          field: '技术 前端开发 js',
          create_time: '2019-10-24',
          viewed: 999,
          image: 'http://www.zbboke.com/uploads/allimg/180626/1-1P626192T9222-lp.png',
          url: 'https://github.com/smokyfog'
        },
      ]
    }
  }
};
</script>
 
 <style lang="scss">
 #article_lists {
    .box-card {
      margin-bottom: 10px;
      .el-card__header {
        padding: 8px;
        // background:#F7F7F7;
      }
      .el-card__body {
        padding: 0;
      }
      .item_box {
        min-height: 300px;
        .article_box:hover {
          transition: all 0.5s;
          background-color: #f7f7f7;
        }
        .article_box:hover img{
          transition: all 0.9s;
          opacity: .9;
          transform: scale(1.1);
        }
        .article_box {
          padding: 12px 0;
          height: 180px;
          display: grid;
          grid-template-columns: 30% 70%;
          grid-template-rows: 100%;
          border-bottom: 1px solid #efefef;
          .article_img_box {
            position: relative;
            margin: 20px;
            overflow: hidden;
            border-radius: 6px;
            img {
              width: 100%;
              height: 100%;
              opacity: 0.9;
            }
            // &:hover img {
            //   transition: all 0.5s;
            //   opacity: .9;
            //   transform: scale(1.1);
            // }
          }
          .article_info_box {
            padding: 20px 0;
            position: relative;
            .articl_title {
              width: 600px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              padding-right: 10px;
              font-size: 16px;
              color: #525252;
              font-weight: 700;
              padding: 10px 0;
            }
            .articl_desc {
              padding-right: 10px;
              font-size: 14px;
              color: #696969;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .article_infos {
              position: absolute;
              bottom: 25px;
              width: 99%;
              display: flex;
              justify-content: flex-start;
              & > span {
                color: rgb(131, 131, 131);
                display: inline-block;
                padding-right: 25px;
                font-size: 13px;
                span {
                  margin-left: 3px;
                }
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