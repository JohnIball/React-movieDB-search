import React, {Component} from 'react';

// Search result
class SearchResultItem extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
            </tr>
        );
    }
}

export default SearchResultItem;