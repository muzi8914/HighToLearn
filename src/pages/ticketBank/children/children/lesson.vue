<template>
   <div class="lesson WeirdBox page-wrap">
      <div class="left wrap-content page-wrap wrap-directe wrap-center">
         <p class="bigTip"><i class="cubeic-edit mr"></i><span>章节练习</span></p>
         <p class="mb">正确率<span class="ml">{{list.rate}}</span>%</p>
         <p>做题进度 <span class="ml">{{list.progress}}</span>/<span>{{list.total}}</span></p>
      </div>
      <div class="right wrap-content page-wrap wrap-directe">
         <div class="top page-wrap wrap-center wrap-vcenter">
            <p><i class="cubeic-calendar cubeic_fs mr"></i></p>
            <section>
               <p class="topTitle">每日一题</p>
               <p class="topNotice">坚持做题{{list.days}}天</p>
            </section>
         </div>
         <div class="bot page-wrap wrap-center wrap-vcenter">
            <p><i class="cubeic-vip cubeic_fs mr"></i></p>
            <section>
               <p class="topTitle">连对挑战</p>
               <p class="topNotice mb0">最高纪录{{list.score}}道</p>
            </section>
         </div>
      </div>
   </div>
</template>

<script>
const list = {
   rate: 0,
   progress: 0,
   total: 1952,
   days: 0,
   score: 0
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
.lesson{
   padding: 20px 15px;
   font-size: 12px;
   box-shadow: 3px 2px 6px #f0f0f0,-3px -2px 6px #f0f0f0,-3px 2px 6px #f0f0f0,3px -2px 6px #f0f0f0;
   margin-bottom: 20px;
}

.left{
   color: #aaaaaa;
   border-right: 1px solid #eeeeee;
}
.bigTip{
   font-size: 14px;
   margin-bottom: 20px;
   color: #646464;
}
.mr{
   margin-right: 10px;
}
.ml{
   margin-left: 10px;
}
.mb{
   margin-bottom: 15px;
}
.mt{
   margin-top: 10px;
}
.cubeic_fs{
   font-size: 26px;
}
.top,.bot{
   color: #aaaaaa;
}
.top{
   border-bottom: 1px solid #eeeeee;
}
.topNotice{
   margin: 10px 0;
}
.topTitle{
   font-weight: bold;
   color: #646464;
   font-size: 14px;
}
.bot{
   padding-top: 10px;
}
.mb0{
   margin-bottom: 0!important;
}
</style>