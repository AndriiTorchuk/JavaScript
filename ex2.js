// Exercise 2.
// Scope Chain

function a() {                  // execution 3
    function b() {              // execution 5
        console.log(myvar);     // execution 6
    }
    var myvar = 2;              // execution 7
    b();                        // execution 4
}

var myvar = 1;                  // execution 1
a();                            // execution 2
b();                            // execution 8
