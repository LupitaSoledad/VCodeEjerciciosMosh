import React, { Component } from 'react';

export default class Froms extends Component {
    handleClick = (e) => {
        e.preventDefault()
        const name = this.inputName.value
        const twitter = this.inputTwitter.value
        console.log({ name, twitter })
    }
    render() {
        return (
            <div>
                <h1>Formularios</h1>
                <form>
                    <p>
                        <label>Nombre: </label>
                        <input
                            id='name'
                            name='userName'
                            placeholder='Introduce tu nombre'
                            ref={InputEvent => this.inputName = InputEvent}
                        />
                    </p>
                    <p>
                        <label>Twitter: </label>
                        <input
                            id='twitter'
                            name='twitterAcount'
                            placeholder='Introduce tu Twitter'
                            ref={InputEvent => this.inputTwitter = InputEvent}
                        />
                    </p>
                    <p>
                        <button onClick={this.handleClick} id='button' name='buttonRegistrar'>Registrar</button>
                    </p>

                </form>

            </div>
        )
    }
}