import React, {Component} from 'react';
import SearchResultItem from './SearchResultItem';

// Collection of search results
class SearchResults extends Component {

    constructor() {
        super();
    }

    render() {
        var rows = [];
        for (let i = 0; i < 10; i ++) {
            rows.push(<SearchResultItem />);
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default SearchResults;