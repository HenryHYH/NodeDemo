/*
require 方法接受一下集中参数的传递：

http、fs、path等，原生模块。
./mod或../mod，相对路径的文件模块。
/pathtomodule/mod，绝对路径的文件模块。
mod，非原生模块的文件模块。

*/

var Hello = require('./module');
var hello = new Hello();
hello.setName('Henry');
hello.sayHello();
