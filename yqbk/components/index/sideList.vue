 <template>
  <div id="side_list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>点击排行</span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div class="text side_content">
        <div class="img_box">
          <img :src="list[0].image" alt="">
          <p class="titles">{{ list[0].title }}</p>
        </div>
        <ul class="article_list clear_fix" >
          <li class="side_li" v-for="(item, idx) in list" :key="item.desc + idx">
            <aside>
              <div>
                <img :src="item.image" alt="">
              </div>
            </aside>
            <article>
              <p :title="item.desc">{{ item.desc }}</p>
            </article>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      list: [
        {
          title: '运算符的作用以及用法的笔记',
          desc: '什么是变量 变量就是储存数据的空间。 变量的规范命名： 1.字下美人其后数 2.不可以使用关键词 3.不可以重复定义 4.首字母小写，其后首字母大写，还要见名知意。 变量的步骤： 先声...',
          owner: '闫强',
          field: '技术 前端开发 js',
          create_time: '2019-10-16',
          viewed: 999,
          image: 'http://jxhx2.yangqq.com/skin/jxhx/images/4.jpg',
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
          viewed: 999,
          image: 'http://www.zbboke.com/uploads/161221/1-16122115113S14.jpg',
          url: 'https://github.com/smokyfog'
        },
        {
          title: '用SVG画出拼图块，并实现拼图功能，请收下我的膝盖',
          desc: '什么是变量 变量就是储存数据的空间。 变量的规范命名： 1.字下美人其后数 2.不可以使用关键词 3.不可以重复定义 4.首字母小写，其后首字母大写，还要见名知意。 变量的步骤： 先声...',
          owner: '闫强',
          field: '技术 前端开发 js',
          create_time: '2019-10-14',
          viewed: 999,
          image: 'http://www.zbboke.com/uploads/allimg/180626/1-1P626192T9222-lp.png',
          url: 'https://github.com/smokyfog'
        },
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
          viewed: 999,
          image: 'http://www.zbboke.com/uploads/161221/1-16122115113S14.jpg',
          url: 'https://github.com/smokyfog'
        },
        {
          title: '用SVG画出拼图块，并实现拼图功能，请收下我的膝盖',
          desc: '什么是变量 变量就是储存数据的空间。 变量的规范命名： 1.字下美人其后数 2.不可以使用关键词 3.不可以重复定义 4.首字母小写，其后首字母大写，还要见名知意。 变量的步骤： 先声...',
          owner: '闫强',
          field: '技术 前端开发 js',
          create_time: '2019-10-14',
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
 #side_list {
    .box-card {
      margin-bottom: 10px;
      .el-card__header {
        padding: 12px 8px;
        background:#F7F7F7;
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