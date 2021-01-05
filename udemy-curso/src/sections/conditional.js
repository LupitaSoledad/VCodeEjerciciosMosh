import React, { Component } from 'react';


class LoginButton extends Component {
    render() {
        return <button>Iniciar Sesión</button>
    }
}

class LogoutButton extends Component {
    render() {
        return (
            <div>
                <p>Bienvenido, Usuario!</p>
                <button>Cerrar sesión</button>
            </div>
        )
    }
}

function conditionalRedending(isUserLogged) {
    if (isUserLogged) {
        return <LoginButton />
    } return <LogoutButton />

}

//para exportar el .js que se llama conditional en la carpeta de section
export default class ConditionalSection extends Component {
    constructor() {
        super()
        this.state = { isUserLogged: true }
    }
    render() {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.isUserLogged
                    ? <LogoutButton />
                    : <LoginButton />}

            </div>
        )
    }

}
