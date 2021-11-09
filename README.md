# es6
## 语言与平台之间的关系：es是语言层面，规定了最基本的语法；js的语言本身指的就是es
    1.web平台的js=es+web APIs(BOM+DOM)
    
    2.node平台的js=es+node APIs(fs,net,etc.)
## ECMAScript与JavaScript：ECMAScript是js的标准规范，js是es的扩展语言
## ECMAScript的发展过程：从2015年开始es每年都迭代一个版本
## ECMAScript2015（es2015/es6）：最新es标准的代表版本，变化大，版本命名规则发生变化按照年份命名；现在用es6泛指所有更新的es新特性
    1.解决原有语法上的一些问题或不足

    2.对原有语法进行增强

    3.全新的对象，全新的方法，全新的功能

    4.全新的数据类型和数据结构
## Nodemon小工具: 修改代码后自动执行代码; yarn add nodemon --dev; yarn nodemon 文件名称
## 新特性：
    1.作用域：某个成员起作用的范围
      全局作用域
      函数作用域
      块级作用域（es6新增）:花括号里面的成员{}

    2.const:常量/恒量，let基础上多了只读属性，声明过后不允许再被修改（不能修改内存地址，但是可以修改成员属性）

    3.数组的解构

    4.对象的解构

    5.模板字符串字面量

    6.模板字符串标签函数

    7.字符串的扩展方法:startsWith();endsWith();includes();