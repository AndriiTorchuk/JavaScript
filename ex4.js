// Exercise 4.
// Factorial Function

function fact(x) {
       if(x == 0) {

           console.log(1);
       }
       if(x < 0 ) {

           console.log('undefined');
       }
       for(var i = x; --i; ) {
           x *= i;
       }
       console.log(x);
}
fact(4);

