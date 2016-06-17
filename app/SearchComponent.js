import React, {Component} from 'react'
import config from './config.json';

// Top level search component
class SearchComponent extends Component{
    render() {
        return (
            <div>
                {config.greetText}
            </div>
    );
    }
}

export default SearchComponent