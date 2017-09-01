// Exercise 6
// Sieve of Eratosthenes

var primenumbers = function(n) {
    var numbers = [], primenumbers = [];
    var stepfactor = Math.sqrt(n);

    for( var i = 2; i < stepfactor; i++){
        if( !numbers[i]) {
            for (var j = i*i; j<=n; j+=i){
                numbers[j] = 'composite';

            }
        }
    }
    for (var i = 2; i<=n; i++){
        if (!numbers[i]){
            primenumbers.push(i);
        }
    }
    return primenumbers;

}

console.log(primenumbers(100));