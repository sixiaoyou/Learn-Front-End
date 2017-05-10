/**
 * Created by You on 2017/5/10.
 */

(function() {
    var n = "ime"
    function Person(name) {
        var _this = {};
        _this._name = name;
        _this.sayHello = function () {
            alert("Hello" + _this._name+n);
        }
        return _this;
    }
    window.Person = Person;
}());

function Teacher(name){
    var _this = Person(name);
    var superSay = _this.sayHello();
    _this.sayHello = function(){
        superSay.call(_this);
        alert("Thello"+_this._name);
    }
    return _this;
}

var t = Teacher("you");
t.sayHello();