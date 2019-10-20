 <template>
  <div id="my_card">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>我的名片</span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div class="text mycard">
        <p>网名： smokyfog</p>
        <p>职业： web前端工程师</p>
        <p>现居： 北京市-顺义区</p>
        <p>Email： yanqiang_main@163.com</p>
        <div class="contact">
          <ul class="contact_box">
            <li>
              <a href="">
                <span class="iconfont iconfl-jia"></span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="iconfont iconqq"></span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="iconfont iconweixin5"></span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="iconfont iconweibo2"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </el-card>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {

    }
  }
};
</script>
 
 <style lang="scss">
 #my_card {
    .box-card {
      margin-bottom: 10px;
      .el-card__header {
        padding: 12px 8px;
        // background:#F7F7F7;
      }
      .el-card__body {
        padding: 10px;
      }
      .mycard {
        margin-top: 5px;
        p {
          font-size: 14px;
          padding: 8px 5px;
          color: rgb(58, 58, 58);
        }
        .contact {
          padding: 0 20px 0 0;
          height: 60px;
          // margin-top: 5px;
        }
        .contact_box {
          display: grid;
          height: 60px ;
          grid-template-columns: repeat(4, 25%);
          grid-template-rows: 100%;
          li {
            padding: 8px;
            a {
              display: flex;
              font-size: 30px;
              justify-content: center;
              align-items: center;
              border: 1px solid #f7f7f7;
              box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.1), inset 0.1px 0px 0px rgba(0, 0, 0, 0.7);
              border-radius: 50%;
              height: 100%;
              width: 100%;
              span {
                font-size: 30px;
              }
            }
          }
          & :nth-child(1) {
            a{
              span {
                color: #f78989;
              }
            }
          }
          & :nth-child(2) {
            a{
              span {
                color: skyblue;
              }
            }
          }
          & :nth-child(3) {
            a{
              span {
                color: #67c23a;
              }
            }
          }
          & :nth-child(4) {
            a{
              span {
                color: #ffd36e;
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