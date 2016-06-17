import React, {Component} from 'react';

// Search result
class SearchResultItem extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <tr>
                <td>{this.props.title}</td>
            </tr>
        );
    }
}

export default SearchResultItem;