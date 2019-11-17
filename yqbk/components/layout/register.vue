<template>
  <div class="register_box">
    <Modal
      title="用户注册"
      v-model="register_modal"
      :mask-closable="false"
      :scrollable="true"
      :footer-hide="true"
      class-name="register-center-modal">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="register-ruleForm">
          <el-form-item label="用户昵称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="用户邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="上传头像" prop="img" class="upload_head">
            <UploadImg
              :image_url="ruleForm.image_url"
              @change_img="change_img"
            />
          </el-form-item>
          <el-form-item label="您的签名" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <p class="oper_box">
            已有账号？ 请直接
            <span
              @click="handleLogin"
            >登陆</span>
          </p>
          <el-form-item class="btn_box">
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
    </Modal>
  </div>
</template>

<script>
import UploadImg  from '~/components/UploadSingleImg'
import axios from 'axios'
import CryptoJS from 'crypto-js'
import comm from '~/static/comm.js'
export default {
  components: {
    UploadImg
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    }
    return {
      register_modal: false,
      ruleForm: {
        name: '',
        image_url: '',
        imagePath: '',
        password: '',
        checkPass: '',
        desc: '',
        email: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        desc: [
          { required: false, message: '请填写签名', trigger: 'blur' }
        ],
        email: [
          { type: 'email', required: true, message: '请填写正确的邮箱', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.$bus.$on('show_register', (data) => {
      // Object.assign(this.$data, this.$options.data())
      try {
        this.$refs['ruleForm'].resetFields()
      } catch(err) {}
      this.register_modal = true
    })
    this.$bus.$on('hide_register', (data) => {
      this.register_modal = false
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
          data.email = this.ruleForm.email
          data.desc = this.ruleForm.desc
          data.portrait = this.ruleForm.imagePath
          this.reqSubmit(data)
        } else {
          return false;
        }
      });
    },
    async reqSubmit(data) {
      const res = await axios({
        method: 'post',
        url: comm.baseUrl + '/bk/users/user_register',
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
        this.handleLogin()
      } else {
        this.$message.error(res.data.msg)
      }
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 修改头像
    change_img(image_url,imagePath) {
      this.ruleForm.image_url = image_url
      this.ruleForm.imagePath = imagePath
    },
    // 登陆
    handleLogin() {
      this.register_modal = false
      this.$bus.$emit('show_login', 'show')
    }
  },
}
</script>

<style lang="scss"> 
.register-center-modal{
  display: flex;
  align-items: center;
  justify-content: center;
  .ivu-modal{
    top: 0;
  }
  .register-ruleForm {
    padding: 20px 20px 20px 10px;
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
  .upload_head {
    margin-bottom: 10px;
  }
  .btn_box {
    div {
      margin-left: 0 !important;
      text-align: center;
    }
  }
}
</style>