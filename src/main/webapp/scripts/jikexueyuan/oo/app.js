/**
 * Created by You on 2017/5/9.
 */
(function(){
    var n ="yours";
    function People(name){
        this._name = name;
    }
People.prototype.say = function(){
    alert("peo-hello"+this._name);
}
    window.People = People;
}());


(function(){
function Student(name){
    this._name = name;
}
Student.prototype = new People();//继承
var superSay = Student.prototype.say;
Student.prototype.say = function(){
    superSay.call(this);
    alert("stu-hello"+this._name);
}
    window.Student = Student;
}());

var s = new Student("you");
s.say();
