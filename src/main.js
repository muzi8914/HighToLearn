// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.

// import Vue from 'vue'
import { Vue } from './api/config'
import App from './App'
import router from './router'

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
