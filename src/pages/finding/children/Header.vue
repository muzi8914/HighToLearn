<template>
   <header class="header WeirdBox page-wrap wrap-vcenter wrap-center">
      <p>{{navTitle}}</p>
   </header>
</template>

<script>
export default {
   // name: 'Head',
   data () {
      return {
         msg: 'Welcome to Your Vue.js App',
         toastTxt: 'cube toast content',
         navTitle: '发现'
      }
   },
   methods: {
      /*showToast () {
         this.$createToast({
            txt: this.toastTxt
         }).show()
      }*/
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
   padding: 10px 18px;
   color: #000;
   font-size: 18px;
   background-color: #FFF;
   /* background-color: #009EFF; */
   border-bottom: 1px solid rgb(243, 243, 243);
}
</style>