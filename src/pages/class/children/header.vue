<template>
   <div class="header">
      <div class="bigHeader page-wrap wrap-vcenter wrap-between">
         <p class="bigTitle">{{navTitle}}</p>
         <p class="changeTitle">切换</p>
      </div>
      <com-head></com-head>
   </div>
</template>

<script>
const comHead = () => import('@/components/com_head');

export default {
   components: {
      comHead,
   },
   data() {
      return {
         navTitle: '消防体验课',
      }
   },
   methods: {
      selectNav(k,t) {
         if (k!=this.activeIndex) {
            // console.log(k)
            this.activeIndex = k
         }
      }
   },
}
</script>

<style scoped>
.header{
   padding: 10px 18px 4px;
   color: #000;
   font-size: 18px;
   background-color: #FFF;
   border-bottom: 1px solid rgb(243, 243, 243);
}
.bigHeader{
   margin-bottom: 20px;
}
.bigTitle{
   font-weight: bold;
}
.changeTitle{
   font-size: 12px;
}
</style>