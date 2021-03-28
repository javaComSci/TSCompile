var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("SimpleClass has id " + this.id);
    };
    return SimpleClass;
}());
var c = new SimpleClass();
c.id = 5;
c.print();
