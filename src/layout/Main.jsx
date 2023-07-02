import React from 'react';
import Movies from '../components/Movies'
import Preloader from '../components/Preloader';
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=transformers`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((err) => {
                console.log(err);
                this.setState({loading: false});
            });
    }

    handleSearchMovies = (searchValue, type = 'all') => {
        this.setState({loading: true})

        const typeParameterWithValue = !type || type === 'all' ? '' : `&type=${type}`
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}${typeParameterWithValue}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false})).catch((err) => {
            console.log(err);
            this.setState({loading: false});
            });
    }

    render() {
        const {movies, loading} = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.handleSearchMovies}/>
                {
                    loading
                        ? <Preloader/>
                        : <Movies movies={movies}/>
                }

            </main>
        );
    }
}

export default Main;