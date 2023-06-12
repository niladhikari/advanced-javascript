// when create undefined 

var num;
console.log(num); //value set na korle

function add(num1,num2) {
    let  value = num1 + num2;
    // kaj korar pore value retuen na korle undefined asbe
    return; //ki return kora hobe ta define na kore dile
}
let result = add(20); //parameter er value set kore ta pass na kora hole
console.log(result); 

const pramika = {Name:'barsha',age:19}
console.log(pramika.gf); //gf value object ei nai tai undefiend 

let number = [2,3,4];
console.log(number[5]); //arrey er maje 5 index nai...
//so array er oi index na thakle ta chaeck korte gele undefined hobe