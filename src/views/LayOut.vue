<template>
  <div>
      <TopNav/>
      <router-view></router-view>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue"
export default {
    components:{
        TopNav
    },
}
</script>

<style>

</style>