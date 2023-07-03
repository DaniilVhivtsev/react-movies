import React, {useEffect, useState} from 'react';
import Movies from '../components/Movies'
import Preloader from '../components/Preloader';
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=transformers`)
            .then(response => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [])

    const handleSearchMovies = (searchValue, type = 'all') => {
        setLoading(true);

        const typeParameterWithValue = !type || type === 'all' ? '' : `&type=${type}`
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}${typeParameterWithValue}`)
            .then(response => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }

    return (
        <main className="container content">
            <Search searchMovies={handleSearchMovies}/>
            {
                loading
                    ? <Preloader/>
                    : <Movies movies={movies}/>
            }
        </main>
    );
}

export default Main;