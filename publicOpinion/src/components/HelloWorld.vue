<template>
  <div>
    <div class="hello">
      <span id="msgFromBack">{{msgFromBack}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      msgFromBack: '',
    };
  },
  created() {
    console.log($('#msgFromBack'));
    axios.get(`${process.env.URL}/api/test/hello`).then((res) => {
      console.log('qq', res);
      this.msgFromBack = res.data.msgFromBack;
    }).catch((error) => {
      console.log(error);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
