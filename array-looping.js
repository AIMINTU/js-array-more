/**
 * Looping technique
 * 1.for loop
 * 2.while loop
 * 3.do while loop
 * 4. for of ==> array loop korar janno use kori
 * 5.for in==> object loop korar janno use kori
 * 6.
 */

const friends=["Elon", "Bill","Mark", "Waren"];
for(const friend of friends){
    // console.log(friend)
}

// for(let i=0; i<10; i++){
//     console.log(i)          
//     console.log(friends[i])
// }

// for(let i=0; i<friends.length; i++){
//     console.log(friends[i])
// }

const numbers=[41,25,74,32,13,48,57,12]
let i=0;
while(i<numbers.length){
     console.log(numbers[i])
    i++;
   
}

let n=0;
while(n<friends.length){
    console.log(friends[n])
    n++;
}