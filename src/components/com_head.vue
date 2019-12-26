<template>
   <ul class="nav page-wrap wrap-vcenter">
      <li v-for="(item,index) in listNav" :key="index" class="smallNav page-wrap wrap-directe wrap-vcenter" @click="selectNav(index,item.path)">
         <p :class="{'colorFont': activeIndex==index}">{{item.title}}</p>
         <p :class="{'colorBg': activeIndex==index}" class="bottomLine"></p>
      </li>
   </ul>
</template>

<script>

const list = [
   {
      title: '实务',
      path: ''
   },
   {
      title: '综合能力',
      path: ''
   },
   {
      title: '案例',
      path: ''
   }
]

export default {
   data() {
      return {
         listNav: list,//
         activeIndex: 0
      }
   },
   methods: {
      selectNav(k,t) {
         if (k!=this.activeIndex) {
            this.activeIndex = k
         }
      }
   },
   mounted () {
      let currentPath = this.$route.path;
      if (currentPath==='/QBank'&&this.listNav.length==3) {
         let obj = {
            title: '三合一',
            path: ''
         }
         this.listNav.push(obj)
      }
   },
}
</script>

<style scoped>
.nav{
   /* margin-top: 20px; */
   font-size: 12px;
}
.smallNav{
   padding-right: 20px;
}
.bottomLine{
   width: 20px;
   height: 3px;
   background-color: transparent;
   border-radius: 4px;
   transition: all .3s;
}
.colorBg{
   background-color: #009EFF!important;
}
.colorFont{
   color: #009EFF!important;
}
</style>