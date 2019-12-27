### 仿 嗨学App

用滴滴的 cube-ui 仿写的 嗨学App。伸手党福利，如果有相似结构的项目，直接参照设计图修改几下就可完工。

### get 到的 点

* 组件的合理划分，以及提取

	> 并不是说单纯的写个公共样式，相同结构的部分添加相同的公共样式就是划分组件，不是，真的不是

* 公共底（footer）的处理

	> 公用 footer 的处理，非常简单，改变活跃项的图标背景色，字体颜色，其余的不变，仅仅是换个图标，不需要去重新设置这个图标的大小，更不要为难 UI 设计师，让 UI 设计师切图决定一切 => src/components/footer.vue

* 项目页面首次加载的处理

	> 首次加载，只加载我们需要的页面就可以，尤其注意首屏加载的用户体验 => router.js

* vue 项目中视频的播放 => vue-video-player 插件

	> vue-video-player 插件播放视频，这个插件是否支持视频直播，还没验证过。随着现在网络的普及，尤其是 5G 的到来，如果一个程序猿写了好多年项目，依然没有写过任何多媒体相关的应用，那就岌岌可危了。

* 用 cookie 做登录判断

	> 正式项目里非常不推荐，但是自己写 demo 的时候可以用一下。关于 cookie 有效期的存取，我也一直没搞明白，为什么取不到，如果有童鞋对 cookie 精通的，望不吝赐教！拜谢！

* 登录页面的操作优化

  > 扩大了点击区域，利用事件捕获不可阻断的特性，在点击父级区域的时候，直接聚集到输入框，提高用户体验。这是一个小细节，许多输入框太小，不方便点击的操作，用户点击多次不能聚集到输入框的操作，可以利用此方法，提高用户体验

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

附上滴滴 cube-ui 的地址,可参考官网文档进行修改 [cube-ui Document](https://didi.github.io/cube-ui/#/zh-CN).
