<template>
  <div id="header_warp">
    <div id="header_content">
      <div class="header_left">
        <nuxt-link to="/">
          闫强个人博客
        </nuxt-link>
      </div>
      <div class="header_menu">
        <div id="menu_box">
          <el-menu
            :default-active="activeIndex"
            class="menu_el"
            mode="horizontal"
            height="50px"
            @select="handleSelect"
            background-color="#fff"
            text-color="#3a3a3a"
            active-text-color="#e15782">
            <nuxt-link to="/">
              <el-menu-item index="1">首页</el-menu-item>
            </nuxt-link>
            <nuxt-link to="/notes">
              <el-menu-item index="2">笔记</el-menu-item>
            </nuxt-link>
            <nuxt-link to="/share">
              <el-menu-item index="3">分享</el-menu-item>
            </nuxt-link>
            <el-submenu index="4">
              <template slot="title">关于</template>
              <nuxt-link to="/about-me">
                <el-menu-item index="4-1">关于我</el-menu-item>
              </nuxt-link>
              <nuxt-link to="/about-blog">
                <el-menu-item index="4-2">关于我的博客</el-menu-item>
              </nuxt-link>
            </el-submenu>
            <nuxt-link to="/messageboard">
              <el-menu-item index="5">留言</el-menu-item>
            </nuxt-link>
          </el-menu>
        </div>
        <div id="search_box">
          <el-input
            class="search_input"
            size="small"
            placeholder="请输入搜索的内容"
            suffix-icon="el-icon-search"
            v-model="search_text"
            @keyup.enter.native="goToSearch"
          />
        </div>
        <div id="header_user_info">
          <div v-if="userInfo._id" class="user_info_box" >
            <span class="fa fa-bell"></span>
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  <div class="user_portrait">
                    <img :src="userInfo.portrait" alt="">
                  </div>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="quitLogin">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
          </div>
          <div v-else class="user_oper_box">
            <a
              href="javascript:;"
              @click="show_register"
            >注册</a>
            <a
              href="javascript:;"
              @click="show_login"
            >登陆</a>
          </div>
        </div>
      </div>
    </div>
    <Register />
    <Login />
  </div>
</template>

<script>
import Register from './register'
import Login from './login'
import comm from '~/static/comm.js'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Header',
  components: {
    Register,
    Login
  },
  computed: {
    ...mapGetters('user', {
      userInfo: 'getUserInfo'
    })
  },
  data() {
    return {
      activeIndex: '1',
      search_text: '',
      routeParams: this.$route.param,
      // hasLogin: false,
      // portrait: 'http://sucimg.itc.cn/avatarimg/885662195_1506337866663_c55',
    }
  },
  created() {
    this.handlers()
    this.getUserInfo()
  },
  methods: {
    ...mapActions('user', {
      setUserInfo: 'setUserInfo',
      delUserInfo: 'delUserInfo'
    }),
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    // 根据路由选中当前项
    handlers(val, oldVal){
      let name = this.$route.path.slice(1, (this.$route.path.length ))
      const curr = name.split('?')[0].split('-')[0]
      switch (curr) {
        case '' : return this.activeIndex = '1';
        case 'index' : return this.activeIndex = '1';
        case 'notes' : return this.activeIndex = '2';
        case 'share' : return this.activeIndex = '3';
        case 'about' : return this.activeIndex = '4';
        case 'messageboard' : return this.activeIndex = '5';
        default : return this.activeIndex = '999';
      }
    },
    // 获取用户信息
    async getUserInfo() {
      const selt = this
      const res = await this.$axios({
        method: 'get',
        url: comm.baseUrl + '/bk/users/user_info'
      })
      .catch(err => {
        this.$message.error('请求出错')
      })
      if (res.data && res.data.code === 0) {
        this.setUserInfo(res.data.data)
        // this.$message({
        //   message: res.data.msg,
        //   type: 'success'
        // })
      } else {
        // this.$message.error(res.data.msg)
      }
    },
    // 打开注册窗口
    show_register() {
      this.$bus.$emit('show_register', 'show')
    },
    // 打开登陆窗口
    show_login() {
      this.$bus.$emit('show_login', 'show')
    },
    // 选择下拉菜单
    async handleCommand(command) {
      if (command === 'quitLogin') {
        const { data } = await this.$axios({
          method: 'post',
          url: comm.baseUrl + '/bk/users/quit_login'
        })
        .catch(err => {
          this.$message.error('请求出错')
        })
        if (data && data.code === 0) {
          this.$message({
            message: data.msg,
            type: 'success'
          })
          this.delUserInfo()
        } else {
          this.$message.error(data.msg)
        }
      }
    },
    // 搜索
    goToSearch() {
      console.log('search')
      this.$router.push({
        path: '/search',
        query: {
          keywords: this.search_text
        }
      })
    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal){
        this.handlers(val, oldVal)
      },
      // 深度观察监听
      deep: true
    },
    // '$route' (to, from) {
    //     this.$router.go(0);
    // }
  }
}
</script>

<style lang="scss">
  #header_warp {
    height: 50px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    margin-bottom: 20px;
    // background: rgb(34, 34, 34);
    background: #fff;
    opacity: 0.95;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    #header_content {
      width: 1200px;
      margin: auto;
      height: 100%;
    }
    #header_content > div {
      float: left;
      height: 100%;
      color: #3a3a3a;
    }
    .header_left {
      width: 15%;
      a {
        height: 100%;
        color: #4a4a4a;
        font-weight: 700;
        line-height: 44px;
        font-size: 26px;
        font-family: cursive;
        display: flex;
        justify-content: center;
        // align-items: center;
      }
      
    }
    .header_menu {
      width: 85%;
      #menu_box {
        float: left;
        width: 60%;
      }
      #search_box {
        height: 100%;
        width: 25%;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        .search_input {
          width: 250px;
          input {
            border-radius: 30px;
            background: #eee;
            
          }
          input:focus:invalid:focus, select:focus:invalid:focus, textarea:focus:invalid:focus {
            border-color: #e9322d;
            box-shadow: 0 0 6px #f8b9b7;
          }
        }
      }
      #header_user_info {
        height: 100%;
        width: 15%;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          font-size: 15px;
          padding: 5px;
          color: rgb(225, 87, 130);
        }
        .user_info_box {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            cursor: pointer;
            font-size: 20px;
            color: rgb(131, 131, 131);
            padding: 10px;
            margin-right: 20px;            
          }
          .user_portrait {
            cursor: pointer;
            height: 35px;
            border-radius: 50%;
            overflow: hidden;
            img {
              height: 100%;
            }
          }
        }
      }
      .menu_el {
        display: flex;
        justify-content: space-between;
      }
      .el-menu-item {
        height: 50px;
        line-height: 50px;
      }
      .el-menu--horizontal>.el-submenu .el-submenu__title {
        height: 50px;
        line-height: 50px;
      }
    }
  }
</style>
