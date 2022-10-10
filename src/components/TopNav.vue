<template>
  <div class="navpage">
    <!-- default-active	当前激活菜单的 index
      导航菜单默认为垂直模式，通过mode属性可以使导航菜单变更为水平模式 -->
      <!-- ：是v-bind:的简写，这样可以动态的绑定类 -->
    <el-menu
      router
      :default-active="active"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- index="/"  根目录 -->
      <el-menu-item style="margin-left: 50px" index="/"> 首页</el-menu-item>
      <el-menu-item index="/IndResume"> 个人简介</el-menu-item>
      <el-menu-item index="/PerSkill"> 个人技能</el-menu-item>
      <el-menu-item index="/RelExperience"> 工作经历</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  // 因为当某个路由有子级路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性，SO解决办法是：即去除父级的name属性即可。
  // name: "TopNav",
  data() {
    return {
      active: "/",
    };
  },
};
</script>

<style >
* {
  margin: 0 0;
  padding: 0 0;
  text-decoration: none;
}
.navpage {
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: 100;
}
</style>