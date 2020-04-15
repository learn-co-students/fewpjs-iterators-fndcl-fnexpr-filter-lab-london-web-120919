// Code your solution here
const findMatching = (drivers, name) => {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase() )
}

const fuzzyMatch = (drivers, letters) => {
    return drivers.filter( driver => driver.toLowerCase().indexOf(letters.toLowerCase())===0)
}

const matchName = (drivers, driverName) => {
    return drivers.filter( driver => driver.name.toLowerCase() === driverName.toLowerCase())
}
