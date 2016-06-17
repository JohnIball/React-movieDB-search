import React, {Component} from 'react';

// Search result item
// TODO For now this is just the title. Could be expanded to use image, synopsis, etc.
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