<template>
   <div class="hLesson page-wrap">
      <article class="left wrap-content page-wrap wrap-vcenter">
         <p><i class="cubeic-edit cubeic_fs"></i></p>
         <section class="title">
            <p class="notice">历年真题</p>
            <p>已做{{list.doneL}}套/共{{list.totalL}}套</p>
         </section>
      </article>
      <article class="right wrap-content page-wrap wrap-vcenter wrap-center">
         <p><i class="cubeic-edit cubeic_fs"></i></p>
         <section class="title">
            <p class="notice">模拟测试</p>
            <p>已做{{list.mDoneL}}套/共{{list.mTotalL}}套</p>
         </section>
      </article>
   </div>
</template>

<script>
const list = {
   doneL: 0,
   totalL: 4,
   mDoneL: 0,
   mTotalL: 7
}

export default {
   data() {
      return {
         list: list
      }
   },
}
</script>

<style scoped>
.hLesson{
   padding: 20px 15px;
   font-size: 12px;
   box-shadow: 3px 2px 6px #f0f0f0,-3px -2px 6px #f0f0f0,-3px 2px 6px #f0f0f0,3px -2px 6px #f0f0f0;
   margin-bottom: 20px;
}
.left{
   border-right: 1px solid #eeeeee;
}

.cubeic_fs{
   font-size: 26px;
   margin-right: 10px;
   color: #aaaaaa;
}
.title{
   color: #aaaaaa;
   font-size: 12px;
}
.notice{
   font-size: 14px;
   color: #646464;
   margin-bottom: 10px;
}
</style>