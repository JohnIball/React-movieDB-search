import React, {Component} from 'react'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

// Top level search component
class SearchComponent extends Component{
    render() {
        return (
            <div>
                <SearchBar />
                <SearchResults />
            </div>
    );
    }
}

export default SearchComponent;
