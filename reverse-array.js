const numbers=[1,2,4,3,5,85,88,5]
//console.log(numbers)
//const num1=numbers.reverse();
//console.log(num1)

//for loop
const rev_numbers=[]
for(const num of numbers){
    //console.log(num)
   // rev_numbers.push(num)
   rev_numbers.unshift(num)
}
console.log(rev_numbers)


const reversed_number=[]
for(let i=0; i<numbers.length;i++){
    const num2=numbers[i]
    reversed_number.unshift(num2)
}
console.log(reversed_number)

const rev_rev_numbers=[]
for(let i=numbers.length-1; i>0; i--){
    const num3=numbers[i]
    console.log(num3)
    rev_rev_numbers.push(num3)
}
console.log(rev_rev_numbers)