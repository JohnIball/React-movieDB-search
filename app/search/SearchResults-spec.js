import SearchResults from './SearchResults';
import SearchResultItem from './SearchResultItem';
import React, {Component} from 'react';
import ReactTestUtils from "react-addons-test-utils";
import mockResults from './mockResults.json';

describe('SearchResults', () => {
    it('should render results', () => {
        const renderedComponent = ReactTestUtils.renderIntoDocument(createSearchResults(mockResults.results));
        const foundComponents = ReactTestUtils.scryRenderedComponentsWithType(renderedComponent, SearchResultItem);
        // One result component should be created for each result item
        expect(foundComponents.length).toEqual(mockResults.results.length);
    });
});

function createSearchResults(resultsData) {
    return (<SearchResults searchResults = {resultsData} />);
}
