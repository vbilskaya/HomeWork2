/**
 * Created by Lera on 16.03.2017.
 */
function sum(a) {

    var currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

console.log( sum(1)(2) );
console.log( sum(1)(2)(3) );