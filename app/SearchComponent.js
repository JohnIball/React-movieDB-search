import React, {Component} from 'react'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

// Top level search component
class SearchComponent extends Component {

    constructor() {
        super();

        this.handleUserInput = this.handleUserInput.bind(this);
        this.clear = this.clear.bind(this);

        this.clear();
    }

    // Get the user input from the search box
    handleUserInput(searchText) {
        this.setState({
            searchText: searchText
        });

        if (searchText === "") {
            // Clear, otherwise we get junk results
            this.clear();
        } else {
            // Get the first page of movies. Page size is 20, which is fine ....
            theMovieDb.search.getMovie({"query": encodeURIComponent(searchText), "include_adult":false},
                (res) => {
                    this.setState({
                        searchResults: JSON.parse(res).results
                    });
                },
                // Failure to load ....
                (res) => {
                    this.clear();
                    console.log("Error calling TMDb: " + res);
                    // TODO - what else should we do?
                });
        }
    }

    clear() {
        this.state = {
            searchText: '',
            searchResults: []
        }
    }

    render() {
        return (
            <div>
                <SearchBar
                    {...this.state}
                    onUserInput = {this.handleUserInput}
                />
                <SearchResults
                    {...this.state}
                />
            </div>
        );
    }
}

export default SearchComponent;
