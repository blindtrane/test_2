//logical operators

//let hour = 12;
//let isWeekend = true;
//if (hour<10 || hour>18 || isWeekend){
//    alert('closed');
//}

//let hour = 12;
//let minute = 30;
//
//if (hour==12 && minute == 30){
//    alert('time is 12:30');
//}


//Functions

//function showMessage(){
//    alert('hello');
//}
//
//showMessage();

//let userName = 'Mike';
//function showMessage(){
//    let userName = 'Nick';
//    let message = 'Hello, ' + userName;
//    alert(message);
//}
//showMessage();
//alert(userName);


//let userName = 'Nick';
//
//function showMessage(){
//    let userName = 'John';
//
//    let message = 'Hello, '+ userName;
//    alert(message);
//}
//showMessage();
//
//alert(userName);


//function showMessage(from, text){
//    from = '#' + from;
//    alert(from + ': '  + text);
//}
//showMessage('Alex', 'Hello');


//function sum(a,b){
//    return a+b;
//}
//let result = sum(9,19);
//alert(result);

//function checkAge(age){
//    if (age>18){
//        return true;
//    } else {
//        return confirm('U r too young');
//    }
//}
//
//let age = prompt('How old r u?');
//
//if (checkAge()){
//    alert('U r welcome');
//} else {
//    alert('bb')
//}


//function showPrimes(n){
//    for (let i = 2; i <= n; i++){
//        if (!isPrime(i)) continue;
//        alert(i);
//    }
//}
//
//function isPrime(n){
//    for (let i = 2; i < n; i++){
//        if (n % i == 0) return false;
//    }
//    return true;
//}
//showPrimes(17);


//function min(a,b){
//    let a = a;
//    let b = b;
//    if (a<b) {
//        return a;
//    } else if(a>b) {
//        return b;
//    } else {
//        return "they equal";
//    }
//}
//
//min(10,15);


//let arr = new Array();
//let arr = [];

//let fruits = ['Apple', 'Orange', 'Berry'];
//console.log(fruits.length);
//console.log(fruits[1]);
//console.log(fruits.pop());
//console.log(fruits);

//let styles = ['Jazz', 'Blues'];
//styles.push('Rock');
//styles[Math.floor((styles.length-1)/2)] = 'Classic';
//console.log(styles.shift());
//styles.unshift('Rap', 'Raggie');
//console.log(styles);


//let arr  = ['app', 'pineapp', 'orange'];
//
//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}


//let user = {
//    name: 'John',
//    age: 39,
//    'like birds': true,
//};
//user.isAdmin = true;
//delete user.age;
//
//console.log(user);


//let user = {
//    name: 'Alex',
//    age: 29,
//    isAdmin: true,
//    'like birds': true,
//};
//
//
//let key = prompt('What do you want to know?');
//alert(user[key]);

//function makeUser(name, age) {
//    return {
//        name: name,
//        age: age,
//    }
//}
//
//let user = makeUser('Alex', 29);
//console.log(user);

//let user = {};
//alert(user.noSuchProperty === undefined);

//let user = {
//    name: 'Alex',
//    age: 29,
//}
//alert('age' in user);
//alert('wdwd' in user);


//let user = {
//    name: 'Alex',
//    age: 29,
//};
//let key = 'age';
//console.log(key in  user);

//let user = {
//    name: 'Alex',
//    age: 20,
//}
//for (let key in user) {
//    alert(key);
//    alert(user[key]);
//}

//let user = {};
//user.name = 'John';
//user.surname = 'Smith';
//user.name = 'Pete';
//delete user.name;


//let salaries = {
//  John: 100,
//  Ann: 160,
//  Pete: 130
//};
//
//let sum = 0;
//for (let key in salaries) {
//    sum += salaries[key];
//}
//console.log(sum);

//function multiply(obj){
//    for (let key in obj) {
//        if (typeof obj[key] == 'number') {
//            obj[key] *= 2;
//        }
//    }
//}


//function User(name) {
//    this.name = name;
//    this.isAdmin = false;
//}
//
//let user = new User('Alex');
//console.log(user.name);
//console.log(user.isAdmin);
//
//let user2 = new User('John');
//console.log(user2.name);


//function User(name){
//    this.name = name;
//
//    this.sayHi = function(){
//        alert("my name is: " + this.name);
//    }
//}
//let john = new User('John');
//john.sayHi();


//function Calculator(){
//    this.read = function(){
//        this.a = +prompt('A?')
//        this.b = +prompt('B?')
//    };
//    this.sum = function(){
//        return this.a + this.b;
//    };
//    this.mul = function(){
//        return this.a * this.b;
//    };
//};
//
//let calculator = new Calculator();
//calculator.read();
//
//alert( "Sum=" + calculator.sum() );
//alert( "Mul=" + calculator.mul() );


//function Accumulator(startValue){
//
//    this.value = startValue;
//    this.read = function(){
//        this.value += +prompt('input number')
//    };
//}
//let accumulator = new Accumulator(1);
//accumulator.read();
//accumulator.read();
//accumulator.read();
//alert(accumulator.value);


// let user = {
//     name: 'John',
//     age: 30,
// };
// user.sayHi = function(){
//     alert('Hello');
// }
// user.sayHi();


// let user = {
//     name: 'john',
//     age: 30,
//     sayHi(){
//         console.log(this.name);
//     }
// }
// user.sayHi();


class User {
    constructor(name) {this.name = name;}
    sayHi() {alert(this.name);}
}
alert(typeof User);





























