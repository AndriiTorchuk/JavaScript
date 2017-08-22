// Exercise 3.
// Waiting function

function waitthreesec(){
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {

    }
    console.log('Finished Function');
}

// Wait for the click event

function ClickHand() {
    console.log('Click Event');
}

document.addEventListener('Click', ClickHand);
waitthreesec();
console.log('Finished execution');