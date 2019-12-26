<template>
   <div class="doneLesson WeirdBox">
      <div class="scroll-list-wrap">
         <cube-scroll ref="scroll">
            <div class="listWrapper">
               <total-num></total-num>
               <practices></practices>
               <lesson></lesson>
               <h-lesson></h-lesson>
               <l-collection></l-collection>
            </div>
         </cube-scroll>
      </div>
   </div>
</template>

<script>
const totalNum = ()=> import ('./children/totalNum');//数字总结
const practices = ()=> import ('./children/quickPractices');//快速练习
const lesson = ()=> import ('./children/lesson');//章节精练
const hLesson = ()=> import ("./children/historyLesson");//历年真题
const LCollection = ()=> import ("./children/collection");//历年真题

export default {
   data() {
      return {
         key: 'value'
      }
   },
   components: {
      totalNum,
      practices,
      lesson,
      hLesson,
      LCollection
   },
}
</script>

<style>
.doneLesson .scroll-list-wrap,.doneLesson .cube-scroll-content{
   width: 100%;
   height: 100%;
}
.doneLesson .cube-scroll-list-wrapper{
   width: 100%;
   padding: 0 20px 20px 20px;
   box-sizing: border-box;
}
</style>


<style scoped>
.doneLesson{
   width: 100%;
   height: 100%;
   font-size: 14px;
}
.listWrapper{
   padding-bottom: 10px;
}
</style>