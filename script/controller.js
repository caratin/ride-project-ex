function Controller() {
    this.currentPage = 'login';
    this.router = {
        'ADMIN': {
            'login': 'home',
        }
    }

    this.contentLogin = () => {
        let icon = `
            <div class="content_login_icon_container">
                <i class="material-icons medium base_purple_color">directions_car</i>
            </div>
        `;

        let inputs = `
            <div class="">
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="login_input" type="text" class="validate">
                        <label for="login_input">User</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">lock</i>
                        <input id="password_input" type="password" class="validate">
                        <label for="password_input">Password</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <label>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12" style="padding-top: 20px;">
                    <a href="#" class="btn waves-effect waves-light col s12" style="background: linear-gradient(90deg, rgba(34,35,64,1) 0%, rgba(65,68,145,1) 100%);" onclick="Controller.logUser()";>Login</a>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s6 m6 l6">
                      <p class="margin medium-small"><a class="base_purple_color" href="#">Register Now!</a></p>
                    </div>
                    <div class="input-field col s6 m6 l6">
                        <p class="margin right-align medium-small"><a class="base_purple_color" href="#">Forgot password?</a></p>
                    </div>          
                </div>

            </div>
        `;

        return `
            <div id="content_login_container" class="content_login_container" style="background-color: #ede7f6">
                <div class="col s12 z-depth-6 card-panel content_login_card">
                    ${icon}
                    ${inputs}  
                </div>
            </div>
        `;
    }

    this.sideBar = () => {
        var storageDarkMode = localStorage.getItem("dark_mode");
        var darkModeIsActive = false;

        if (storageDarkMode) {
            darkModeIsActive = storageDarkMode === "true" ? true : false;
        }

        var checkDarkModeBoolean = darkModeIsActive ? 'checked' : '';
        var darkModeBackground = darkModeIsActive ? 'base_dark_background' : '';

        let sidebar_top = `
            <h4 class="sidebar_top"> FTT Caronas </h4>
        `;

        let sidebar_middle = `
            <div>
                ${sidebar_top}
                <div class="sidebar_middle_container">
                    <div class="sidebar_middle_item_container">
                        <i class="material-icons Small">home</i>
                        <div class="sidebar_middle_item_label"> Home </div>
                    </div>

                    <div class="sidebar_middle_item_container">
                        <i class="material-icons Small">search</i>
                        <div class="sidebar_middle_item_label"> Buscar Rotas </div>
                    </div>

                    <div class="sidebar_middle_item_container">
                        <i class="material-icons Small">date_range</i>
                        <div class="sidebar_middle_item_label"> Minha Semana </div>
                    </div>

                    <div class="sidebar_middle_item_container">
                        <i class="material-icons Small">report</i>
                        <div class="sidebar_middle_item_label"> Reportar </div>
                    </div>
                </div>
            </div>
        `;

        let sidebar_bottom = `
            <div class="sidebar_bottom_container">
                <div class="sidebar_middle_item_container">
                    <i class="material-icons Small">settings</i>
                    <div class="sidebar_middle_item_label"> Config </div>
                </div>
                <div class="sidebar_middle_item_container" style="padding-top: 0px;">
                    <div class="row" style="width: 100%;">
                        <div class="input-field col s12">
                            <label>
                                <input type="checkbox" ${checkDarkModeBoolean} onchange="Controller.darkModeHandler(this)"/>
                                <span style="color: white; padding-left: 44px;">Dark Mode</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        `;

        return `
            <div id="sidebar_container" class="sidebar_container ${darkModeBackground}">
                ${sidebar_middle}
                ${sidebar_bottom}
            </div>
        `;
    }

    this.loginScreen = () => {
        var sUser = sessionStorage.getItem("loggedUser"),
        loggedUser = null;

         if (sUser) {
            loggedUser = JSON.parse(sUser);
        }

        var content_screen = loggedUser ? Controller.generateLoggedScreen(loggedUser) : Controller.contentLogin();

        return `
            <div class="base_container">
                ${Controller.sideBar()}
                ${Controller.contentLogin()}
            </div>
        `;
    }

    this.initialize = () => {
        document.getElementById('root').innerHTML = Controller.loginScreen();
    }

    this.darkModeHandler = (element) => {
        localStorage.setItem("dark_mode", element.checked);
        document.getElementById('sidebar_container').classList.toggle('base_dark_background');
    }
}

Controller.instance = null;

Controller.getInstance = () => {
    if (!Controller.instance)
        Controller.instance = new Controller();

    return Controller.instance;
}

Controller.initialize = () => {
    Controller.getInstance().initialize();
}
Controller.sideBar = () => {
    return Controller.getInstance().sideBar();
}
Controller.contentLogin = () => {
    return Controller.getInstance().contentLogin();
}
Controller.loginScreen = () => {
    return Controller.getInstance().loginScreen();
}
Controller.darkModeHandler = (element) => {
    return Controller.getInstance().darkModeHandler(element);
}