import React, {Component} from 'react';
import theMovieDb from "../dist/themoviedb";

// Search result item
class SearchResultItem extends Component {

    constructor() {
        super();
    }

    render() {
        if (!this.props.itemData.poster_path) {
            return null;
        }

        const imageSrc = theMovieDb.common.getImage({"file": this.props.itemData.poster_path, "size":"w185"});
        return (
            <td>
                <img src = {imageSrc} />
                {this.props.itemData.title}
            </td>
        );
    }
}

export default SearchResultItem;