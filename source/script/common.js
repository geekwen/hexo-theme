var page = {
    init: function() {
        //进入页面的动画效果
        setTimeout(function () {
            page.setPageState(true)
        }, 400);

        page.resetSiteLinks();
    },
    resetSiteLinks: function(){
        /**
         * 截取链接的默认事件
         * 跳转之前判断是否为站内链接，如果是，那么先完成动画，再跳转
         * */
        var allLinks = document.getElementsByTagName('a');
        for (var i = 0; i < allLinks.length; i++) {
            if (!allLinks[i].getAttribute("target") || allLinks[i].getAttribute("target") != "_blank"){
                allLinks[i].onclick = function (e) {
                    var that = this;
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                    page.setPageState(false);
                    setTimeout(function(){
                        location.assign(that.href)
                    }, 400); // 此处的时间需要同 _variable.scss 中的 $page-load-animation 保持一致
                };
            }
        }
    },
    setPageState: function(enter){
        /**
         * 页面状态
         *
         * @param enter 布尔值；true 为进入页面； false 为离开页面
         */
        var frames = [
            document.body,
            document.getElementById('site-menu'),
            document.getElementById('loading'),
            document.getElementById('masthead'),
            document.getElementsByTagName('main')[0],
            document.getElementById('mastfoot')
        ];

        frames.forEach(function(item){
            if (item){
                if (enter){
                    item.className += " load";
                }else{
                    item.className = item.className.replace(" load", "");
                }
            }
        });
    }
};

page.init();