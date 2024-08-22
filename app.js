// console.log("apna college");
// price=1236
// age=25
// x=null;
// y=undefined;
// isFollow = false;
// let fullName = "manikya"
// let age = 25;
// let price = 250000;
// name = 'tony stark';
// console.log(name);

// let age =25;

// if (age > 18){
//     console.log("you can vote");
// }


// let mode = "dark";
// let color;

// if (mode === "dark"){
//     color = "black";
// }

// if(mode === "light"){
//     color="white"
// }

// console.log(color);


// let num = 10;

// if (num %2 === 0){
//     console.log(num, "is even");
// }else {
//     console.log(num, "is not even");
// }


// alert("hello");

// let name = prompt("hello"); //can take input from user



// let num = prompt("enter a number: ");
// if (num % 5 === 0 ){
//     console.log(num, "is a multiple of 5");
// }else {
//     console.log(num, "is not a multiple of 5");
// }



// let score = 75;
// let grade ;
// if(score >= 80 && score <= 100){
//     grade = "A";
// }else if (score >= 70 && score <= 79){
//     grade = "B";
// }else if (score >= 60 && score <= 69){
//     garde ="C"
// }
// console.log("according to your score you recieve the garde: ", grade)



// for (let count = 1;count<=5; count++){
//     console.log("apna college")
// }

// console.log("loop has ended")


// let sum =0;
// let n = 5;
// for (i=1; i<=n; i++){
//     sum = sum + i;
// }
// console.log("sum = ", sum)





let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string =''

buttons.forEach(element => {
    element.addEventListener('click',(b)=>{
        if(b.target.innerText == '='){
            string = String(eval(string))
            inputBox.value=string;
        }
        else if(b.target.innerText == 'AC'){
            string =''
            inputBox.value=string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            inputBox.value=string;
        }
        else if(b.target.id == 'plusMinus'){
            string = String(-eval(string))
            inputBox.value=string;
        }
        else{
            string += b.target.innerText
            inputBox.value=string
        }
    })
})