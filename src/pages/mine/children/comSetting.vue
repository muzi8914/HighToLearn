<template>
   <ul class="ul WeirdBox">
      <li v-for="(item,index) in list" :key="index" class="botB li page-wrap wrap-between" @click="target(item.icon)">
         <div class="page-wrap wrap-vcenter">
            <i :class="`cubeic-${item.icon}`" class="icon"></i>
            <p>{{item.title}}</p>
         </div>
         <div class="page-wrap wrap-vcenter">
            <p v-if="index==3" class="rfs">{{item.disCountNum}}张</p>
            <i class="icon gray cubeic-arrow"></i>
         </div>
      </li>
   </ul>
</template>

<script>
const list = [
   {
      title: '联系班主任',
      icon: 'person',
      path: ''
   },
   {
      title: '我的问答',
      icon: 'question',
      path: ''
   },
   {
      title: '我的订单',
      icon: 'tag',
      path: ''
   },
   {
      title: '我的优惠券',
      icon: 'credit-card',
      path: '',
      disCountNum: '0'
   },
   {
      title: '扫一扫',
      icon: 'qr-code',
      path: ''
   },
   {
      title: '意见反馈',
      icon: 'message',
      path: ''
   },
   {
      title: '激活学习卡',
      icon: 'picture',
      path: ''
   }
]

export default {
   data() {
      return {
         list: list
      }
   },
   methods: {
      target(action) {
         console.log(action)
         if (action=='qr-code') {}
      }
   },
}
</script>

<style scoped>
ul{
   padding: 20px;
}

.li{
   padding: 10px 0;
   font-size: 16px;
   color: #646464;
}

.botB{
   border-bottom: 1px solid #eeeeee;
}

.icon{
   margin-right: 10px;
   font-size: 20px;
   color: #aaaaaa;
}

.gray{
   color: #eeeeee;
}

.rfs{
   font-size: 14px;
   color: #aaaaaa;
   margin-right: 10px;
}
</style>