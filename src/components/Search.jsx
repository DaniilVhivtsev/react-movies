import React from 'react'

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleChangeValue = (event) => {
        this.setState({[event.target.name]: event.target.dataset.type}, () => {
            this.props.searchMovies(this.state.search, this.state.type)
        });
    }

    render() {
        const { type } = this.state;
        return (
            <>
                <div className="row">
                    <div className="col s12">
                        <div className="input-field">
                            <input
                                className="validate"
                                placeholder="Search"
                                type="search"
                                value={this.state.search}
                                onChange={(event) => this.setState({search: event.target.value})}
                                onKeyDown={this.handleKey}
                            />
                            <button
                                className="btn search-btn"
                                onClick={() => this.props.searchMovies(this.state.search)}
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
                                onChange={this.handleChangeValue}
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
                                onChange={this.handleChangeValue}
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
                                onChange={this.handleChangeValue}
                                checked={type === 'series'}
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </>
        );
    }
}

export default Search;