import React, {Component} from 'react';
import SearchResultItem from './SearchResultItem';

// Collection of search results
class SearchResults extends Component {

    constructor() {
        super();
    }

    render() {
        var rows = [];
        for (let i = 0; i < this.props.results.length; i ++) {
            rows.push(<SearchResultItem name = {this.props.results[i].name} />);
        }

        return (
            <table>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default SearchResults;