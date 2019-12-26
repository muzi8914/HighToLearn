<template>
   <div class="mine">
      <m-head></m-head>
      <div class="scroll-list-wrap">
         <cube-scroll ref="scroll">
            <div class="listWrapper">
               <person-info></person-info>
               <video-stroge></video-stroge>
               <com-setting></com-setting>
            </div>
         </cube-scroll>
      </div>
   </div>
</template>

<script>
import mHead from "./children/myHead";
import personInfo from "./children/person";
import videoStroge from "./children/videoStroge";
import comSetting from "./children/comSetting";

export default {
   data() {
      return {
         key: 'value'
      }
   },
   components: {
      mHead,
      personInfo,
      videoStroge,
      comSetting
   },
}
</script>

<style>
.mine .scroll-list-wrap{
   height: calc(100% - 48px);
}
</style>


<style scoped>
.mine{
   height: 100%;
}
.listWrapper{
   padding-bottom: 10px;
}
</style>