var List = /** @class */ (function () {
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    List.prototype.add = function () {
        var _a;
        var t = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            t[_i] = arguments[_i];
        }
        return (_a = this.data).push.apply(_a, t);
    };
    List.prototype.remove = function (t) {
        var index = this.data.indexOf(t);
        if (index > -1) {
            this.data.splice(index, 2);
        }
    };
    return List;
}());
// adding 
var list = new List(11, 12, 13);
console.log(list.add(144, 78, 123));
console.log(list);
// removing 
console.log(list.remove(78));
console.log(list);
var lis = new List('yash', 'raj');
console.log(lis.add('pollam'));
console.log(lis);
