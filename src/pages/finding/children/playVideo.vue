<template>
   <div class="videoPlayer">
      <div class="videoHeader page-wrap">
         <div class="backGo page-wrap wrap-vcenter wrap-center" @click="backToHistory"><i class="cubeic-back backIcon"></i></div>
         <p class="videoTitle wrap-content page-wrap wrap-vcenter">视频播放</p>
      </div>
      <video-player class="video-player-box video_box" ref="videoPlayer" :options="playerOptions" :playsinline="true" customEventName="customstatechangedeventname">
      </video-player>
   </div>
</template>

<script>
export default {
   data() {
      return {
         // videoSource: '../../../../static/video/preloading.mp4',//
         playerOptions: {
            // videojs options
            muted: true,
            // language: 'en',
            language: 'zh-CN',
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            fluid: true,
            width: document.documentElement.clientWidth, // 播放器宽度
            sources: [{
               type: "video/mp4",
               src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
               // src: "../../../../static/video/preloading.mp4"
            }],
            // poster: "../../../../static/video/sharevideo.jpg",
            controlBar: {
               timeDivider: true,
               durationDisplay: true,
               remainingTimeDisplay: false,
               fullscreenToggle: true // 全屏按钮
            }
         }
      }
   },
   computed: {
      player() {
         return this.$refs.videoPlayer.player//自定义播放
      }
   },
   methods: {
      backToHistory() {
         console.log('back')
         history.back(-1)
         // window.history.back(-1)
      }
   }
}
</script>

<style>
.video-js{
   height: 100%;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
}
.video-js .vjs-big-play-button{
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
}
</style>

<style scoped>
.videoPlayer{
   width: 100%;
   height: 100%;
   background-color: #000;
   font-size: 14px;
}
.video_box{
   height: 100%;
   position: relative;
}
.videoHeader{
   width: 100%;
   height: 40px;
   color: #FFF;
   background-color: rgba(250,250,250,.1);
   position: absolute;
   left: 0;
   top: 0;
   z-index: 10;
}
.backGo{
   width: 40px;
   height: 40px;
   margin-right: 40px;
}
.backIcon{
   font-size: 16px;
}
</style>