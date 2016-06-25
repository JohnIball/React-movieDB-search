import React, {Component} from 'react';

// Search text input
class SearchBar extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInput(
            this.refs['searchTextInput'].value
        );
    }

    render() {
        return (
            <form>
                <input
                    type = "text"
                    placeholder = "Search..."
                    value = {this.props.searchText}
                    ref = "searchTextInput"
                    onChange = {this.handleChange}
                />
            </form>
        );
    }
}

export default SearchBar;