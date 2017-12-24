<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="../assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="message"> 
        <img slot="icon" src="../assets/logo.png">
        消息
      </mt-tab-item>
      <mt-tab-item id="discover">
        <img slot="icon" src="../assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
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
<style scoped>
</style>
