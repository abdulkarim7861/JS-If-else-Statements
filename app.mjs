//Problem 2\\
let num1 = parseFloat(prompt("Enter First Number: ")); 
let num2 = parseFloat(prompt("Enter Second Number: "));
if (num1 > num2){
    console.log("First Number Is Larger");
}else if(num1 === num2){
    console.log("First Number Is Equal To Second Number");
}else if(num2 > num1){
    console.log("Second Number Is Larger");
}else{
    console.log("Try Again")
}

//Problem 3\\
let number = parseInt(prompt("Enter Any Number"));
if(number > 0  ){
    console.log("Number is Positive")
}else if(number < 0){
    console.log("Number is Negative")
}else if(number === 0){
    console.log("Zero")
}else{
    console.log("Enter Valid Number")
}

//Problem 4\\
let alphabet = prompt("Enter any alphabet");
if(alphabet === "a"){
    console.log("Vowel")
}
else if( alphabet ==="e" ){
    console.log("Vowel")
}
else if( alphabet ==="i" ){
    console.log("Vowel")
}
else if( alphabet ==="o" ){
    console.log("Vowel")
}
else if( alphabet ==="u" ){
    console.log("Vowel")
}else{
    console.log("Consonant")
}

//Problem 5\\
let createPassword = prompt("Create Password");
let confirmPassword = prompt("Confirm Password");
if(createPassword === confirmPassword){
    console.log("Correct! The password you entered matches the original password.");
}else{
    console.log("Please enter your password");
}

//Problem 6\\
let greeting;
let hour = 13;
if(hour < 18){
    greeting = "Good Day"
    console.log(`${greeting}`)
}else{
    greeting = "Good Evening"
    console.log(`${greeting}`)
}

//Problem 7\\
let time = parseInt(prompt('Enter Time in 24 hour Formate'))
if(time>= 0 && time < 12){
    console.log(`Good Morning`);
}
else if(time >= 12 && time < 17){
    console.log(`Good Afternoon`);    
}
else if(time >= 17 && time < 21){
    console.log(`Good Evening`);
}
else if(time >= 21 && time < 24){
    console.log(`Good Night`)
}