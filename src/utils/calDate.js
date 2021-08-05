function timeFn(timeStr) { //di作为一个变量传进来
    //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    // var dateBegin = new Date(d1.replace(/-/g, "/"));//将-转化为/，使用new Date

    var dateBegin = new Date(timeStr)

    var dateEnd = new Date(); //获取当前时间
    // var monthDiff = Math.floor(dateDiff / (30*24 * 3600 * 1000));//计算出相差天数
    // if (monthDiff>=1) {
    //     return dayDiff+'月前';
    // }
    var dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
    if (dayDiff / (30*12) >= 1) {
        return Math.floor(dayDiff / (30*12)) + ' 年前';
    }

    if (dayDiff / 30 >= 1) {
        return Math.floor(dayDiff / 30) + ' 月前';
    }
    if (dayDiff >= 1) {
        return dayDiff + ' 天前';
    }
    var leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000)) //计算出小时数
    if (hours >= 1) {
        return hours + ' 小时前';
    }
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000)) //计算相差分钟数
    if (minutes >= 1) {
        return minutes + ' 分钟前';
    }
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000)
    if (seconds >= 1) {
        return hours + ' 秒前';
    }
}

// console.log(timeFn("2021-08-05T00:00:48.703Z"));
export default timeFn