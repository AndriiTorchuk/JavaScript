// Exercise 1.
// Global execution context

function b() {      // execution 6
  var myvar;        // execution 7
  }
function a() {      // execution 3
  var myvar = 2;    // execution 4
  b();              // execution 5
  }
var myvar = 1;      // execution 1
a();                // execution 2
