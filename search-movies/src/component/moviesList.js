import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Movies } from './movie'


export class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }
    render() {

        const { movie } = this.props

        return (
            < div className='MoviesList' >

                {movie.map(movie => {
                    return (
                        <div key={movie.imdbID} className='MoviesList-items'>
                            <Movies

                                id={movie.imdbID}
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster}

                            />
                        </div>)
                })}
            </ div>

        )



    }
}