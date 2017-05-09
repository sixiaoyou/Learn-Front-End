/**
 * Created by You on 2017/5/9.
 */
function Person(){

}

Person.prototype = {
    name:'You',
    age:'23',
    eat:function(){
        alert("我在吃")
    }
}
var p = new Person()


