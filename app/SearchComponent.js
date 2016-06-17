import React, {Component} from 'react'
import SearchBar from './SearchBar';

// Top level search component
class SearchComponent extends Component{
    render() {
        return (
            <div>
                <SearchBar />
            </div>
    );
    }
}

export default SearchComponent;
