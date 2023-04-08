//👉 Write your tests below here:

import { test, expect } from '@jest/globals';
import { feedSancho } from './main.js';

test('Should return an array of objects whose type is either fruit or vegetable', function () {
//ARRANGE
//Set up test data

let testData = [
    {name: 'apple', type: 'fruit'}, 
    {name: 'banana', type: 'fruit'}, 
    {name: 'carrot', type: 'vegetable'}, 
    {name: 'cheese', type: 'dairy'},
    {name: 'chicken', type: 'meat'}
] 
//ACT
//Set up expected response

    let expected = [
        {name: 'apple', type: 'fruit'}, 
        {name: 'banana', type: 'fruit'}, 
        {name: 'carrot', type: 'vegetable'}, 
    ]


//ASSERT
//Check if both are equal

    expect(feedSancho(testData)).toEqual(expected);
  });