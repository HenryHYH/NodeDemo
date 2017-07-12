function Hello() {
    var name;
    this.setName = function (value) {
        name = value;
    };
    this.sayHello = function () {
        console.log('Hello ' + name);
    };
};

module.exports = Hello;
