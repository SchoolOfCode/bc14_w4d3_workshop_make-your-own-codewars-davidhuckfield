//👉 Write your tests below here:

import { test, expect } from '@jest/globals';
import { feedSancho } from './main.js';

describe('Testing if the returned array of foods for Sancho contains only fruit & vegetables', () => {
    test('Should return an array with only the food objects that are fruit or vegetable', () => {
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
  
    test('Should return an empty array', () => {
        //ARRANGE
        //Set up test data
        let testData = [
            {name: 'sausage', type: 'meat'},
            {name: 'cheese', type: 'dairy'},
            {name: 'chicken', type: 'meat'}
        ] 
        //ACT
        //Set up expected response

        let expected = [];
        //ASSERT
        //Check if both are equal
        expect(feedSancho(testData)).toEqual(expected);
    });
  
    test('Should return all objects from the array', () => {
      //ARRANGE
        //Set up test data
        let testData = [
            {name: 'apple', type: 'fruit'}, 
            {name: 'banana', type: 'fruit'}, 
            {name: 'carrot', type: 'vegetable'}, 
            {name: 'dandelion', type: 'vegetable'}
           ] 
        //ACT
        //Set up expected response

        let expected = [
            {name: 'apple', type: 'fruit'}, 
            {name: 'banana', type: 'fruit'}, 
            {name: 'carrot', type: 'vegetable'}, 
            {name: 'dandelion', type: 'vegetable'} 
        ]
        //ASSERT
        //Check if both are equal
        expect(feedSancho(testData)).toEqual(expected);
    });
  });




