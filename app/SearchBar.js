import React, {Component} from 'react';

// Search text input
class SearchBar extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
            </form>
        );
    }
}

export default SearchBar;