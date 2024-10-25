function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

//-----------------------------------------------------------

function sumMatrices(a: number[][], b: number[][]): number[][] {
    let result: number[][] = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = [];
        for (let j = 0; j < a[i].length; j++){
            result[i][j] = a[i][j] + b[i][j];
        }
    }
    return result;
}

const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[5, 6], [7, 8]];

console.log()
console.log()
console.log(sumMatrices(matrix1, matrix2));

//-----------------------------------------------------------

class Student {
    constructor(public name: string, public age: number) {}
}

class Teacher {
    constructor(public name: string, public subject: string) {}
}

class Course {
    public students: Student[] = [];

    constructor(public name: string, public teacher: Teacher) {}

    addStudent(student: Student) {
        this.students.push(student);
    }
}

const teacher = new Teacher('John Doe', 'Math');
const course = new Course('Algebra', teacher);
course.addStudent(new Student('Alice', 20));
course.addStudent(new Student('Bob', 22));

console.log()
console.log()
console.log(course)

//-----------------------------------------------------------

function countWordOccurrences(text: string, word: string): number {
    const regex = new RegExp(`\\b${word}\\b`, `gi`);
    return (text.match(regex) || []).length;
}

const text = "TypeScript is great. TypeScript is fun.";

console.log()
console.log()
console.log(countWordOccurrences(text, 'TypeScript'))

//-----------------------------------------------------------

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

console.log()
console.log()
console.log(reverseString('TypeScript'));

//-----------------------------------------------------------

function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log()
console.log()
console.log(isPrime(11));
console.log(isPrime(10));

//-----------------------------------------------------------

function sortArray(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
}

console.log()
console.log()
console.log(sortArray([5, 3, 8, 1, 2]));

//-----------------------------------------------------------

async function fetchData(url: string) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log()
        console.log()
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData('https://jsonplaceholder.typicode.com/posts');

//-----------------------------------------------------------

function countVowels(str: string): number {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

console.log()
console.log()
console.log(countVowels('TypeScript'));

//-----------------------------------------------------------

class Animal {
    constructor(public name: string) {}

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

console.log()
console.log()
dog.speak();
cat.speak();