const persons=['akib', 'shakib', 'tofiq', 'rakib','mokib']
console.log(persons)
const sortedperson = persons.sort()
console.log(sortedperson)
const numbers=[4,1,7,2,6,8,9,3]
const numbers_asc=numbers.sort()
console.log(numbers_asc)

const numbers2=[9,1,5,7,6,4,2]
const numbers_ascii=[...numbers2].sort(function(a ,b){return a-b})
console.log(numbers_ascii)
const numbers3=[9,3,5,7,6,4,2]
const numbers_ascii1=[...numbers3].sort(function(a ,b){return b-a})
console.log(numbers_ascii1)