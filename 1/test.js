// Person.prototype = { 
//     msg:"你猜我在干啥"
// };
// function Person(name,age,gender){
//     this.name = name;
//     this.age = age ;
//     this.gender = gender;
// }
// Person.prototype.sayHello = function(){
//     console.log(`你好${this.name}`);
// };
// var p = new Person("公子熄",19,"male");
// // p.sayHello();
// //替换了原型对象
// Person.prototype = { //prototype其实就是Person对象的一个属性
//     msg:"你猜我在干啥2"
// };
// Person.prototype.sayHello = function(){
//         console.log(`你好${this.age}的${this.name}`);
//     };
// console.log(Person.prototype)

// var p1 = new Person("anCheng",12,"male");
// console.log(p1);
// // p1.sayHello(`你好${this.name}`);
// p1.sayHello();             //p1不能调用sayHello()
// p.sayHello(); 

// object.prototype 可以手动新设置，设置的时候，不影响在此之前已经构造过的函数，如12行的p，如果是函数会是什么样呢？
/**
 *  当绑定一个函数给原型时，去构造一个新函数，新函数可以使用原型里的对象，原型没有则去原型的原型，一直到原型链的底端 
 * 
 * 关于原型的应用的实例：  
 *  let a = {
 *      b : "2",
 *      c : "4"
 * }
 *  console.log(a.toString());
 * a中没有toString()函数，但是a的原型 Object 有，计算机在a的对象里未找到，在其原型Object里找到了这个函数，于是执行。
 * 
 * 于是，
 * 
 */

// function Parent(){
//     this.name = "i am parent";
// }
// Parent.prototype = {age:24};
// function Child(){
// this.name = "i am child";
// }
// Child.prototype = Object.create(Parent.prototype); 
// //让Child的原型指向Parent的原型
// Child.prototype.constructor = Child; 
// //把child的构造函数指向回来，否则它将指向Parent。
// // 虽然在这没什么影响，但要养成代码的严谨性
// var child = new Child();
// console.log(child.name); //i am child
// console.log(child.age); //24
// console.log(child.toString()); //[object Object]


class ES6Fun {
	constructor (x, y,z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
	sayHello () {
		return `你好！ ${this.x} `;
	}
}
class ES6Fun2 {
	constructor (x, y,z) {
		this.x = x;
		this.y = y;
        this.z = z;
        this.sayHello =new ES6Fun(this.x,this.y,this.z);
    }
   
}
// b.prototype = ES6Fun;

let a = new ES6Fun("公子熄","male","18");
// console.log(a.sayHello());

let b = new ES6Fun2("公子熄2","female","18");
console.log(b.sayHello.sayHello());



// debugger



// function ES5Fun (x, y,z) {
// 	this.x = x;
// 	this.y = y;
// 	this.z = z;
// }
// ES5Fun.prototype.toString = function () {
//     return `你好！ ${this.x} `;
// }
// var p = new ES5Fun("公子熄","male","18");
// console.log(p.toString());

// let c = new ES5Fun();
// c.x = "ss"
// console.log(c.toString())



//test 

