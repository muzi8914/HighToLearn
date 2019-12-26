<template>
   <div class="mHead WeirdBox page-wrap">
      <div class="left wrap-content page-wrap wrap-center wrap-vcenter">{{userName}}</div>
      <div class="right"><i class="cubeImg cubeic-notification"></i><i class="cubeImg ml cubeic-setting"></i></div>
   </div>
</template>

<script>

export default {
   data() {
      return {
         userName: '花花世界'
      }
   },
}
</script>

<style scoped>
.mHead{
   padding: 10px;
   font-size: 16px;
}
.cubeImg{
   font-size: 20px;
   color: #aaaaaa;
}
.ml{
   margin-left: 20px;
}
</style>