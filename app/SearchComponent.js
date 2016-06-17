import React, {Component} from 'react'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

// Top level search component
class SearchComponent extends Component {

    constructor() {
        super();

        this.handleUserInput = this.handleUserInput.bind(this);
        this.onSearchReturned = this.onSearchReturned.bind(this);
        this.onSearchFailed = this.onSearchFailed.bind(this);

        this.state = {
            searchText: '',
            searchResults: [{title: ""}]
        }
    }

    handleUserInput(searchText) {
        console.log("new search text: " + searchText);

        this.setState({
            searchText: searchText
        });

        // TODO search for other things apart from movies?
        theMovieDb.search.getMovie({"query": searchText}, this.onSearchReturned, this.onSearchFailed);
    }

    onSearchReturned(res) {
        let searchReturnJSON = JSON.parse(res);

        this.setState({
            searchResults: searchReturnJSON.results
        });
    }

    onSearchFailed() {
        // TODO
    }

    render() {
        return (
            <div>
                <SearchBar
                    searchText = {this.state.searchText}
                    onUserInput = {this.handleUserInput}
                />
                <SearchResults
                    searchResults = {this.state.searchResults}
                />
            </div>
        );
    }
}

export default SearchComponent;
