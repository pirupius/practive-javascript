const Person = require('./scripts/person');
const Note = require('./scripts/note');
const Helpers = require('./scripts/helpers');

const person = new Person('Piru', 30);

person.greeting();

const note = new Note('Shopping List', 'This is just fake text');

note.addNote();

var arr =  [1, 2, 3];
const arrSum = arr.reduce((a, b) => a + b, 0);

console.log(arrSum)

var str = "A man, a plan, a canal. Panama"

const checkPalindrome = new Helpers

checkPalindrome.palindrome(str);
