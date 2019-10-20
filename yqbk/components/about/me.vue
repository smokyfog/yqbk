 <template>
  <div id="me">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>关于我</span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div class="item_box">
        <div class="portrait_box">
          <div class="portrait">
            <el-image 
              style="width: 250px; height: 350px"
              :src="url" 
              :preview-src-list="[ url ]">
            </el-image>
          </div>
        </div>
        <div id="me_info_box">
          <p><b>姓名：</b> 闫强</p>
          <p><b>地区：</b> 北京-顺义区</p>
          <p><b>职业：</b> 前端工程师</p>
          <p>
            一个‘被毁掉的一代’ 的90后草根前端工程师
          </p>
          <p>
            来自山东泰安，现就职于北京一家互联网公司从事web前端开发，主要领域为影音频和新媒体业务。
          </p>
          <p>
            爱生活、爱设计、爱音乐、爱运动、爱编程。
            彼时年少，不知前路何谓艰苦，于是对未来充满热情，希望，而时间如白驹过隙，时间磨平了自己当初的林林总总，见惯了这么多人的冷眼方知努力的重要，
            如今的自己有时会偷懒，会犹豫，会孤独，但是永远不会放弃，永远心系远方。
          </p>
        </div>
      </div>
    </el-card>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      url: '/img/portrait.jpg'
    };
  }
};
</script>
 
 <style lang="scss">
#me {
  .item_box {
    min-height: 425px;
    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: 100%;
    .portrait_box {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #me_info_box {
      color: rgb(83, 83, 83);
      padding: 20px 20px 20px 0;
      font-size: 16px;
      line-height: 38px;
    }
  }
  .el-card.is-always-shadow,
  .el-card.is-hover-shadow:focus,
  .el-card.is-hover-shadow:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
}
</style>