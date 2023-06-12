const students = [
    {Name:'Hridoy',age:24},
    {Name:'Barsha',age:19},
    {Name:'Anik',age:22},
    {Name:'Oishik',age:21}

]

/*
//access the array each element different way using for loop
const newName = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const Names = element.Name;
    newName.push(Names);
}
console.log(newName); */

//access the array each element different way using map,filter,find and arrow function

const valus = students.map(s => s.Name);
console.log(valus);
const biggerAge = students.filter(s => s.age > 19); //give me multiful values
console.log(biggerAge);
const bigger = students.find(s => s.age > 19);  //give me single value
console.log(bigger);