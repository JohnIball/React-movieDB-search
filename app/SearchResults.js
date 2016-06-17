import React, {Component} from 'react';
import SearchResultItem from './SearchResultItem';

// Collection of search results
// TODO For now this is a very simple table
class SearchResults extends Component {

    constructor() {
        super();
    }

    render() {
        let items = [];
        for (let i = 0; i < this.props.searchResults.length; i ++) {
            items.push(<SearchResultItem itemData = {this.props.searchResults[i]} />);
        }

        return (
            <table>
                <tbody>{items}</tbody>
            </table>
        );
    }
}

export default SearchResults;