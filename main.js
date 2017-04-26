'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    return arr.reduce(function (prev, current){
      return prev + current;
    }, base)

  },

  someObjsContainProp: (arr, prop) => {
    return arr.some(function(el,i){               //why is 'some' the correct higher order function??
      if (el.hasOwnProperty(prop)){
        return true
      }
      return false;
    });
  },

  convertNameArrayToObject: (arr) => {

    return arr.map(function(el,i,arr){

      var obj = {};
      obj['first'] = el[0];
      obj['last'] = el[1];
      return arr[i]=obj;
    })

  },

  objContainsProp: (arr, prop) => {
    return arr.every(function(el,i){               //why is 'every' the correct higher order function??
      if (el.hasOwnProperty(prop)){
        return true
      }
      return false;
    });

  },

  stringMatch: (arr, str) => {

    return arr.filter(function(el, i){
      if (el.includes(str)){
        return el;
      }
    });
  }


};
