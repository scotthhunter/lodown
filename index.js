'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {collection} An Array or object to be iterated over.
 * @param {action} A function to be applied to each value in the collection
 */
function each(collection, action) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    }
    else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: return any given value unchanged 
 * @param{Any Value} value:given value
 * @return{Any Value} value; return value unchanged.
 */

function identity(value) { // return value unchanged
    return value;
};

module.exports.identity = identity;



/** typeOf: Returns type of value as a string 
 *@param{Value} value:given value
 *@return { value}  returns a string value representing the  data type of vaule passed.
 */

function typeOf(value) {
    if (Array.isArray(value)) {
        return 'array';
    }
    else if (value === null) {
        return 'null';
    }
    else {
        return typeof value;
    }


}

module.exports.typeOf = typeOf;



/** first: Returns the first part array equal to length the passed in the number. 
 *  if an array is not an array it returns an empty
 * array. If a number is not given or it null it will return
 * the first element in the array.
 * @params {Array}The array to iterate over.
 * @params{number} number: number value.
 * @return{array} array; returns an array from index 0 to the passed in number used as the ending index.
 */

function first(array, number) {

    if (!Array.isArray(array) || number < 0) {

        return [];
    }
    if (number === undefined || isNaN(number)) {

        return array[0];

    }
    else {

        return array.slice(0, number);
    }


}

module.exports.first = first;


/**last: Returns the last part of the array using the number passed in as an index. If what is passed in is not an a number it will return an empty array. If there is no number give or its not a number the function will will return
 the last  element in the array
 * @params{array} array to be iterated over
 * @params{number} used as a starting point to beginning for return of new array
 @return{ Array} Returns an empty array( if above stated condition are not met)   or the last element of array (if condition are not met)  or a new array with the starting point of the number passed in to the end.
 */

function last(array, number) {

    if (!Array.isArray(array) || number < 0) {

        return [];

    }
    if (number > array.length) {

        return array;

    }

    if (number === undefined || isNaN(number)) {

        return array[array.length - 1];



    }
    else {

        return array.slice(array.length - number);
    }


}

module.exports.last = last;


/**indexOf Loops over array an returns the index in the array
for the first occurance of the value passed in.* Returns - 1
if the value is not in the  array.
@params { array } to be iternated over.
@params { value } is the value to be located in the array
@return{index of value} or {-1 }  Will return index if the value is found in the array and -1 if if it is not found.
*/

    function indexOf(array, value) {

        for (var i = 0; i < array.length; i++) {


            if (array[i] === value) {

                return i;
            }


        }



        return -1;

    }

module.exports.indexOf = indexOf;




/** contains: Returns true if the array contains the value.
 returns false otherwise.
@params{Array} to be iternated over. 
@params{value} value used to search the array
@return{result} A boolean value.True is returned if the value is found the array if not false is returned.
 */
 
function contains(array, value) {
    let result = false;
    for (let i = 0; i < array.length; i++) {

        result = value === array[i] ? true : result;

    }

    return result;

}

module.exports.contains = contains;





/**unquie: Returns a new array with all the new duplicates of the array passed in removed
    Uses the IndexOf method to determine if there is 
    duplicate inside the array and meet a conditional
@params {Array} array to be iterated over
@return{result}returns a new array that has duplicates removed.
*/

function unique(array) {
    // create reults array
    const result = [];
    // loop array
    for (let i = 0; i < array.length; i++) {

        if (indexOf(result, array[i]) === -1) {

            result.push(array[i]);
        }
    }


    return result;

}

module.exports.unique =unique ;


/**filter:Returns a new array of elements for which calling function returned true.
@params{array} to be iterated over
@params{func} function to be exected on each element in the array and is defined function by  the caller.
@return{newArr} New array with the results of the function applied to each element.
**/

function filter(array, func) {

    var newArr = [];

    function changer (e, index, array) {

        if (func(e, index, array)) {
            
            newArr.push(e);


        }


    }

    each(array, changer);



    return newArr;

}


module.exports.filter = filter;


/** reject:

*   Executes a function for each element in the array passing the arguments:
*   the element, it's index, and the array
*   returns a new array of elements for which calling function returned false
* @params{array}to be iterated over.
* @params{funk} function to be executed on elements of array and defined by caller.
* @return{newArr} a new array where executing the function evaluates to false
*/


function reject(array, funk) {

  //  var newArr = [];

    function nds(e, index, array) {

        if (!funk(e, index, array)) {

            newArr.push(e);



        }


    }
   return filter(array, nds);


    //return newArr;


}
module.exports.reject = reject;



/** partition
  For each element in an array it executed a function and pushed the elements that evaluate to false in one array and the ones that evaluate to true into another and then pushes both into one array results in to one large array with two sub arrays.
  
  @params {array} the array to be interated over
  @params {funk} function to be exectued over each element in array.
  @return{arr3} returns array containing to sub arrays one sub array contain true values one containing false values of the function execution.
*/

function partition(array, funk) {

    var arr1 = [];
    var arr2 = [];
    var arr3 = [];

    function jj(element, key, array) {

        if (funk(element, key, array)) {

            arr1.push(element);
        }

        if (!funk(element, key, array))

            arr2.push(element);
    }

    each(array, jj);

    arr3.push(arr1, arr2);
    return arr3;


}

module.exports.partition = partition;


/** map The map function creates a new array with the results of calling a function for every array element.
The map function calls the provided function once for each element in an array, in order.

 @params {collection} Array or object to be iterated over.
 @params{funk} function to be executed on collection defined by caller.
 @return{Array} new array or array of objects with the results of the function being executed on each element.
 */



function map(collection, funk) {

    var resl = [];

    function test(element, key, collection) {

        if (Array.isArray(collection)) {



            resl.push(funk(element, key, collection));

        }

        else {


            resl.push(funk(element, key, collection));

        }




    }

    each(collection, test);
    return resl;


}

module.exports.map = map;

/** _.pluck
@params{ An array of objects} to be iternated over.
@params{ property} Object property passed in.
@return {Array of object} Containing the the value of the property searched for in object

*/


function plunk(array, property) {


    var newA = [];


    function toast(element, key, collection) {



        if (key == property && element != undefined) {



            newA.push(element);

        }

    }
}
  module.exports.plunk = plunk;

/**every
 * Every checks if all elements in an array pass a test(provided as a function). The every() method executes 
 the function once for each element present in the array: If it finds an array element where
 the function returns a false value, every() returns false (and does not check the remaining values) . If the function in undefined  the every() it will check if the collection is valid if its not it will return false.
 
@params{collection}array or object to be iternated over.
@params{funk} function to be executed on each element of the array.
@return{boolen} If the successfully executes the function on each element in the collection it returns true otherwise false.
 */



function every (collection, funk) {

if (funk === undefined) {

if (Array.isArray(collection)) {

for (var i = 0; i < collection.length; i++) {

if (!collection[i]) {
return false
};

}
} else {

for (var key in collection) {

if (!collection[key]) {

return false;
}
}

}




} else {

if (Array.isArray(collection)) {

for (var i = 0; i < collection.length; i++) {


if (!funk(collection[i], i, collection)) {

return false
};

}
} else {

for (var key in collection) {

if (!funk(collection[key], key, collection)) {

return false;
}
}


}

}

return true;
};

module.exports.every = every;






/** reduce
Reduce applies a provided function to each element the provided array to
 reduce the array to a single value. The variable  parameter is used to store the final result
 of the function call on the array elements.
@params{ Array} to be iternated over.
@params{funk} a function to be executed over each element in the array.
@params{seed} an intiail value provide if not provide will default to the first element in the aray
@return{previous} Returns the value of the variable passed in after the function is executed on it.
 **/


function reduce(array, funk, seed) {
    var counter = 0;
    var previous = seed
    if (seed == undefined) {
        previous = array[0];
        counter = 1;
    }


    for (var i = counter; i < array.length; i++) {

        previous = funk(previous, array[i], i);

    }
    return previous;
}

module.exports.reduce = reduce;




/** extend Loops over an array of objects 
*  and copies the properties from objs to obj1
* If more objects are passed in it copy their properties to object 1 as well,in the order they are passed in.
*   Return the update <object 1>
* @param{ Obj1} An object that you want to assign new values to.
*@param {...Obj} An object or objects you want to extract values from and assign to Obj1
@return{obj1} Orignal object updated with new properties 
*  
*/

function extend(obj1, ...objs) {
   for (var i = 0; i < objs.length; i++ ) {
       Object.assign(obj1, objs[i]);
   }
   return obj1;
};

module.exports.extend = extend;



/** some: Calls a function for every element of collection with the paramaters:if <collection> is an array:
*  current element, it's index, collection
*  if collection is an object:
*  current value, current key, collection
*  If the returned value of calling function is true for at least one element, return true
*   If it is false for all elements, return false
*   If function is not provided it will return true if at least one element is truthy, otherwise return false.
* @param{collection} An Array or Object to be iternated over
* @param{funk} A function to be executed on each element of the array defined by the caller
* return{boolean} True or false value as described above.
*/
function some (collection, funk) {

if (funk === undefined) {

if (Array.isArray(collection)) {

for (var i = 0; i < collection.length; i++) {

if (collection[i]) {
return true 
};

}
} else {

for (var key in collection) {

if (collection[key]) {

return true;
}
}

}




} else {

if (Array.isArray(collection)) {

for (var i = 0; i < collection.length; i++) {


if (funk(collection[i], i, collection)) {

return true
};

}
} else {

for (var key in collection) {

if (funk(collection[key], key, collection)) {

return true;
}
}


}

}

return false;
};



module.exports.each = each; 





