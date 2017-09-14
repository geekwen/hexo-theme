(function () {
    var last_theme = localStorage.getItem('theme'),
        $$body = document.body,
        $$theme_btn = document.querySelectorAll('#theme-selector button');

    if (last_theme) {
        setTheme(last_theme);
    }

    $$theme_btn.forEach(function (btn) {
        btn.addEventListener('click', changeTheme);
    });

    function getThemeName() {
        return $$body.getAttribute('data-theme');
    }

    function changeTheme(e) {
        setTheme(e.target.parentElement.getAttribute('data-theme'), 'click');
    }

    function setTheme(theme_name, type) {
        if (theme_name !== getThemeName()) {
            // click 的时候才执行切换动画
            if (type === 'click') {
                $$body.className = 'hide';
                setTimeout(function () {
                    action();
                    $$body.className = '';
                }, 500);
            }
            else {
                action();
            }
        }

        function action() {
            $$body.setAttribute('data-theme', theme_name);
            localStorage.setItem('theme', theme_name);
        }
    }
}());