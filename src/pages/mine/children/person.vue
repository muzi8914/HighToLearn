<template>
   <div class="personal WeirdBox page-wrap">
      <div class="left">
         <h3 class="h3">{{personInfo.userName}}</h3>
         <div class="mb page-wrap wrap-vcenter">
            <p class="signPlace"><i class="cubeic-star"></i><span class="blueFont">签到</span></p>
            <p>累计{{personInfo.signDays}}天</p>
         </div>
         <p><span>考试项目：</span><span class="blueFont">{{personInfo.testItem}}</span></p>
      </div>
      <div class="right wrap-content page-wrap wrap-end">
         <p class="personIcon"><img src="" alt="" class="personAvatar"></p></div>
   </div>
</template>

<script>
const personInfo = {
   photo: '',
   userName: '花花世界',
   signDays: 10,
   testItem: '一级消防工程师'
}

export default {
   data() {
      return {
         personInfo: personInfo,//
      }
   },
}
</script>

<style scoped>
.personal{
   padding: 15px;
   font-size: 14px;
   color: #aaaaaa;
}
.blueFont{
   color: #0572E8;
}
.personIcon{
   width: 60px;
   height: 60px;
   border: 1px solid #aaa;
   border-radius: 50%;
}

h3.h3{
   font-size: 26px;
   font-weight: bold;
   margin-bottom: 10px;
   color: #202020;
}
i.cubeic-star{
   margin-right: 4px;
}
.signPlace{
   padding: 4px 10px;
   border: 1px solid #0572E8;
   margin-right: 15px;
   border-radius: 4px;
}
.mb{
   margin-bottom: 10px;
}
</style>