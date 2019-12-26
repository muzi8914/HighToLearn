<template>
   <div class="index page-wrap wrap-directe">
      <f-header class="vheader"></f-header>
      <div class="content wrap-content">
         <router-view></router-view>
      </div>
   </div>
</template>

<script>
const fHeader = ()=> import("./children/header")

export default {
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