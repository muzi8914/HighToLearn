<template>
   <ul class="totalNum page-wrap">
      <li v-for="(i,k) in list" :key="k" class="page-wrap wrap-directe wrap-vcenter wrap-content">
         <p>
            <span class="bigNum">{{ i.rate }}</span>
            <span v-if="!k">%</span>
            <span v-else>道</span>
         </p>
         <p>{{ i.title }}</p>
      </li>
   </ul>
</template>

<script>
const rateList = [
   {
      rate: 0,
      title: '正确率'
   },
   {
      rate: 0,
      title: '已做'
   },
   {
      rate: 2283,
      title: '总题数'
   }
]

export default {
   data() {
      return {
         list: rateList
      }
   },
}
</script>

<style scoped>
.totalNum{
   font-size: 12px;
   color: #aaaaaa;
}
.bigNum{
   font-size: 18px;
   font-weight: bold;
   color: #646464;
}
</style>