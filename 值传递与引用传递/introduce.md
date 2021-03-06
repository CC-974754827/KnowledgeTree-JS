#### 基本类型与引用类型
* 值类型（基本类型）：String、Number、Boolean、Null、Undefined
* 引用类型：Array、Object、Function、Date等有多个值构成的可变长度的复杂类型

#### 基本类型与引用类型区别
* 基本类型的变量保存的是变量值；引用类型的变量保存的是内存地址；
* 基本类型长度固定，在内存中占据固定大小的空间，数据存放在栈内存中；引用类型可以给对象添加属性和方法，长度不固定，数据存放在堆内存中；[引用类型的存储需要栈区和堆区共同完成，栈区内存保存变量标识符和指向堆内存中的该对象的指针(地址)]
* 基本类型在赋值的时候拷贝值；引用类型在赋值的时候只拷贝地址，不拷贝值；

#### 基本类型与引用类型的复制
const num1 = 5;
const num2 = num1;
```
        复制前的变量对象
|———————|———————————————————————|
|       |                       |
|———————|———————————————————————|
|       |                       |
|———————|———————————————————————|
|  num1 |    5（Number类型）     |
|———————|———————————————————————|

        复制后的变量对象
|———————|———————————————————————|
|       |                       |
|———————|———————————————————————|
|  num2 |    5（Number类型）     |
|———————|———————————————————————|
|  num1 |    5（Number类型）     |
|———————|———————————————————————|
```
const obj1 = {};
const obj2 = obj1;
```
        复制前的变量对象
|———————|———————————————————————|
|       |                       |
|———————|———————————————————————|
|       |                       |
|———————|———————————————————————|                   |——————————————————————————|
|  obj1 |    （Object类型）      |——————————————————————————↓                   |
|———————|———————————————————————|                   |   |————————|             |
                                                    |   | Object |             |
        复制后的变量对象                               |   |————————|             |
|———————|———————————————————————|                   |     ↑   ↑                |
|       |                       |                   |—————|———|————————————————|
|———————|———————————————————————|                         |   |
|  obj2 |    （Object类型）      |—————————————————————————|   |
|———————|———————————————————————|                             |
|  obj1 |    （Object类型）      |—————————————————————————————|
|———————|———————————————————————|
```
#### 复制引用类型
```
JSON方法 或 深克隆
var a = {name:1, value:2};
var b = JSON.parse(JSON.stringify(a));
b.name = 'mary';
console.log(a);  //{name: 1, value: 2}
console.log(b);  //{name: "mary", value: 2}
```
