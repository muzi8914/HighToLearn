<template>
   <div class="QBank page-wrap wrap-directe">
      <com-head class="com_head"></com-head>
      <div class="content wrap-content">
         <router-view></router-view>
      </div>
   </div>
</template>

<script>
const comHead = () => import('@/components/com_head');

export default {
   data() {
      return {
         key: 'value'
      }
   },
   components: {
      comHead,
   },
}
</script>

<style scoped>
.QBank{
   width: 100%;
   height: 100%;
}
.com_head{
   padding: 10px 18px 4px;
   margin-bottom: 10px;
}
</style>