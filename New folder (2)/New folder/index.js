 //Question no : 3 JS PROGRAMMING
  function reverseWords(inputString) {
    return inputString.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}


const inputString = "Hello world! This is a test.";
console.log(reverseWords(inputString));

//Question no : 5
function amountToCoins(amount, coins) {
    const result =[];
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        while (amount >= coin) {
            amount -= coin;
            result.push(coin);
        }
    }

return result;
}

const amount = 46;
const coins = [25, 10, 5, 2, 1];
console.log(amountToCoins(amount, coins));


//Question no : 2 JS PROGRAMMING

function Sum(nums, target) {
    const numMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }
        
        numMap[nums[i]] = i;
    }
    
    
    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(Sum(nums, target)); 

//Question no : 3 TASK JS

function BigSum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

const array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(BigSum(array)); 

//QUESTION NO : 1 TASK JS

function isPalindrome(s) {
    const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return cleanString === cleanString.split('').reverse().join('');
}

// Example usage:
const s1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s1)); 

const s2 = "race a car";
console.log(isPalindrome(s2)); 

const s3 = " ";
console.log(isPalindrome(s3));

//QUESTION  # 04: Write a JavaScript program to display the reading status (i.e. display
  //  book name, author name and reading status) of the following books.

const library = [
    {
        title: "The Road Ahead",
        author: "Bill Gates",
        readingStatus: true
    },
    {
        title: "Walter Isaacson",
        author: "Steve Jobs",
        readingStatus: false
    },
    {
        title: "Mockingjay:The Final Book Of The Hunger Game",
        author: "Suzanne Collins",
        readingStatus: true
    }
];

function displayReadingStatus(library) {
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        const { title, author, readingStatus } = book;
        const status = readingStatus ? "already read" : "not read yet";
        console.log(`Book: ${title} by ${author}, Status: ${status}`);
    }
}

displayReadingStatus(library);
