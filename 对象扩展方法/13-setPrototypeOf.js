/**
 * Object.setPrototypeOf()
 * 设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null
 * 相对于 Object.prototype.__proto__ ，被认为是修改对象原型更合适的方法
 * Object.setPrototypeOf(obj, prototype)
 * obj 要设置其原型的对象
 * prototype 该对象的新原型(一个对象 或 null)
 */

var obj = Object.setPrototypeOf({}, null);