import React, {Component} from 'react';
import SearchResultItem from './SearchResultItem';

// Collection of search results
class SearchResults extends Component {

    constructor() {
        super();
    }

    render() {
        let rows = [];
        for (let i = 0; i < this.props.searchResults.length; i ++) {
            rows.push(<SearchResultItem title = {this.props.searchResults[i].title} />);
        }

        return (
            <table>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default SearchResults;