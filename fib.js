/**
 * Created by albal on 06.07.2016.
 */

function fib(n) {
    if (n < 3) {
        return 1;
    }
    
    else {
        return fib(n-1) + fib(n-2);
    }
}

module.exports.fib = fib;
