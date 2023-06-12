
//find the square using for loop
/*let output = [];
let number = [3,4,5,6,7,8];
let output = [];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const result = element*element;
    output.push(result);
}
console.log(output);

//find the square using map with function
let number = [3,4,5,6,7,8];
const result = number.map(function (element) {
    return element*element; 
})
console.log(result); */


//find the square using map with arrow function
let number = [3,4,5,6,7,8];
const result = number.map(element => element * element ) //map er jonno alada kore array banate hoy na...
console.log(result);

//filter and find using for finding bigger numbers

let numbers = [3,4,6,7,9];

const bigger = numbers.filter(num => num > 5); //filter tar theke jotogula boro sob gula show kore
const isThere = numbers.find(num => num > 5); //find shudu ekta value dey
console.log('Bigger numbers : ',bigger,"\n Find value : ",isThere);

//filter and find using for finding even and odd numbers

const even = numbers.filter(num => num % 2 ===0); //filter tar theke jotogula even ache sob gula show kore
const odd = numbers.find(num => num % 2 != 0); //find shudu ekta odd show kore jake age pay
console.log('Even numbers : ',even,"\n Odd value : ",odd);
