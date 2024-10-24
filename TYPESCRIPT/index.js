"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return "Hello, ".concat(name);
}
var username = "John";
console.log(greet(username));
//-----------------------------------------------------------
function filterPairs(numbers) {
    return numbers.filter(function (num) { return num % 2 === 0; });
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var pairs = filterPairs(numbers);
console.log(pairs);
//-----------------------------------------------------------
function sumDiagonals(matrix) {
    var sumPrincipal = 0;
    var sumSecondary = 0;
    for (var i = 0; i < matrix.length; i++) {
        sumPrincipal += matrix[i][i];
        sumSecondary += matrix[i][matrix.length - 1 - i];
    }
    return { diagonalPrincipal: sumPrincipal, diagonalSecondary: sumSecondary };
}
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var _a = sumDiagonals(matrix), diagonalPrincipal = _a.diagonalPrincipal, diagonalSecondary = _a.diagonalSecondary;
console.log("Sum Diagonal Principal: ".concat(diagonalPrincipal));
//-----------------------------------------------------------
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Book.prototype.showInfo = function () {
        console.log("Title: ".concat(this.title, ", Author: ").concat(this.author, ", Year: ").concat(this.year));
    };
    Book.prototype.isMoreRecentThan = function (anotherBook) {
        return this.year > anotherBook.year;
    };
    return Book;
}());
var book1 = new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 1967);
var book2 = new Book("Don Quixote", "Miguel de Cervantes", 1605);
book1.showInfo();
console.log(book1.isMoreRecentThan(book2));
//-----------------------------------------------------------
var fs = require("fs");
function readJsonFile(path) {
    var data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
}
function writeJsonFile(path, products) {
    var data = JSON.stringify(products, null, 2);
    fs.writeFileSync(path, data, 'utf-8');
}
var filePath = './products.json';
var products = readJsonFile(filePath);
products[0].price = 99.99;
writeJsonFile(filePath, products);
console.log('File updated successfully.');
function sortByAge(people) {
    return people.sort(function (a, b) { return a.age - b.age; });
}
var people = [
    { name: "John", age: 30 },
    { name: "Anna", age: 25 },
    { name: "Louis", age: 35 }
];
var peopleOrdered = sortByAge(people);
console.log(peopleOrdered);
