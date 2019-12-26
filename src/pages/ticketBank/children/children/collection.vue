<template>
   <ul class="collection page-wrap">
      <li v-for="(i,k) in list" :key="k" class="page-wrap wrap-directe wrap-vcenter wrap-center wrap-content">
         <i class="fontCube" :class="`${i.icon}`"></i>
         <p>{{i.txt}}</p>
      </li>
   </ul>
</template>

<script>
const list = [
   {
      txt: '错题集',
      icon: 'cubeic-message'
   },
   {
      txt: '收藏夹',
      icon: 'cubeic-star'
   },
   {
      txt: '做题记录',
      icon: 'cubeic-time'
   }
]

export default {
   data() {
      return {
         list: list
      }
   },
}
</script>

<style scoped>
.collection{
   padding: 20px 0;
   font-size: 12px;
   box-shadow: 3px 2px 6px #f0f0f0,-3px -2px 6px #f0f0f0,-3px 2px 6px #f0f0f0,3px -2px 6px #f0f0f0;
}
.fontCube{
   font-size: 26px;
   color: #aaaaaa;
}
</style>