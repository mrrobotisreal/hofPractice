// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  // create counter variable and set it to 0
  var mOf5 = 0;
  // use _.each to iterate through numbers array
  _.each(numbers, function(item) {
    // check if current item is a multiple of 5
    if (item % 5 === 0) {
      // if so, increment counter variable one time
      mOf5++;
    }
  });
  // upon completion of iterations, return counter variable
  return mOf5;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  // return the evaluated result of calling _.filter
  return _.filter(fruits, function(fruit) {
    // check if fruit is strictly equal to targetFruit
    if (targetFruit === fruit) {
      // if so, return fruit
      return fruit;
    }
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  // return the evaluated result of calling _.filter
  return _.filter(fruits, function(fruit) {
    // check if the
    if (letter === fruit[0]) {
      return fruit;
    }
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  // return the evaluated result of calling _.filter
  return _.filter(desserts, function(dessert) {
    // check if item is related to cookies
    if (dessert.type.includes('cookie')) {
      return dessert;
    }
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var total = 0;
  return _.reduce(products, function(total, item) {
    return total + +item.price.slice(1);
  }, total);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  return _.reduce(desserts, function(accObj, dessert) {
    if (accObj[dessert.type] === undefined) {
      accObj[dessert.type] = 1;
    } else {
      accObj[dessert.type]++;
    }
    return accObj;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  return _.reduce(movies, function(acc, movie) {
    if (movie.releaseYear > 1990 && movie.releaseYear < 2000) {
      acc.push(movie.title);
    }
    return acc;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var canWatch = false;
  _.reduce(movies, function(total, movie) {
    if (movie.runtime <= timeLimit) {
      canWatch = true;
    }
  }, 0);
  return canWatch;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(fruit) {
    return fruit.charAt(0).toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  return _.map(desserts, function(dessert) {
    dessert.glutenFree = true;
    if (dessert.ingredients.includes('flour')) {
      dessert.glutenFree = false;
    }
    return dessert;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function(item) {
    var discount = +item.price.slice(1) * coupon;
    item.salePrice = +item.price.slice(1) - discount;
    item.salePrice = '$' + item.salePrice.toFixed(2);
    return item;
  });
};
