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