// Spread Operator - includes elements of one array within an array literal
let a = [1, 2, 3];
let b = [0, ...a, 4]; //b == [0, 1, 2, 3, 4];

let digits = [..."0123456789ABCDEFG"];
console.log(digits);

let arr = [
    'hello',
    'my',
    'name',
    'is',
    'lauren'
];
console.log(arr);
console.log(...arr)

// Merging Arrays
let arr2 = [...b,5, 6, 7];
console.log(arr2);
console.log(b);

console.log(b.concat(arr));

if(!b.includes(5)) {
    console.log('no five')
}

/*
    .map() 
    A method that passes each elements of the array on which it is invoked to the function you specify and returns an array containing the values returned by your function
    syntax => 
    let a = [1, 2, 3];
    a.map(x => x*x) => [1, 4, 9];
*/
let coders = [
    'Jace', 
    'John',
    'Caleb',
    'Shy',
    'Don',
    'Stephen',
    'Rodney',
    'Kyle',
    'Veries',
    'Ophelia'
];
console.log(
    coders.map(item => `Hello ${item}`)
);

let otherArr = coders.map(item => `Hello ${item}`); //makes a new array

console.log(coders, otherArr);

let arrBy2 = b.map(item => item * 2);
console.log(arrBy2, b);

const add6 =(num)=> {
    return num + 6;
}

let arr3 = (b.map(item => add6(item)));
console.log(arr3);

let copy = [...b];
console.log(copy);
copy[0] = 1;
console.log(copy);
console.clear();

/*
    .filter()
    Returns an array containing a subset of the elements of the array on which it is invoked.
    syntax =>
    let a = [1, 2, 3];
    a.filter(x => x +< 2;
*/

let c = [5, 4, 3, 2, 1];
let filter = c.filter(item => item < 3);
console.log(c, filter);
let newFilter = c.filter((i) => i%2 === 0);
console.log(newFilter);

let ages = [21, 18, 21, 26, 24, 27, 22, 26, 45, 29];
let agesOver29 = ages.filter(x => x >= 30);
console.log(agesOver29);
console.log(ages.sort());
console.log(ages.sort((a, b) => b - a));

let vowels = ['a', 'e', 'i', 'o', 'u'];

let beginsWithVowel = coders.filter(item => {
    for(let i = 0; i < vowels.length; i++) {
        if(item[0].toLowerCase() == vowels[i]){
            return item;
        }
    }
})

console.log(beginsWithVowel);

console.log(coders.sort());

// Regular Expressions OR RegExp
/*
    An object that describes a textual pattern. 
    -created with:
    RegExp() class OR RegExp literals
    RegExp literals are specified as characters within a pair of slash(/) characters.

    syntax=>
    let pattern = new RegExp("s$");
    let pattern = /s$/; => more popular
    
    This '$' meta-character matches any string that contains the letter 's; as its last character


    ^ $ . * + ? ! : | / \ ( ) [ ] { }
*/

var text = 'Oh what a Great day it is';

let regex = /[o]/i;

console.log(text.match(regex));

var password = 'mightyjoi1';

let regex2 = /[0-9]/g;
// let regex2 = /[/w]/

// console.log(password.match(regex2));

if(regex2.test(password) === true) {
    console.log('passed')
} else {
    console.log('failed')
}


// Make an inventory of items(15) for sale(can be anything, ex: shoes, cars, clothes) Each item needs a name, price, image and should be dynamically loaded from js into the html. Use methods to create a featured section that filters through your inventory and creates a section based on the 5 items with the lowest price