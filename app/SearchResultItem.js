import React, {Component} from 'react';

// Search result item
class SearchResultItem extends Component {

    constructor() {
        super();
    }

    render() {
        if (!this.props.itemData.poster_path) {
            return null;
        }

        // TODO move into a function or class to resolve image URLs
        const imageSrc = "https://image.tmdb.org/t/p/w185/" + this.props.itemData.poster_path;
        return (
            <td>
                <img src = {imageSrc} />
                {this.props.itemData.title}
            </td>
        );
    }
}

export default SearchResultItem;