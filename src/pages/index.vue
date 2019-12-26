<template>
   <div class="homePage page-wrap wrap-directe wrap-between">
      <section class="content wrap-content">
         <router-view/>
      </section>
      <s-footer :currentIndex='footKey'></s-footer>
   </div>
</template>

<script>
import { checkCookie, setCookie } from '../api/entry.js'

import Footer from '@/components/Footer'

export default {
   data() {
      return {
         footKey: 5
      }
   },
   components: {
      sFooter: Footer
   },
   methods: {
      watchRouter() {
         let path = this.$route.path
         switch (path) {
            case '/':
               this.footKey = 0
               break;
            case '/classList':
               this.footKey = 1
               break;
            case '/QBank':
               this.footKey = 2
               break;
            case '/mine':
               this.footKey = 3
               break;
         
            default:
               break;
         }
      },
      getLoginData() {
         let ck = checkCookie(),currentPath = this.$route.path;
         if (!ck&&currentPath!=='/login') {
            this.$router.push({path: '/login'})
         }
      }
   },
   created () {
      this.watchRouter();
      this.getLoginData();
   }
}
</script>

<style scoped>
.homePage{
   width: 100%;
   height: 100%;
}
</style>