var page = {
    init: function() {
        //加载页面的效果
        setTimeout(function () {
            page.setPageState(true)
        }, 500);

        page.resetSiteLinks();
    },
    resetSiteLinks: function(){
        /**
         * 拿到所有的链接，然后判断是否是站内链接
         * 如果是站内链接，那么跳转之前添加一个动画效果
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
                    }, 500); // 等待动画结束 _variable.scss中的 $page-load-animation
                };
            }
        }
    },
    setPageState: function(enter){
        /**
         * 改变页面状态
         *
         * @param enter 为布尔值，是否进入页面
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