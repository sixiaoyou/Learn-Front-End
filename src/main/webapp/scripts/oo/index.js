/**
 * Created by Administrator on 2017/5/2.
 */


function A(){
    this.sayHehe = function(){
        console.log("Hehe jikexueyuan");
    };
}

A.prototype.sayHello = function(){
    console.log("Hello JS");
}

//sayHi是A的静态方法
A.sayHi = function(){
    console.log("Hello jikexueyuan");
}

var a = new A();
a.sayHello();
A.sayHi();

function B(){

}
B.prototype = new A();
var b = new B();
b.sayHello();
b.sayHehe();