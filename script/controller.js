

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
                        <input id="icon_prefix" type="text" class="validate">
                        <label for="icon_prefix">User</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">lock</i>
                        <input id="icon_prefix2" type="password" class="validate">
                        <label for="icon_prefix2">Password</label>
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
                        <a href="#" class="btn waves-effect waves-light col s12" style="background: linear-gradient(90deg, rgba(34,35,64,1) 0%, rgba(65,68,145,1) 100%);">Login</a>
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
            <div class="content_login_container" style="background-color: #ede7f6">
                <div class="col s12 z-depth-6 card-panel content_login_card">
                    ${icon}
                    ${inputs}  
                </div>
            </div>
        `;
    }

    this.sideBar = () => {
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
                    <div class="sidebar_middle_item_label"> Configurações </div>
                </div>
            </div>
        `;

        return `
            <div class="sidebar_container">
                ${sidebar_middle}
                ${sidebar_bottom}
            </div>
        `;
    }

    this.loginScreen = () => {
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