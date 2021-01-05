import React, { Component } from 'react'
import { Title } from '../component/title'
import { SearchForm } from '../component/searchForm'
import { MoviesList } from '../component/moviesList';

export class Home extends Component {

    state = { userSearch: false, results: [] }

    _handResults = (results) => {
        this.setState({ results, userSearch: true })
    }

    _renderResults() {
        return this.state.results.length === 0
            ? <p>Sorry! :( </p>
            : <MoviesList movie={this.state.results} />

    }
    render() {

        return (
            <div>
                <Title >Search Movies</Title>

                <div className='SearchForm-wappers'>
                    <SearchForm onResults={this._handResults} />
                </div>
                {this.state.userSearch
                    ? this._renderResults()
                    : <small> Introducir nombre de la película a buscar</small>
                }

            </div>
        )
    }

}
