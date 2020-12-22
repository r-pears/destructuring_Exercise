// Object Destructuring 1.
// numPlanets returns 8
// yearNeptuneDiscovered returns 1846

// Object Destructuring 2.
// discoveryYears returns
// {
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };

// Object Destructuring 3.
// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green

// Array Destructuring 1.
// first returns Maya
// second returns Marisa
// third returns Chi

// Array Destructuring 2.
// raindrops returns 'Raindrops on roses'
// whiskers returns 'whiskers on kittens'
// aFewOfMyFavoriteThings returns ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

// Array Destructuring 3.
// numbers returns [10, 30, 20]

// ES2015 Object Destructuring
const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const { a, b } = obj.numbers;

// ES2015 Array Swap
[arr[0], arr[1]] = [arr[1], arr[0]];

// raceResults
const raceResults = ([first, second, third, ...rest]) => {
  {
    first, second, third, rest;
  }
};
