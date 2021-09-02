let checkLogin = (vue) => {
    // 1.不知道用户是否登录
    // 2.不知道用户账号权限

    // 路由跳转
    if (id == 0) {
        // 学生账号
        let user = JSON.parse(localStorage.getItem("student"))
        if (user) {
            // 已登录
            let time = newDate.getTime() * 1000
            if (user.expire_time >= time) {
                // token 过期
                window.location = parentPath + 'studentLogin.html'
            } else {
                //  window.location = parentPath + 'schoolRes/studdent/index.html'
            }
        } else {
            // 没有登录
            window.location = parentPath + 'studentLogin.html'
        }
    }
    if (id == 1) {
        // 教师及以上账号
        let user = JSON.parse(localStorage.getItem("deareduUser"))
        if (user) {
            // 已登录
            let time = newDate.getTime() * 1000
            if (user.expire_time >= time) {
                // token 过期
                window.location = parentPath + 'login.html'
            } else {
                switch (label) {
                    case 1:
                        // 1是区域用户 5是县级教育局用户
                        if (user.user_type == 1 || user.user_type == 5) {

                        } else {
                            window.history.go(-1);
                        }
                        break;
                    case 2:
                        if (user.user_type <= 2 || user.user_type == 5) {

                        } else {
                            window.history.go(-1);
                        }
                        break;
                    case 3:
                        if (user.user_type <= 3 || user.user_type == 5) {

                        } else {
                            window.history.go(-1);
                        }
                        break;
                }
                // 管控非权限用户，在其他页面通过url手动输入main.html访问：区域管理统计页面
                if (label == 'index') { window.location = parentPath + 'resg/index.html' }
            }
        } else {
            // 没有登录
            window.location = parentPath + 'login.html'
        }
    }
}
export default checkLogin