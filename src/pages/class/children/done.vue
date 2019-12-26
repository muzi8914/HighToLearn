<template>
   <div class="doSomething">
      <div class="scroll-list-wrap">
         <cube-scroll ref="scroll" :data="list">
            <div class="listWrapper">
               <div class="uList WeirdBox" v-for="(item,index) in list" :key="index">
                  <h3 class="h3">{{item.title}}</h3>
                  <ul v-for="(i,k) in item.content" :key="k">
                     <li class="smallLi page-wrap" @click="toSeeVideo(i.videoSource,$event)">
                        <div class="left page-wrap wrap-directe wrap-vcenter wrap-center">
                           <i class="cubeic-hot videoIcon"></i>
                           <p>{{i.type==1?'直播':'录播'}}</p>
                        </div>
                        <div class="right wrap-content page-wrap wrap-between">
                           <div class="avatar">
                              <h4 class="h4">{{i.smallTitle}}</h4>
                              <p class="lecturerImg"><img :src="i.lecturerIcon" class="lecturerIcon"></p>
                              <p class="lecturerName">{{i.lecturer}}</p>
                           </div>
                           <div class="porgress page-wrap wrap-directe wrap-end wrap-between">
                              <p class="percentData page-wrap wrap-end">
                                 <span class="percent page-wrap wrap-vcenter wrap-center">{{i.percent}}%</span>
                                 <span class="leftHalfCircle" :class="{'hZIndex': i.percent>50}"></span>
                                 <span class="rightHalfCircle"></span>
                              </p>
                              <p class="notice">更新至<span>{{i.progress}}</span>/<span>{{i.totalPage}}</span>节</p>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </cube-scroll>
      </div>
   </div>
</template>

<script>
const list = [
   {
      title: '2018考季',
      content: [
         {
            type: 1,//1-直播/2-录播
            smallTitle: '前导入门',
            lecturer: '刘阳',
            lecturerIcon: '',//讲师头像
            progress: 1,//更新至第几章/节
            totalPage: 10,//总章节
            percent: 28,//当前进度
            videoSource: '',//视频地址
         },
         {
            type: 2,//1-直播/2-录播
            smallTitle: '前导入门',
            lecturer: '张三',
            lecturerIcon: '',//讲师头像
            progress: 1,//更新至第几章/节
            totalPage: 6,//总章节
            percent: 28,//当前进度
            videoSource: '',//视频地址
         },
         {
            type: 2,//1-直播/2-录播
            smallTitle: '前导入门',
            lecturer: '李四',
            lecturerIcon: '',//讲师头像
            progress: 3,//更新至第几章/节
            totalPage: 4,//总章节
            percent: 28,//当前进度
            videoSource: '',//视频地址
         },
      ]
   },
   {
      title: '2019考季',
      content: [
         {
            type: 1,//1-直播/2-录播
            smallTitle: '前导入门',
            lecturer: '刘阳',
            lecturerIcon: '',//讲师头像
            progress: 1,//更新至第几章/节
            totalPage: 10,//总章节
            percent: 28,//当前进度
            videoSource: '',//视频地址
         },
         {
            type: 2,//1-直播/2-录播
            smallTitle: '前导入门',
            lecturer: '张三',
            lecturerIcon: '',//讲师头像
            progress: 1,//更新至第几章/节
            totalPage: 6,//总章节
            percent: 28,//当前进度
            videoSource: '',//视频地址
         },
         {
            type: 2,//1-直播/2-录播
            smallTitle: '前导入门',
            lecturer: '李四',
            lecturerIcon: '',//讲师头像
            progress: 3,//更新至第几章/节
            totalPage: 4,//总章节
            percent: 28,//当前进度
            videoSource: '',//视频地址
         },
      ]
   }
]

export default {
   data() {
      return {
         list: list
      }
   },
   methods: {
      toSeeVideo(t,e) {
         this.$router.push({path: '/videoPlayer',query: {
            videoSource: t
         }})
      }
   },
}
</script>

<style>
.doSomething .scroll-list-wrap{
   height: 100%;
}

</style>

<style scoped>
.doSomething{
   width: 100%;
   height: 100%;
}
.listWrapper{
   padding-bottom: 10px;
}
.uList{
   padding: 0 20px;
   font-size: 12px;
}
h3.h3{
   padding: 10px 0;
   font-weight: bold;
}
.smallLi{
   border: 1px solid #f0f0f0;
   box-shadow: 3px 2px 6px #f0f0f0,-3px -2px 6px #f0f0f0,-3px 2px 6px #f0f0f0,3px -2px 6px #f0f0f0;
   margin-bottom: 18px;
   padding: 10px 0;
}
.left{
   padding: 0 10px;
   border-right: 1px solid #f0f0f0;
}
.videoIcon{
   font-size: 20px;
   margin-bottom: 6px;
}

.right{
   padding: 0 10px;
}
h4.h4{
   font-size: 14px;
   font-weight: bold;
}
.lecturerImg{
   width: 30px;
   height: 30px;
   border-radius: 100%;
   background-color: pink;
   margin: 6px 0;
}
.lecturerName{
   font-size: 12px;
   font-weight: bold;
}
.notice{
   color: #aaaaaa;
}
.percentData{
   width: 100%;
   position: relative;
}
.percent{
   width: 40px;
   height: 40px;
   border-radius: 50%;
   border: 1px solid #f0f0f0;
   color: #888888;
   background-color: #fff;
   z-index: 3;
}
.leftHalfCircle,.rightHalfCircle{
   width: 20px;
   height: 40px;
   position: absolute;
   top: 0;
   right: 20px;
   z-index: -1;
   border: 1px solid #009EFF;
   border-right: 0;
   border-radius: 21px 0 0 21px;
}
.leftHalfCircle{
}
.rightHalfCircle{
   transform: rotate(100.8deg);
   transform-origin: right center;
}
.hZIndex{
   z-index: 4!important;
}
</style>