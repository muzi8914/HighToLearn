/**现在的时间往后加10分钟 */
export const DateTime = ()=> {
   let times = Date.now()
   console.log(times)
   times += 10 * 60 * 1000
   console.log(times)
}

/**验证cookie是否有效 */
export const checkCookie = ()=> {
   let ck = document.cookie
   if (ck) {
      return true
   } else {
      return false
   }
}

/**添加cookie */
export const setCookie = (cvalue)=> {
   let t = new Date()
   let sd = t.setTime(t.getTime() + 10 * 60 * 1000)
   let ckt = new Date(sd)
   document.cookie = 'username' + "=" + cvalue + ";expires=" + ckt + ";path=/";
}
/**删除cookie */

/** */
/** */
/** */
/** */
/** */
/** */