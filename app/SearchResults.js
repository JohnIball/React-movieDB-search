import React, {Component} from 'react';
import SearchResultItem from './SearchResultItem';

// Collection of search results
class SearchResults extends Component {

    constructor() {
        super();
    }

    render() {
        const items = this.props.searchResults.map((searchResultItemData) => {
            return (<SearchResultItem itemData = {searchResultItemData} />)
        });

        return (
            <table>
                <tbody><tr>{items}</tr></tbody>
            </table>
        );
    }
}

export default SearchResults;