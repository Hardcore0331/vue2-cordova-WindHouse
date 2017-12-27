<template>
  <div id="home">
    <div class="header">
      <div class="wrapper">
        <div class="chose_city">
          <a>广州<i class="icon fa fa-caret-down" aria-hidden="true"></i></a>
          <div class="separate"></div>
        </div>
        <div class="search">
          <input type="text" placeholder="请输入小区/商圈/地铁">
        </div>
      </div>
    </div>
    <div class="content">gaga</div>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style scoped lang="less">
.header {
  position: fixed;
  top: 0px;
  height: 50px;
  width: 100%;
  background: white;
}

.wrapper {
  display: flex;
  width: 90%;
  height: 30px;
  margin: 10px auto;
  border-radius: 2px;
  background: #f8f8f8;
  display: table;
  .chose_city {
    flex: 1;
    display: table-cell;
    padding: 5px 0 5px 5px;
    .icon {
      margin-left: 5px;
    }
    .separate {
      float: right;
      width: 1px;
      height: 20px;
      border: 1px;
      background: #d4c9c9;
    }
  }
  .search {
    flex: 4;
    display: table-cell;
    padding: 5px;
    input { 
      width: 95%;
      line-height: 20px;
      background: #f8f8f8;
      border: none;
      
    }
  }
}

input::-webkit-input-placeholder{text-align: center;} 

</style>