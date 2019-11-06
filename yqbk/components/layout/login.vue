<template>
  <div class="login_box">
    <Modal
      title="用户登陆"
      v-model="login_modal"
      :mask-closable="false"
      :scrollable="true"
      :footer-hide="true"
      class-name="login-center-modal">
        <el-form 
          :model="ruleForm" 
          :rules="rules" 
          ref="ruleForm" 
          label-width="100px" 
          class="login-ruleForm"
        >
          <el-form-item label="用户昵称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input 
              type="password" 
              v-model="ruleForm.password" 
              autocomplete="off"
            />
          </el-form-item>
          <p class="oper_box">
            没有账号？ 请
            <span
              @click="handleRegister"
            >注册</span>
          </p>
          <el-form-item class="btn_box">
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
            >登录</el-button>
            <el-button
              @click="resetForm('ruleForm')"
            >重置</el-button>
          </el-form-item>
        </el-form>
    </Modal>
  </div>
</template>

<script>
import UploadImg  from '~/components/UploadSingleImg'
// import axios from 'axios'
import CryptoJS from 'crypto-js'
import { async } from 'q'
export default {
  components: {
    UploadImg
  },
  data() {
    return {
      login_modal: false,
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.$bus.$on('show_login',async (data) => {
      try {
        this.$refs['ruleForm'].resetFields()
      } catch(err) {}
      this.login_modal = true
    })
    this.$bus.$on('hide_login', (data) => {
      this.login_modal = false
    })
  },
  methods: {
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const data = {}
          data.password = CryptoJS.MD5(this.ruleForm.password).toString()
          data.nickname = this.ruleForm.name
          this.reqSubmit(data)
        } else {
          return false;
        }
      });
    },
    async reqSubmit(data) {
      const selt = this
      const res = await this.$axios({
        method: 'post',
        url: '/bk/users/user_login',
        data
      })
      .catch(err => {
        this.$message.error('请求出错')
      })
      if (res.data && res.data.code === 0) {
        this.$message({
          message: res.data.msg,
          type: 'success'
        })
      } else {
        this.$message.error(res.data.msg)
      }
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 修改头像
    change_img(image_url) {
      this.ruleForm.image_url = image_url
    },
    // 跳转注册页面
    handleRegister() {
      this.login_modal = false
      this.$bus.$emit('show_register', 'show')
    }
  },
}
</script>

<style lang="scss"> 
.login-center-modal{
  display: flex;
  align-items: center;
  justify-content: center;
  .ivu-modal{
      top: 0;
  }
  .oper_box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 22px;
    span {
      cursor: pointer;
      color: rgb(245, 108, 108);
      margin-left: 10px;
    }
  }
  .login-ruleForm {
    padding: 20px 20px 20px 10px;
  }
  .btn_box {
    div {
      margin-left: 0 !important;
      text-align: center;
    }
  }
}
</style>