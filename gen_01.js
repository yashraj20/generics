var Person = /** @class */ (function () {
    function Person(first, last) {
        this.firstname = first;
        this.lastname = last;
    }
    Person.prototype.getfirst = function () {
        return this.firstname;
    };
    Person.prototype.getlast = function () {
        return this.lastname;
    };
    return Person;
}());
var obj = new Person('Yash', 'Raj');
console.log(obj.getfirst());
console.log(obj.getlast());
console.log(obj);
