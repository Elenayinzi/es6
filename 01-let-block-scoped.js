/**
 * let关键字和块级作用域
 */
// if(true) {
//     var foo = 'aa'
//     let foo1 = 'bb'
// }
//console.log(foo)  // var声明的可以全局调用，而且还会提升变量，可以在声明的地方之前调用，但值为undefined
//console.log(foo1) //块级作用域，只能在定义的{}块中调用

/**
 * const 关键字
 */
//const name = 'jack'
// name = 'aaa'  //不能被修改
//const obj = {}
//obj.name = 'zfk' //可以修改
//obj = {} //不可以

/**
 * 数组的解构
 */
//const arr = [100, 200, 300]
/**
 * es6之前的写法
 */
// const foo1 = arr[0]
// const bar = arr[1]
// const baz = arr[2]
//console.log(foo1, bar, baz)
/**
 * 新写法
 */
// const [foo1, bar, baz] = arr
// console.log(foo1, bar, baz)
// const [, , baz1] = arr
// console.log(baz1)
// const [foo2, ...rest] = arr
// console.log(rest) //开始位置的后面所有元素[200,300],只能放在最后一个位置
// const [foo3] = arr
// console.log(foo3)
// const [foo4, bar4, baz4, more4, more5 = 'default'] = arr
// console.log(more4) //undefined
// console.log(more5)
// const path = '/foo/bar/baz'
// const [, rootdir] = path.split('/')
// console.log(path.split('/'))
// console.log(rootdir)

/**
 * 对象的解构
 */
//const obj = { name: 'zce', age: 18}
// const { name } = obj
// console.log(name)
// const name = 'tom'
// const { name: objName } = obj
// console.log(name)
// console.log(objName)
// const { log } = console
// log('foo')
// log('bar')

/**
 * 模板字符串字面量
 */
// const str = 'hello es2015, this is a string'
// console.log(str)
// const str1 = `hello es2015,
// this is a \`string\``
// console.log(str1)
// const name = 'tom'
// const msg = `hey, ${name} --- ${1+2}---${Math.random()}`
// console.log(msg)

/**
 * 模板字符串标签函数
 */
// const name = 'tom'
// const gender = false
// function myTagFunc(strings, name, gender) {
//     console.log(strings, name, gender)
//     const sex = gender ? 'man': 'woman'
//     return strings[0] + name + strings[1] + sex + strings[2]
// }
// const result = myTagFunc`hey, ${name} is a ${gender}`
// console.log(result)

/**
 * 字符串的扩展方法
 */
// const message = 'Error: foo is not defined.'
// console.log(
//     message.startsWith('Error'),
//     message.endsWith('.'),
//     message.includes('foo')
// )

/**
 * 函数参数的默认值
 */
// function foo(bar, enable = true) {
//     //enable = enable === undefined ? true : enable
//     console.log('foo invoked - enable')
//     console.log(enable)
// }
// foo(false, false)

/**
 * 剩余参数
 * 展开数组
 * ...操作符
 */
// function foo(first, ...args) {
//     console.log(args)  //剩余参数，数组[2,3,4]
// }
// foo(1,2,3,4)
//展开数组参数
// const arr = ['foo','bar','baz']
// console.log.apply(console, arr)
// console.log(...arr)

/**
 * 箭头函数,=号右边是函数名，右边：箭头左边函数参数，右边函数体
 */
// const inc = (n,m) => n + 1 + m //自动return结果
// console.log(inc(100,100))
// const fun = (n) => {
//     console.log(n)
//     return n+1   //加了{}需要加return才能返回值
// }
// console.log(fun(100))
// const arr = [1,2,3,4,5,6]
// //筛选出基数
// arr.filter(function (item) {
//     return item % 2  
// })
// arr.filter( i => i % 2)

// const person = {
//     name: 'tom',
//     // sayHi: function () {
//     //     console.log(`hi, ${this.name}`) //tom，this指向调用者当前对象person
//     // },
//     // sayHi: () => {
//     //     console.log(this)
//     //     console.log(`hi, ${this.name}`) //undefined，this指向window
//     // }
//     // sayHi: function () {
//     //     const _this = this
//     //     setTimeout( function () {
//     //         //console.log(this)  //this指向window
//     //         console.log(_this.name)
//     //     },1000)
//     // }
//     // sayHi: function () {
//     //     setTimeout( () => {
//     //         console.log(this.name) //tom，setTimeout箭头函数this指向上层函数体中的this，this指向当前对象person
//     //     },1000)
//     // }
// }

// person.sayHi()

/**
 * 对象字面量增强
 */
// const bar = '345'
// const obj = {
//     foo: 123,
//     bar,
//     // method1: function () {
//     //     console.log('method1')
//     // }
//     method1() {
//         console.log('method1')
//         console.log(this)
//     },
//     [Math.random]: 123, //计算属性名[任意表达式]作为属性名
//     [1+1]: 12  
// }
// console.log(obj)
// obj.method1()

/**
 * 对象扩展方法
 */
//object.assgin,将多个源对象中的属性复制到一个目标对象中，浅拷贝
// const source1 = {
//     a: 1,
//     b: 2
// }
// const source2 = {
//     c: 1,
//     d: 3
// }
// const target = {
//     a:6,
//     c:2
// }
// const result = Object.assign(target, source1, source2)
// console.log(target)
// console.log( result === target)
// function func (obj) {
//     //obj.name = 'func obj'  //会改变外面的objc
//     //console.log(obj)

//     const funcObj = Object.assign({},obj)  //复制给一个新对象了，不会改变原对象
//     funcObj.name = 'func obj'
//     console.log(funcObj)
// }
// const objc = { name: 'global obj'}
// func(objc)
// console.log(objc)
//为对象参数设置默认值
// const defaultValue = {
//     a: 0
// }
// let options = Object.assign({},defaultValue)
// console.log(options)
//object.is:判断两个值是否相等
// console.log(
//     0 == false, //true,双等号比较前会转换类型
//     0 === false, //false,三等号会比较数值和类型
//     +0 === -0,  //三等不会比较正负号
//     NaN === NaN, //false,以前认为它是无限值不相等，现在认为是相等的
//     Object.is(NaN,NaN), //true
// )
/**
 * proxy代理对象
 */
// const person = {
//     name: 'zce',
//     age: 20
// }
// const personProxy = new Proxy(person, {
//     get(target, property) {
//         return property in target ? target[property] : 'default'
//         //console.log(target, property)
//         //return 100
//     },
//     set(target, property, value) {
//         if(property === 'age') {
//             if(!Number.isInteger(value)) {
//                 throw new TypeError(`${value} is not an int`)
//             }
//         }
//         target[property] = value
//         console.log(target)
//     }
// })
// console.log(personProxy.name)
// console.log(person.a)
// personProxy.gender = true
// personProxy.age = 50

/**
 * Reflect，统一提供一套对象的操作API,静态类，封装了一系列对对象的底层操作，一共13个可用
 */
// const obj = {
//     foo: '123',
//     bar: '456'
// }
// const proxy = new Proxy(obj, {
//     get(target, property) {
//         console.log('watch logic')
//         return Reflect.get(target, property)
//     }
// })
// console.log(proxy.foo)
// const obj = {
//     name: 'zce',
//     age: 18
// }
// console.log('name' in obj)
// console.log(delete obj['age'])
//console.log(Object.keys(obj))
// console.log(Reflect.has(obj, 'name'))
// console.log(Reflect.deleteProperty(obj,'age'))
// console.log(Reflect.ownKeys(obj))

/**
 * Promise
 */

/**
 * class类
 */
// function Person (name) {
//     this.name = name
// }
// Person.prototype.say = function () {
//     console.log(`hi, my name is ${this.name}`)
// }
// const p1 = new Person('aa')
// p1.say()
// class Person {
//     constructor(name) { //构造函数
//         this.name = name 
//     }

//     say() {
//        console.log(this) //指向实例对象
//        console.log(`hi, my name is ${this.name}`) 
//     }

//     /**
//      * 静态方法,static
//     */
//     static create (name) {
//         console.log(this) //指向Person类型本身，而不会指向实例对象
//         return new Person(name)
//     }
// }
// const p = new Person('tom1')
// p.say()

// const tom = Person.create('tom')
// tom.say()

/**
 * 类的继承extends
 */
// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     say() {
//         console.log(`hi, my name is ${this.name}`)
//     }
// }
// class Student extends Person {
//     constructor(name, number) {
//         super(name)
//         this.number = number
//     }
//     hello() {
//         super.say()
//         console.log(`my school number is ${this.number}`)
//     }
// }
// const s = new Student('jack', '100')
// s.hello()

/**
 * Set集合，值不会重复
 */
// const s = new Set()
// s.add(1).add(2).add(3).add(4)
// console.log(s)
// s.forEach( i => console.log(i))
// for(let i of s) {
//     console.log(i)
// }
// console.log(s.size)
// console.log(s.has(9))
// console.log(s.delete(2))
// console.log(s)
// //数组去重
//const arr = [1,2,3,4,3,2,1,6]
// const result = Array.from(new Set(arr))
//const result = [...new Set(arr)]
// console.log(result)
/**
 * Map,键值对集合
 */
//普通的对象的键只能是字符串类型
// const obj = {}
// obj[true] = 'value'
// obj[123] = 'value'
// obj[{a:1}] = 'value'
// console.log(Object.keys(obj)) //键会被转成字符串类型
//Map,可以使用任意类型的数据作为键
// const m = new Map()
// const tom = { name: 'tom'}
// m.set(tom, 90)
// console.log(m)
// console.log(m.get(tom))
// console.log(m.has(tom))
// console.log(m.delete(tom))
// console.log(m.clear())
// m.forEach( (value, key) => {
//     console.log(value, key)
// })

/**
 * Symbol，一种全新的原始数据类型，适合做对象的私有属性
 */
// const cache = {}

// //a.js=======
// cache['foo'] = 'aa'

// //b.js=======
// cache['foo'] = 'bb'

// const s = Symbol()
// console.log(s)
// console.log(typeof(s))
// console.log(
//     Symbol() === Symbol()  //false,一定是唯一的
// )
// const s1 = Symbol.for('foo') //这样就可以得到同样的字符串属性
// const s2 = Symbol.for('foo')
// console.log(
//     s1 === s2 //true
// )
// console.log(Symbol('foo'))
// console.log(Symbol('bar'))
// const obj = {
//     [Symbol()]: '789'
// }
// obj[Symbol()] = '123'
// obj[Symbol()] = '456'
// console.log(obj)
// const obj = {
//     [Symbol.toStringTag]: 'XObject'
// }
// console.log(obj.toString())
// const obj = {
//     [Symbol()]: 'symbol value',
//     foo: 'normal value'
// }
//以下方法获取不到Symbol()属性名
// for(let key in obj) {
//     console.log(key)
// }
// console.log(Object.keys(obj))
// console.log(JSON.stringify(obj))
//获取Symbol属性名的方法
//console.log(Object.getOwnPropertySymbols(obj))

/**
 * for...of循环
 */
// const arr = [100, 200, 300, 400, 500]
// for(const item of arr) {
//     console.log(item)
// }
// arr.forEach( item => {
//     console.log(item)  //不能跳出循环
// })
// for(const item of arr) {
//     console.log(item)
//     if(item > 200) {
//         break  //满足条件时终止循环
//     }
// }
//Set
// const s = new Set(['foo','bar'])
// for( const item of s ){
//     console.log(item)
// }
//Map
// const m = new Map()
// m.set('foo', '123')
// m.set('bar', '456')
// for( const [key, value] of m) {
//     console.log(key, value)
//}
//普通对象遍历
// const obj = { foo: 123, bar: 456}
// for(const item of obj) {
//     console.log(item) //报错，需要实现Iterable
// }
/**
 * 可迭代接口，迭代器模式，是for...of的前提，Iterable
 */
// const set = new Set(['foo', 'bar', 'baz'])
// const iterator = set[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
//实现可迭代接口
// const obj = {   //Iterable可迭代接口
//     store: ['foo', 'bar', 'baz'],
//     [Symbol.iterator]: function () { 
//         let index = 0
//         const self = this
//         return {             //Iterator,迭代器接口
//             next: function () {  
//                 const result = { //IterationResult,迭代结果接口
//                     value: self.store[index],
//                     done: index >= self.store.length
//                 }
//                 index ++
//                 return result
//             }
//         }
//     }
// }
// for(const item of obj) {
//     console.log('循环', item)
// }
//迭代器模式
// const todos = {
//     life: ['吃饭', '睡觉'],
//     learn: ['js', 'mobx'],
//     work: ['喝茶'],
//     each: function (callback) {
//         const all = [].concat(this.life, this.learn, this.work)
//         for(const item of all) {
//             callback(item)
//         }
//     },
//     [Symbol.iterator]: function() {
//         const all = [...this.life, ...this.learn, ...this.work]
//         let index = 0
//         return {
//             next: function () {
//                 return {
//                     value: all[index],
//                     done: index++ >= all.length
//                 }
//             }
//         }
//     }
// }
// todos.each(function (item) {
//     console.log(item)
// })
// for(const item of todos) {
//     console.log(item)
// }
/**
 * 生成器Generator
 */
// function * foo () {
//     console.log('aa')
//     return 100
// }
// const result = foo()
// console.log(result.next())

// function * foo () {
//     console.log('11111')
//     yield 100
//     console.log('2222')
//     yield 200
//     console.log('3333')
//     yield 300
// }
// const generator = foo()
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

/**
 * es6 Modules
 */

/**
 * es7(2016)
 */
//includes
// const arr = ['foo', 1, NaN, false]
// console.log(arr.indexOf('foo'))
// console.log(arr.indexOf('bar'))
// console.log(arr.includes(NaN))
// console.log(Math.pow(2, 10))
// console.log( 2 ** 10)
/**
 * es8(2017)
 */
// const obj = {
//     foo: 'value1',
//     bar: 'value2'
// }
//Object.values
//console.log(Object.values(obj)) //['value1','value2']
//console.log(Object.keys(obj)) //['foo','bar']

//Object.entries
//console.log(Object.entries(obj)) //[['foo','values'],['bar','value2']]
// for( const [key, value] of Object.entries(obj)) {
//     console.log(key,value)
// }
//console.log(new Map(Object.entries(obj))) //Map结构数据
//Object.getOwnPropertyDescriptors,获取对象属性的完整描述信息
// const p1 = {
//     firstName: 'lei',
//     lastName: 'li',
//     get fullName() {
//         return this.firstName + ' ' + this.lastName
//     }
// }
// console.log(p1.fullName)
// const p2 = Object.assign({},p1)
// p2.firstName = 'zce'
// console.log(p2.fullName)
// const descriptors = Object.getOwnPropertyDescriptors(p1)
// const p2 = Object.defineProperties({},descriptors)
// p2.firstName = 'zce'
// console.log(p2.fullName)

//String.prototype.padStart/padEnd，字符串填充方法
// const books = {
//     html: 5,
//     css: 16,
//     javascript: 128
// }
// for(const [name, count] of Object.entries(books)) {
//     console.log(name, count)
// }
// for( const [name, count] of Object.entries(books)) {
//     console.log(`${name.padEnd(16,'-')}|${count.toString().padStart(3,'0')}`)
// }

//在函数最后一个参数后面添加尾逗号
function foo (
    bar, 
    baz,
) {

}

const arr = [
    100,
    200,
    300,
    400,
]
