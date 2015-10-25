/**
 * 所有页面通用的JS代码
 * */

var page = {
    init: function () {
        //进入页面的动画效果
        setTimeout(function () {
            page.setPageState(true)
        }, 400); // 此处的时间需要同 _variable.scss 中的 $page-load-animation 保持一致

        page.resetSiteLinks();
        page.siteNav();
    },
    resetSiteLinks: function () {
        /**
         * 截取链接的默认事件
         * 跳转之前判断是否为站内链接，如果是，那么先完成动画，再跳转
         * */
        var allLinks = document.getElementsByTagName('a');
        for (var i = 0; i < allLinks.length; i++) {
            if (!allLinks[i].getAttribute("target") || allLinks[i].getAttribute("target") != "_blank") {

                allLinks[i].addEventListener("click", function (e) {
                    var that = this;
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                    page.setPageState(false);
                    setTimeout(function () {
                        location.assign(that.href)
                    }, 400); // 此处的时间需要同 _variable.scss 中的 $page-load-animation 保持一致
                });
            }
        }
    },
    setPageState: function (enter) {
        /**
         * 页面状态
         *
         * @param enter 布尔值；true 为进入页面； false 为离开页面
         */
        var body = document.body;

        if (enter) {
            body.className += " load";
        } else {
            body.className = body.className.replace(/ ?load/, "");
        }
    },
    siteNav: function () {
        /**
         * 向下滚动 —— 隐藏导航栏
         * 先上滚动 —— 显示导航栏
         * */
        var scrollContainer = document.getElementById('outer-container'),
            siteNav = document.getElementById('site-menu'),
            lastPos = 0;

        scrollContainer.addEventListener("scroll", function () {
            var top = this.scrollTop;

            if (top == 0) {
                // 若回到顶端，则去除fixed，保持load
                if (siteNav.className.search('fixed') !== -1) {
                    siteNav.className = siteNav.className.replace(/ ?fixed/, "");
                }
                if (siteNav.className.search('load') === -1) {
                    siteNav.className += " load";
                }
            } else {
                if (top > 100) {
                    if (siteNav.className.search('fixed') === -1) {
                        siteNav.className += " fixed";
                    }

                    if (top - lastPos > 0) {
                        // 往下滚动
                        siteNav.className = siteNav.className.replace(/ ?load/, "");
                    } else if (siteNav.className.search('load') === -1) {
                        // 网上滚动
                        siteNav.className += " load";
                    }
                }

                lastPos = top;
            }
        });
    }
};

page.init();