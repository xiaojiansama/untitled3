/**
 * Created by 小贱`sama on 2016/12/11.
 */
/*var obj={
    name:"小白",
    speak:function(){
        console.log("hah")
    }
};
var a=obj;
console.log(a.name);*/

/*console.log(obj["name"]);
obj.speak();

var cv=function (key) {
    console.log(obj[key]);

}
cv("name");
var a={ };
var b=a;
console.log(a == b);
delete obj.name;
console.log(obj.name);
var obj = {
    name:"moha"
};

var a = Object.create(obj);
var b = a
console.log(a == b);*/
// var obj=function () {
//     this.name="hah";
//     this.weight=60;



// var a=new obj();
// console.log(a.weight);
// var obj = {
//     name : "haha",
//     creatNew: function () {
//         var o={};
//         o.speak = functio   n () {
//             console.log(obj.name);
//         };
//         o.change = function (x) {
//             obj.name = x;
//
//         };
//         return o;
//
//     }
// };
// var a = obj.creatNew();
// a.change("moha");
// a.speak();
// var b = obj.creatNew();
// b.change("lALA");
// a.speak();
var a = function (cb) {
   cb();
}
var b = function () {
    console.log("duck");

}
a(b);
