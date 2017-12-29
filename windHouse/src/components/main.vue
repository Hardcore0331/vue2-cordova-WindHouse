<template>
  <div class="wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <footer>
      <ul>
        <router-link tag="li" to="/home" replace>
          <i class="fa fa-home"></i>
          <span>首页</span>
        </router-link>
        <router-link tag="li" to="/message" replace>
          <i class="fa fa-envelope"></i>
          <span>消息</span>
        </router-link>
        <router-link tag="li" to="/discover" replace>
          <i class="fa fa-book"></i>
          <span>发现</span>
        </router-link>
        <router-link tag="li" to="/mine" replace>
          <i class="fa fa-user"></i>
          <span>我的</span>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      selected: 'home',
    };
  },
  created() {
  },
  watch: {
    selected(newTab) {
      console.log(newTab);
      // this.$router.push({ name: newTab });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .wrapper {
    height: 100%
  }
  
  footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 50px;
    border-top: .0625rem solid #e4e4e4;
    background:#f8f8f8;
    ul li {
    float:left;
    text-align:center;
    width:25%;
    line-height:20px;
    i {
      padding-top:5px;
      display:block;
      //color:#be966c;
    }
    span{
      // color:#914e07;
      font-size: .625rem;
    } 
  }

  .router-link-active i{
    color: orange;
    font-weight:bold;
  }

  .router-link-active span{
    color:orange;
    font-weight:bold;
  }
}
</style>
