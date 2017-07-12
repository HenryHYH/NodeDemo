process.on('exit', function (code) {
    setTimeout(function () {
        console.log('不会显示');
    }, 0);

    console.log('退出码为:', code);
});
console.log("程序执行结束");
