<template>
   <div class="content WeirdBox page-wrap wrap-directe">
      <div class="topVideo page-wrap" @click="playVideo">
         <div class="left"><img src="../../../../static/img/f/videoImg.png" class="videoImg"></div>
         <div class="right wrap-content WeirdBox page-wrap wrap-vcenter wrap-between">
            <section>
               <h4 class="h4">精品体验课</h4>
               <p class="word">名师阵容 全科精讲</p>
            </section>
            <div class="playIcon"><img src="../../../../static/img/f/play.png" class="playImg"></div>
         </div>
      </div>
      <div class="wrap-content page-wrap wrap-directe">
         <h3 class="h3">推荐课程</h3>
         <div v-if="!classList.length" class="no_data wrap-content page-wrap wrap-directe wrap-vcenter wrap-center">
            <div class="noListImg">
               <img src="../../../../static/img/f/no_list.png" class="noListIcon">
            </div>
            <p class="noDataTips">暂时没有课程，去看看别的吧</p>
         </div>
         <ul class="classList"></ul>
      </div>
   </div>
</template>

<script>

export default {
   data() {
      return {
         classList: [],
      }
   },
   methods: {
      checkCookie() {
         console.log(document.cookie)
      },
      playVideo() {
         this.$router.push({path: '/videoPlayer'})
      }
   },
}
</script>

<style scoped>
.content{
   padding: 10px 20px;
   height: 100%;
   font-size: 14px;
   background-color: #FFFFFF;
}
.topVideo{
   width: 100%;
   margin-bottom: 20px;
   border-radius: 6px;
   border: 1px solid #f0f0f0;
   box-shadow: 3px 2px 6px #f0f0f0,-3px -2px 6px #f0f0f0,-3px 2px 6px #f0f0f0,3px -2px 6px #f0f0f0;
}
.left{
   width: 96px;
   height: 73px;
   background-color: rgb(131, 140, 206);
   border-top-left-radius: 6px;
   border-bottom-left-radius: 6px;
}
.videoImg{
   width: 100%;
}
.right{
   box-sizing: border-box;
   padding: 10px;
   color: rgb(126, 126, 126);
}
h4.h4{
   font-weight: bold;
   font-size: 16px;
   margin-bottom: 8px;
   color: #2c2c2c;
}
h3.h3{
   font-size: 20px;
   font-weight: bold;
}
.playIcon{
   width: 40px;
   height: 40px;
}
.playImg{
   width: 100%;
}

.noListImg{
   width: 185px;
   height: 145px;
   margin-bottom: 20px;
}
.noListIcon{
   width: 100%;
}
</style>
