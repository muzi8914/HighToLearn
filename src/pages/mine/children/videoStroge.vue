<template>
   <div class="videoStorage WeirdBox">
      <div class="videoBox page-wrap">
         <div class="left wrap-content page-wrap wrap-directe wrap-vcenter wrap-center">
            <i class="cubeic-hot cubeicImg"></i>
            <h3 class="h3">录播缓存</h3>
            <p>未缓存</p>
         </div>
         <div class="right wrap-content page-wrap wrap-directe wrap-vcenter wrap-center">
            <i class="cubeic-hot cubeicImg"></i>
            <h3 class="h3">直播缓存</h3>
            <p>未缓存</p>
         </div>

      </div>
   </div>
</template>

<script>


export default {
   data() {
      return {
         key: 'value'
      }
   },
   methods: {
      name() {
         loc
      }
   },
}
</script>

<style scoped>
.videoStorage{
   padding: 15px;
   font-size: 14px;
   color: #aaaaaa;
}
.videoBox{
   box-shadow: 3px 2px 6px #f0f0f0,-3px -2px 6px #f0f0f0,-3px 2px 6px #f0f0f0,3px -2px 6px #f0f0f0;
}
.left,.right{
   padding: 16px 20px 10px;
}
.left{
   border-top-left-radius: 4px;
   border-bottom-left-radius: 4px;
}
.right{
   border-top-right-radius: 4px;
   border-bottom-right-radius: 4px;
}
h3.h3{
   font-size: 16px;
   font-weight: bold;
   margin: 10px 0;
   color: #646464;
}
.cubeicImg{
   font-size: 26px;
   color: #009EFF;
}
</style>