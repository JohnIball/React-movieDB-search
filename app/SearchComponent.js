import React, {Component} from 'react'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import results from './results';

// Top level search component
class SearchComponent extends Component{

    render() {
        return (
            <div>
                <SearchBar />
                <SearchResults results = {results} />
            </div>
        );
    }
}

export default SearchComponent;
