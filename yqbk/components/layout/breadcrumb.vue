<template>
  <div class="breadcrumb_box">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <slot />
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.breadcrumb_box {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  // border: 1px solid #ddd;
  border-bottom: none;
  clear: both;
  overflow: hidden;
  // box-shadow: rgb(204, 204, 204) 0px 0px 5px;
  // margin: 0 0 8px 0;
  padding: 12px 20px;
  border-image: initial;
  // border-radius: 4px 4px 2px 2px;
  background: #fff;
}
</style>