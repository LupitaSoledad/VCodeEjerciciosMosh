import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../component/buttonBackToHome'




const API_KEY = '69235d09'
export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }
    _fetchMovie({ id }) {

        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log({ movie })
                this.setState({ movie })

            })
    }

    _goBack() {
        window.history.back()
    }

    componentDidMount() {
        console.log(this.props)
        const { movieId } = this.props.match.params
        this._fetchMovie({ id: movieId })
    }



    render() {
        const { Title, Actors, Metascore, Plot }
            = this.state.movie


        return (
            <div>
                <ButtonBackToHome />

                <h1> {Title}</h1>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}