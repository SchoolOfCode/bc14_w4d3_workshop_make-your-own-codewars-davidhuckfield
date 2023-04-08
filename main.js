/* 
👉 Write your kata here!

Feed Sancho!

Sancho the tortoise can only eat fruits & vegetables. He can't eat meat or dairy.

You have to sort through all the food objects in the fridge and only return the foods that Sancho can eat.

Write a function that takes an array of objects and returns a new array with only the foods whose type is fruits or vegetables.

You will only get input that is an array of food objects, examples below:

E.g if input is [
    {name: 'apple', type: 'fruit'}, 
    {name: 'banana', type: 'fruit'}, 
    {name: 'carrot', type: 'vegetable'}, 
    {name: 'cheese', type: 'dairy'},
    {name: 'chicken', type: 'meat'}
] 
then the output should be [
    {name: 'apple', type: 'fruit'}, 
    {name: 'banana', type: 'fruit'}, 
    {name: 'carrot', type: 'vegetable'}, 
]

*/

//👉 Write the function your CodeWarriors will start with below here:

// function feedSancho(foods) {
//     // 👉 Write your code here!
// }


// potential answer - delete before final update!

// let testData = [
//     {name: 'apple', type: 'fruit'}, 
//     {name: 'banana', type: 'fruit'}, 
//     {name: 'carrot', type: 'vegetable'}, 
//     {name: 'cheese', type: 'dairy'},
//     {name: 'chicken', type: 'meat'}
// ] 

export function feedSancho(foods) {
    // copilot suggested answer
    // return foods.filter(food => food.type === 'fruit' || food.type === 'vegetable');
    //what I would do: 
    let sanchoFoods = [];
    for (let i=0; i<foods.length; i++) {
        if (foods[i].type === 'fruit' || foods[i].type === 'vegetable') {
            sanchoFoods.push(foods[i]);
        }
    }
    return sanchoFoods;
}

// console.log(feedSancho(testData));