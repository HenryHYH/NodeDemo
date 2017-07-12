console.log(__filename);
console.log(__dirname);

// 只执行一次
setTimeout(function () {
    console.log("setTimeout");
}, 2000);

// 每2秒执行一次
setInterval(function () {
    console.log("setInterval");
}, 2000);

console.time("Test");
console.timeEnd("Test");


