import React, {Component} from 'react';

// Search result item
// TODO For now this is just the title. Could be expanded to use image, synopsis, etc.
class SearchResultItem extends Component {

    constructor() {
        super();
    }

    render() {
        // TODO move into a function or class to resolve image URLs
        let imageSrc = "https://image.tmdb.org/t/p/w185/" + this.props.itemData.poster_path;
        return (
            <td>
                <img src = {imageSrc} />
            </td>
        );
    }
}

export default SearchResultItem;