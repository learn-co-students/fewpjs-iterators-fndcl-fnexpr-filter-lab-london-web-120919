// Code your solution here
function findMatching(drivers, str) {
    let out = drivers.filter(d => d.toUpperCase() === str.toUpperCase())
    return out
}

function fuzzyMatch(drivers, str) {
  return drivers.filter( dr => 
     dr.toLowerCase().indexOf(str.toLowerCase()) === 0)
}

function matchName(drivers, str) {
    return drivers.filter( match => match.name === str)
}