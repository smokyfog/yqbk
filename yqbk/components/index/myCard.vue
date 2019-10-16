 <template>
  <div id="friendlyLink">
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
                <span class="fa fa"></span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="fa fa"></span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="fa fa"></span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="fa fa"></span>
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
 #friendlyLink {
    .box-card {
      margin-bottom: 10px;
      .el-card__header {
        padding: 12px 8px;
        background:#F7F7F7;
      }
      .el-card__body {
        padding: 10px;
      }
      .mycard {
        p {
          font-size: 14px;
          padding: 4px 5px;
          color: rgb(58, 58, 58);
        }
        .contact {
          height: 65px;
          margin-top: 5px;
        }
        .contact_box {
          display: grid;
          height: 65px ;
          grid-template-columns: repeat(4, 25%);
          grid-template-rows: 100%;
          li {
            padding: 5px;
            a {
              display: inline-block;
              border: 1px solid #aaa;
              border-radius: 50%;
              height: 100%;
              width: 100%
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