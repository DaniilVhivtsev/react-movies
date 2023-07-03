import React, {useState} from 'react'

function Search(props) {
    const {
        searchMovies = Function.prototype, // значение по умолчанию, если функцию не передадут
    } = props;
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type);
        }
    }

    const handleChangeValue = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    }

    return (
        <>
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            className="validate"
                            placeholder="Search"
                            type="search"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            onKeyDown={handleKey}
                        />
                        <button
                            className="btn search-btn"
                            onClick={() => searchMovies(search)}
                        >
                            Search
                        </button>
                    </div>
                    <label>
                        <input
                            className="with-gap"
                            type="radio"
                            name="type"
                            data-type="all"
                            onChange={handleChangeValue}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            type="radio"
                            name="type"
                            data-type="movie"
                            onChange={handleChangeValue}
                            checked={type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            type="radio"
                            name="type"
                            data-type="series"
                            onChange={handleChangeValue}
                            checked={type === 'series'}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        </>
    );
}

export default Search;