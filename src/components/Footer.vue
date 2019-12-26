<template>
   <ul class="footer WeirdBox page-wrap wrap-between">
		<li v-for="(item,index) in footer" :key="index" class="wrap-content page-wrap wrap-directe wrap-center wrap-vcenter" @click="target(item,index)">
			<div class="activeIcon page-wrap wrap-center wrap-vcenter" :class="{'activeBg':index==activeIndex}">
				<img v-if="index==activeIndex" :src="activeImg">
				<img v-else :src="item.icon">
			</div>
			<p class="page-wrap wrap-center" :class="{'active':index==activeIndex}">{{item.name}}</p>
		</li>
	</ul>
</template>

<script>
const list = [
   {
      name: '发现',
      icon: '../../static/img/footer/f.png',
		router: '/'
   },
   {
      name: '课程',
      icon: '../../static/img/footer/k.png',
		router: '/classList'
   },
   // {
   //    name: '项目',
   //    icon: '../../static/img/footer/f.png',
   //    activeImg: '',
	// 	router: '/vacation'
   // },
   {
      name: '题库',
      icon: '../../static/img/footer/b.png',
		router: '/QBank'
   },
   {
      name: '我的',
      icon: '../../static/img/footer/g.png',
		router: '/mine'
   }
]

export default {
   props: {
      currentIndex: {
         type: Number,
         default: 0
      },
   },
   data () {
      return {
         footer: list,//footer列表
         activeImg: '../../static/img/footer/f.png',
         activeIndex: 0,//活动图标
      }
   },
   methods: {
      target(i,k){
         if (this.activeIndex != k) {
            this.activeIndex = k
            this.activeImg = i.icon
            this.$router.replace({path: i.router})
         }
      },
      changePath(k){
         this.activeIndex = k
			this.activeImg = this.footer[k].icon
      }
   },
   mounted () {
      // console.log(this.currentIndex)
      this.changePath(this.currentIndex)
   },
}
</script>

<style scoped>
.footer{
	font-size: 10px;
	color: #969696;
	padding: 5px 5px 0;
	background-color: #FFF;
	box-shadow: 0px -5px 25px 0px rgba(0,0,0,.05);
}
.activeIcon{
	width: 24px;
   height: 24px;
   margin-bottom: 5px;
   border-radius: 100%;
   background-color: #009EFF;
}
.activeIcon img{
   width: 100%;
   border-radius: 100%;
}
.active{
   color: #444444;
   font-weight: bold;
}
.activeBg{
   background-color: crimson!important;
}
</style>