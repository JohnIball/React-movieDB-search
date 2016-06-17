import React, {Component} from 'react'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import results from './results';

// Top level search component
class SearchComponent extends Component {

    constructor() {
        super();

        this.handleUserInput = this.handleUserInput.bind(this);

        this.state = {
            searchText: ''
        }
    }

    handleUserInput(searchText) {
        console.log("new search text: " + searchText);
        this.setState({
            searchText: searchText
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    searchText = {this.state.searchText}
                    onUserInput = {this.handleUserInput}
                />
                <SearchResults
                    results = {results}
                />
            </div>
        );
    }
}

export default SearchComponent;
