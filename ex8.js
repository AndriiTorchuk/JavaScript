// Exercise 8
// Objects Get/Set

var cat = {
    name: {fist: 'Buffy', last: 'Maffy'},
    color: 'white'
};

Object.defineProperty(
    cat, 'fullName',
    {
        get: function() {
            return this.name.first + ' ' + this.name.last
        },
        set: function(value) {
            var nameParts = value.split(' ');
            this.name.first = nameParts[0];
            this.name.last = nameParts[1]
        }
    }
);

cat.fullName = 'Muddin Pot';
console.log(cat.fullName);
console.log(cat.name.fist);
console.log(cat.name.last);

