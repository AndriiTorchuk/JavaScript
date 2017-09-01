// Exercise 7
// Fibonacci sequence

var Fib = function(n){
    var a = 0, b = 1;
    if (n == 1) {

        console.log(a);

    }
    else if (n == 2) {
        console.log(a);
        console.log(b);

    }
    else {
        var f;
        console.log(a);
        console.log(b);
         for (var i  = 3; i<=n; i++){
         f = a + b;
         a = b;
         b = f;
         console.log(f);
         }
        }
    }
console.log(Fib(10));

