// Code your solution here
const findMatching = (array,condition) => {
   return array.filter( item => item.toLowerCase() === condition.toLowerCase())
}

const fuzzyMatch = (array,condition) => {
    return array.filter( item => item.toLowerCase()[0] === condition.toLowerCase()[0])
 }
 
 const matchName = (array,condition) => {
    return array.filter( item => item.name.toLowerCase() === condition.toLowerCase())
 }