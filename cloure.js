function stopWatch() {
    let count = 0;
    return function () {
        count ++;
        return count;
    }
}
/* ekhane ekta function theke onno function call kore,,,alada ekta enviroment create kora hoy...tarpore 
bitorer function ke retuen korar pore jodi je bahirer variable ke accecs korte pare...tokhon function ti take use kore tar 
jonno value set korte pare,,,eivabe 2nd clock oo rakhte pare value,,,tokhon tader maje ekta closer enviroment create hoy..
jekhane sobai tar nijer value rakhte pare,,,karo ta change hoy na.
 */

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch(); 
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());