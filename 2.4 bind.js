function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}

var user = {
    uname: "Вася",
    greet: function() {
        console.log( this.uname + ' приветствует Вас!' );
    }
};

var admin = {
    uname: 'Одмин',
    greet: user.greet()
};

var greet = bind(user.greet(),user);
console.log(greet());
console.log(admin.greet());