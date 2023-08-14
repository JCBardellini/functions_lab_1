// 1. Write a function called logMyName that will log your name.  Call this 1 time

// const logMyName = () => {
//     console.log("my name is JC")
// }
// logMyName()

// 2. Write a function called logThisName that will log the name parameter. Call this 2 times. 

// const logThisName = (name) => {
//     console.log("my name is ", name)   
// }
// logThisName("hello")
// logThisName("JC")


// 3. Write a function called checkName that will check if the name parameter is "Joyce". Call this function 3 times - with "Chase" "Jerry" and "Joyce"

// const checkName = (name) => {
//     if (name == "Joyce") {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// checkName("Joyce")
// checkName("Jerry")
// checkName("Chase")

// 4. Write a function that called doLoop will do a loop that will count from 0-10. Call this function 3 times.

// const doLoop = () => {
//     for(let i=0; i<11; i++) {
//         console.log(i)
//     }
// }
// doLoop();
// doLoop();
// doLoop();

// 5. Write a function called doLoopWithThisNumber that will do a while loop from 0 until the given number parameter. Call this 5 times with 10, 100, 78, 22, 15

// const doLoopWithThisNumber = (number) => {
//     let i = 0;
//     while (i == number) {
//         i++;
//     }
//     console.log("I am ", number)
// }
// doLoopWithThisNumber(10);
// doLoopWithThisNumber(100);
// doLoopWithThisNumber(78);
// doLoopWithThisNumber(22);
// doLoopWithThisNumber(15);


// 6. Write a function (you make the name) that will add 2 numbers together. Call 3 times.

// const addSum = (num1, num2) => {
//     console.log (num1 + num2);
// }
// addSum(4,5); 
// addSum(5,6);
// addSum(2,4);

// 7. Write a function (you make the name) that will check if the number parameter is even or odd. call 2 times.

// const checkEvenOrOdd = (num) => {
//     if (num % 2 === 0) {
//         console.log("even")
//     } else {
//         console.log("odd")
//     }
// }

// checkEvenOrOdd(3);
// checkEvenOrOdd(88);

// 10. Write a function (you make the name) that will log the typeof the data parameter. call 1 time

const checkTypeOf = (data) => {
    console.log(typeof data)
}

checkTypeOf(45)

// 11. Write a function (you make the name) that will do a loop 0-? The loop should end based on the number parameter. call 2 times.

const whatIsTheScore = (number) => {
    for(let i=0; i <= number; i++) {
        console.log("This is your score: ", i)
    }
}

whatIsTheScore(42)
whatIsTheScore(10)