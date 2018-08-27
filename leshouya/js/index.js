
// banner
// swiper      
$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
    // 如果需要分页器
    pagination: {
        // el: '.swiper-scrollbar',
        el: '.swiper-pagination',
        clickable :true,
    },
    autoplay: {
        delay: 5000,//1秒切换一次
    },
    loop: true,
    // 手抓
    // grabCursor : true,
    // 自动切换
    disableOnInteraction: false,

    });
    //鼠标覆盖停止自动切换
    mySwiper.el.onmouseover = function(){
        mySwiper.autoplay.stop();
    }      
    mySwiper.el.onmouseout = function(){
        mySwiper.autoplay.start();
    }   
})