<template>
   <div class="index page-wrap wrap-directe">
      <f-header class="vheader"></f-header>
      <div class="content wrap-content">
         <router-view></router-view>
      </div>
   </div>
</template>

<script>
import fHeader from "./children/Header";
// const fHeader = ()=> import("./children/Header");

export default {
   data() {
      return {
         navTitle: '发现'
      }
   },
   components: {
      fHeader,
   }
}
</script>

<style scoped>
.index{
   width: 100%;
   height: 100%;
}
</style>