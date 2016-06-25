import SearchResultItem from './SearchResultItem';
import React, {Component} from 'react';
import ReactTestUtils from "react-addons-test-utils";
import mockResultItems from './mockResultItems.json';

describe('SearchResultItem', () => {
    it('should render result item', () => {
        const renderedComponent = ReactTestUtils.renderIntoDocument(createSearchResultItem(mockResultItems.mockItem));
        const foundComponents = ReactTestUtils.scryRenderedDOMComponentsWithTag(renderedComponent, "img");
        expect(foundComponents.length).toEqual(1);
    });

    it('should not render img element if no image path available', () => {
        const renderedComponentWithNoImage = ReactTestUtils.renderIntoDocument(createSearchResultItem(mockResultItems.mockItemWithNoImage));
        const foundComponents = ReactTestUtils.scryRenderedDOMComponentsWithTag(renderedComponentWithNoImage, "img");
        expect(foundComponents.length).toEqual(0);
    });
});

function createSearchResultItem(itemData) {
    return (<SearchResultItem itemData = {itemData} />);
}
